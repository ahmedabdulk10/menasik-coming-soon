import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const submitInterest = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      name: z.string().trim().max(120).optional(),
      email: z.string().email().max(254),
      kitInterest: z.enum(["without-ihram", "with-ihram", "not-sure"]),
      travelers: z.number().int().min(1).max(1000).optional(),
      notes: z.string().trim().max(2000).optional(),
    }),
  )
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    // Table isn't in the generated Database types yet; insert untyped.
    const { error } = await (supabaseAdmin.from as any)("interest_signups").insert({
      name: data.name || null,
      email: data.email.toLowerCase(),
      kit_interest: data.kitInterest,
      travelers: data.travelers ?? null,
      notes: data.notes || null,
    });

    if (error) {
      console.error("Interest signup insert failed", error);
      return { ok: false };
    }

    // Database save succeeded — now send the Web3Forms email notification.
    // Failure here must NOT surface to the visitor; the signup is already saved.
    try {
      const accessKey = process.env["WEB3FORMS_ACCESS_KEY"];
      if (!accessKey) {
        console.error("Web3Forms: WEB3FORMS_ACCESS_KEY is not configured");
        return { ok: true };
      }

      const kitLabel =
        data.kitInterest === "without-ihram"
          ? "Kit Without Ihram"
          : data.kitInterest === "with-ihram"
            ? "Kit With Ihram"
            : "Not sure yet";

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Interest List Signup — ${kitLabel}`,
          replyto: data.email,
          from_name: "Menasik Website",
          message: [
            "New Interest List Signup",
            "",
            `Name: ${data.name || "—"}`,
            `Email: ${data.email}`,
            `Kit: ${kitLabel}`,
            `Number of Travelers: ${data.travelers ?? "—"}`,
            `Note: ${data.notes || "—"}`,
          ].join("\n"),
        }),
      });

      if (!res.ok) {
        const body = await res.text().catch(() => "");
        console.error("Web3Forms notification failed", res.status, body);
      }
    } catch (web3formsError) {
      console.error("Web3Forms notification error", web3formsError);
    }

    return { ok: true };
  });
