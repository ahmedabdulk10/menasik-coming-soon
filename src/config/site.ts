// ============================================================
// MENASIK — Central Config
// Edit these tokens in one place. The pages read everything from here.
// ============================================================

export const siteConfig = {
  // ---------- Integration keys ----------
  // Two separate Web3Forms public keys, one per form. Safe to ship client-side.
  WEB3FORMS_INTEREST_KEY: "a0d0a27c-682c-41c7-b3bb-56f630d99260",
  WEB3FORMS_GROUP_INQUIRY_KEY: "fea98b2f-9050-4e43-a0d8-56775cbb84ef",

  // ---------- Pre-order / Stripe ----------
  // Payment Link URLs and publishable key are provided via Lovable's secure secrets.
  STRIPE_KIT_WITHOUT_IHRAM_URL: "{{STRIPE_KIT_WITHOUT_IHRAM_URL}}",
  STRIPE_KIT_WITH_IHRAM_URL: "{{STRIPE_KIT_WITH_IHRAM_URL}}",
  STRIPE_PUBLISHABLE_KEY: "{{STRIPE_PUBLISHABLE_KEY}}",
  KIT_PRICE_WITHOUT_IHRAM: "$69.99",
  KIT_PRICE_WITH_IHRAM: "$79.99",
  KIT_SHIP_DATE: "{{KIT_SHIP_DATE}}",

  // ---------- Contact / social ----------
  CONTACT_EMAIL: "info@menasik.co",
  INSTAGRAM_URL: "{{INSTAGRAM_URL}}",

  // ---------- Copy ----------
  tagline: "Pack Less. Worship More.",
  heroSubtext:
    "One box with everything you need for Umrah, so your last week before departure is spent preparing your heart instead of chasing a shopping list.",

  teaserPoints: [
    {
      title: "Nothing Scented",
      body: "Soap, deodorant, creme and wipes are all fragrance-free, so you stay in ihram without second-guessing a label.",
    },
    {
      title: "Fits Your Carry-On",
      body: "Travel sizes where it matters, packed into one bag that lifts out of the box and goes straight into your luggage.",
    },
    {
      title: "Nothing Forgotten",
      body: "Prayer mat, dua book, guide, tasbih ring, scissors, safety pins. The small things people always leave at home.",
    },
  ],

  faqs: [
    {
      q: "What is actually in the kit?",
      a: "Worship items such as a prayer mat, dua book, Umrah guide and digital tasbih ring; fragrance-free personal care; and travel items like a reusable bottle, USB-C adapter, scissors and safety pins. Full lists are on each kit page.",
    },
    {
      q: "Which kit should I pick?",
      a: "If you already own your ihram, choose the Kit Without Ihram. If you want everything settled in one box, choose the Kit With Ihram, which adds a plain white two-piece ihram.",
    },
    {
      q: "Is everything ihram-appropriate?",
      a: "Yes. Every personal care item in the kit is unscented, and the rest of the kit was chosen with the rules of ihram in mind.",
    },
    {
      q: "Can I bring it as carry-on?",
      a: "The kit is packed with travel sizes where they exist. Airline and security rules change often, so check your airline before you fly.",
    },
    {
      q: "Can I order for a group?",
      a: "Yes. Travel companies, mosques and group leaders can send a group inquiry and we will come back with options for your travelers.",
    },
    {
      q: "How do I order?",
      a: "Join the interest list with the kit you want and how many travelers you have. We contact you directly as soon as your kit is ready to ship.",
    },
  ],
} as const;

// Helper — returns true only when a token has been replaced with a real value.
export const isConfigured = (value: string) =>
  typeof value === "string" && value.length > 0 && !value.startsWith("{{");
