import { defineMcp } from "@lovable.dev/mcp-js";
import subscribeWaitlist from "./tools/subscribe-waitlist";
import getBrandInfo from "./tools/get-brand-info";

export default defineMcp({
  name: "menasik-mcp",
  title: "Menasik MCP",
  version: "0.1.0",
  instructions:
    "Public tools for the Menasik brand site. Use `get_brand_info` to learn about Menasik, and `subscribe_waitlist` to add an email to the launch waitlist.",
  tools: [subscribeWaitlist, getBrandInfo],
});
