// ============================================================
// MENASIK — Product Data (single source of truth)
// ============================================================


export type KitItem = {
  name: string;
  description: string;
  icon: string; // lucide-react icon name
};

export type KitCategory = {
  title: string;
  items: KitItem[];
};

export const kitCategories: KitCategory[] = [
  {
    title: "Worship Essentials",
    items: [
      { name: "Premium Prayer Mat", description: "A refined mat for salah at home, in transit, and in the Haram courtyards.", icon: "BookOpen" },
      { name: "Dua Book", description: "A curated collection of duas for every stage of the journey.", icon: "BookMarked" },
      { name: "Umrah Guide", description: "A clear, concise walkthrough of the rites, step by step.", icon: "Compass" },
      { name: "Digital Tasbih Ring", description: "A discreet ring for counting dhikr — no beads to fumble with.", icon: "CircleDot" },
    ],
  },
  {
    title: "Personal Care Essentials",
    items: [
      { name: "Unscented Soap", description: "Fragrance-free, ihram-appropriate.", icon: "Droplet" },
      { name: "Unscented Body Creme", description: "Gentle hydration without fragrance.", icon: "Container" },
      { name: "Unscented Deodorant", description: "Fragrance-free, everyday freshness.", icon: "SprayCan" },
      { name: "Unscented Face Wipes", description: "Quick refreshment between prayers and long transit.", icon: "Wind" },
      { name: "Nail Clippers", description: "A small, considered tool for pre-ihram grooming.", icon: "Scissors" },
    ],
  },
  {
    title: "Travel and Organization Essentials",
    items: [
      { name: "Premium Bag", description: "A quiet, well-made carry that fits the kit and travels with you.", icon: "Briefcase" },
      { name: "USB-C Plug Adapter", description: "A compact adapter for keeping devices ready on the go.", icon: "Plug" },
      { name: "Reusable Water Bottle", description: "For hydration between prayers and long walks.", icon: "GlassWater" },
      { name: "Small Scissors", description: "A small pair for post-Umrah hair trimming.", icon: "Scissors" },
      { name: "Safety Pins", description: "A small essential for securing the ihram comfortably.", icon: "Pin" },
      { name: "Branded Menasik Box", description: "A considered box that holds and presents the kit as one.", icon: "Package" },
    ],
  },
];

export const ihramItem: KitItem = {
  name: "Plain White Two-Piece Ihram",
  description: "A plain white two-piece men's ihram selected for comfort, coverage, portability, and convenient packing.",
  icon: "Shirt",
};

export type Product = {
  slug: string;
  name: string;
  price: string;
  summary: string;
  route: string;
  categories: KitCategory[];
  extraItem?: KitItem;
};

export const kitWithoutIhram: Product = {
  slug: "kit-without-ihram",
  name: "Kit Without Ihram",
  price: PRICE_KIT_WITHOUT_IHRAM,
  summary:
    "The full set of Menasik worship, personal care, travel, and organization essentials. Made for travelers who already have their ihram.",
  route: "/kit-without-ihram",
  categories: kitCategories,
};

export const kitWithIhram: Product = {
  slug: "kit-with-ihram",
  name: "Kit With Ihram",
  price: PRICE_KIT_WITH_IHRAM,
  summary:
    "Everything in the Kit Without Ihram, plus a plain white two-piece ihram. Made for travelers who want their preparation complete in one box.",
  route: "/kit-with-ihram",
  categories: kitCategories,
  extraItem: ihramItem,
};
