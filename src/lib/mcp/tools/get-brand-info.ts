import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_brand_info",
  title: "Get Menasik brand info",
  description:
    "Return public brand info for Menasik: tagline, description, contact email, and launch status.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: "Menasik — Pack Less. Worship More. Premium Umrah kits, thoughtfully curated. Launching soon. Contact: info@menasik.co",
      },
    ],
    structuredContent: {
      name: "Menasik",
      tagline: "Pack Less. Worship More.",
      description:
        "Premium Umrah kits — thoughtfully curated so you can focus on your journey.",
      contactEmail: "info@menasik.co",
      status: "coming_soon",
      site: "https://menasik.co",
    },
  }),
});
