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
      { name: "Premium Prayer Mat", description: "Soft underfoot, light enough to carry all day, for salah at the hotel or in the courtyards.", icon: "BookOpen" },
      { name: "Dua Book", description: "Duas for every stage of the journey, in one pocket-sized book.", icon: "BookMarked" },
      { name: "Umrah Guide", description: "The rites explained step by step, in plain language you can follow while you walk.", icon: "Compass" },
      { name: "Digital Tasbih Ring", description: "Count dhikr with your thumb. No beads to drop in a crowd.", icon: "CircleDot" },
    ],
  },
  {
    title: "Personal Care Essentials",
    items: [
      { name: "Unscented Soap", description: "Fragrance-free, so it is safe to use in ihram.", icon: "Droplet" },
      { name: "Unscented Body Creme", description: "Relief for dry skin after long flights and hot afternoons.", icon: "Container" },
      { name: "Unscented Deodorant", description: "Stay fresh through crowded days without any fragrance.", icon: "SprayCan" },
      { name: "Unscented Face Wipes", description: "A quick refresh between prayers and long stretches of transit.", icon: "Wind" },
      { name: "Nail Clippers", description: "For grooming before you enter the state of ihram.", icon: "Scissors" },
    ],
  },
  {
    title: "Travel and Organization Essentials",
    items: [
      { name: "Premium Bag", description: "Holds the whole kit, lifts out of the box, and goes straight into your luggage.", icon: "Briefcase" },
      { name: "USB-C Plug Adapter", description: "Keeps your phone charged on Saudi outlets without hunting for one at the airport.", icon: "Plug" },
      { name: "Reusable Water Bottle", description: "Refill between prayers instead of buying bottles all day.", icon: "GlassWater" },
      { name: "Small Scissors", description: "For trimming hair after Umrah.", icon: "Scissors" },
      { name: "Safety Pins", description: "The one item most pilgrims forget, and the one they ask for first.", icon: "Pin" },
      { name: "Branded Menasik Box", description: "Holds the kit together at home and makes it easy to gift.", icon: "Package" },
    ],
  },
];

export const ihramItem: KitItem = {
  name: "Plain White Two-Piece Ihram",
  description: "A plain white two-piece men's ihram, chosen for comfort, coverage and easy packing.",
  icon: "Shirt",
};

export type Product = {
  slug: string;
  name: string;
  summary: string;
  route: string;
  categories: KitCategory[];
  extraItem?: KitItem;
};

export const kitWithoutIhram: Product = {
  slug: "kit-without-ihram",
  name: "Kit Without Ihram",
  summary:
    "Every Menasik worship, personal care and travel essential in one box, for travelers who already own their ihram.",
  route: "/kit-without-ihram",
  categories: kitCategories,
};

export const kitWithIhram: Product = {
  slug: "kit-with-ihram",
  name: "Kit With Ihram",
  summary:
    "Everything in the Kit Without Ihram plus a plain white two-piece ihram, so your preparation is finished in one box.",
  route: "/kit-with-ihram",
  categories: kitCategories,
  extraItem: ihramItem,
};
