import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const subscribeToWaitlist = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      email: z.string().email().max(254),
    }),
  )
  .handler(async ({ data }) => {
    const apiKey = process.env.MAILERLITE_API_KEY;
    const groupId = process.env.MAILERLITE_GROUP_ID;

    // If MailerLite isn't configured, succeed silently so preview still works.
    if (!apiKey || !groupId) {
      return { ok: true, configured: false };
    }

    try {
      const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ email: data.email, groups: [groupId] }),
      });
      if (!res.ok) {
        console.error("MailerLite subscribe failed", res.status);
        return { ok: false, configured: true };
      }
      return { ok: true, configured: true };
    } catch (err) {
      console.error("MailerLite subscribe error", err);
      return { ok: false, configured: true };
    }
  });
