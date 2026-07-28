import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "subscribe_waitlist",
  title: "Join Menasik waitlist",
  description:
    "Subscribe an email address to the Menasik launch waitlist. Same submission as the public sign-up form on menasik.co.",
  inputSchema: {
    email: z.string().email().max(254).describe("Email address to add to the waitlist."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: true },
  handler: async ({ email }) => {
    const apiKey = process.env.MAILERLITE_API_KEY;
    const groupId = process.env.MAILERLITE_GROUP_ID;

    if (!apiKey || !groupId) {
      return {
        content: [
          {
            type: "text",
            text: "Waitlist accepted (MailerLite not configured on this environment).",
          },
        ],
        structuredContent: { ok: true, configured: false, email },
      };
    }

    try {
      const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ email, groups: [groupId] }),
      });
      if (!res.ok) {
        return {
          content: [{ type: "text", text: `Subscribe failed (${res.status}).` }],
          isError: true,
        };
      }
      return {
        content: [{ type: "text", text: `Subscribed ${email} to the Menasik waitlist.` }],
        structuredContent: { ok: true, configured: true, email },
      };
    } catch (err) {
      return {
        content: [{ type: "text", text: `Subscribe error: ${(err as Error).message}` }],
        isError: true,
      };
    }
  },
});
