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
    return { ok: true };
  });
