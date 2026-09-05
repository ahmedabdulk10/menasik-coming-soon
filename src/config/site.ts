// ============================================================
// MENASIK — Central Config
// Edit these tokens in one place. The page reads everything from here.
// ============================================================

export const siteConfig = {
  // ---------- Integration keys (replace these strings) ----------
  // MailerLite keys live server-side only (set MAILERLITE_API_KEY and
  // MAILERLITE_GROUP_ID as secrets) and are used by the waitlist server fn.
  WEB3FORMS_ACCESS_KEY: "a0d0a27c-682c-41c7-b3bb-56f630d99260",

  // ---------- Contact / social ----------
  CONTACT_EMAIL: "info@menasik.co",
  INSTAGRAM_URL: "{{INSTAGRAM_URL}}",

  // ---------- Copy ----------
  tagline: "Pack Less. Worship More.",
  heroSubtext:
    "Premium Umrah kits — thoughtfully curated so you can focus on your journey.",

  teaserPoints: [
    {
      title: "Ihram-Appropriate",
      body: "Every item ihram-appropriate and fragrance-free.",
    },
    {
      title: "Carry-On Conscious",
      body: "Travel-sized where applicable and thoughtfully packed.",
    },
    {
      title: "Thoughtfully Curated",
      body: "Everything you need for the journey, in one box.",
    },
  ],
} as const;

// Helper — returns true only when a token has been replaced with a real value.
export const isConfigured = (value: string) =>
  typeof value === "string" && value.length > 0 && !value.startsWith("{{");
