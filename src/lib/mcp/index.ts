import { auth, defineMcp } from "@lovable.dev/mcp-js";
import subscribeWaitlist from "./tools/subscribe-waitlist";
import getBrandInfo from "./tools/get-brand-info";

// The OAuth issuer must be the direct Supabase auth host; the project ref is the
// only value that survives publish unchanged.
const projectRef = import.meta.env['VITE_SUPABASE_PROJECT_ID'] ?? "project-ref-unset";

export default defineMcp({
  name: "menasik-launchpad",
  title: "Menasik Launchpad",
  version: "0.1.0",
  instructions:
    "Tools for the Menasik brand site. Use `get_brand_info` to learn about Menasik, and `subscribe_waitlist` to add an email to the launch waitlist. Callers must sign in as a Menasik user.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [subscribeWaitlist, getBrandInfo],
});
