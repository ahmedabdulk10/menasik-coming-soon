import { createFileRoute, Link } from "@tanstack/react-router";
import { IslamicStar } from "@/components/IslamicStar";
import { SiteFooter } from "@/components/SiteFooter";
import { KitCategoryList } from "@/components/KitCategoryList";
import { CtaBand } from "@/components/CtaBand";
import { PreOrderSection } from "@/components/PreOrderSection";
import { kitWithIhram } from "@/config/products";
import { isConfigured, siteConfig } from "@/config/site";
import kitWithIhramImage from "@/assets/menasik-kit-with-ihram.png.asset.json";

const description =
  "The complete Menasik kit: every worship, personal care and travel essential, plus a plain white two-piece ihram, packed in one box.";

export const Route = createFileRoute("/kit-with-ihram")({
  head: () => ({
    meta: [
      { title: "Kit With Ihram | Menasik" },
      { name: "description", content: description },
      { property: "og:title", content: "Kit With Ihram | Menasik" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Kit With Ihram | Menasik" },
      { name: "twitter:description", content: description },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/kit-with-ihram" }],
  }),
  component: KitWithIhramPage,
});

function KitWithIhramPage() {
  const product = kitWithIhram;

  return (
    <main className="min-h-screen bg-[color:var(--cream)]">
      {/* Intro */}
      <section className="px-6 pb-12 pt-20 sm:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="tracked text-sm text-[color:var(--gold)]">Most Popular</p>
          <h1 className="mt-4 font-serif text-4xl italic leading-tight text-[color:var(--cocoa)] sm:text-5xl md:text-6xl">
            {product.name}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--taupe)]">
            {product.summary}
          </p>
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/interest-list"
              className="tracked-tight w-full rounded-none border border-[color:var(--gold)] bg-[color:var(--gold)] px-10 py-4 text-sm text-[color:var(--cream)] transition-all hover:bg-transparent hover:text-[color:var(--cocoa)] sm:w-auto"
            >
              Reserve This Kit
            </Link>
            <a
              href="#inside"
              className="tracked-tight w-full rounded-none border border-[color:var(--cocoa)] px-10 py-4 text-sm text-[color:var(--cocoa)] transition-all hover:bg-[color:var(--cocoa)] hover:text-[color:var(--cream)] sm:w-auto"
            >
              See Every Item
            </a>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl">
          <img
            src={kitWithIhramImage.url}
            alt="The Menasik kit with ihram: a branded box plus a plain white two-piece ihram, ready for Umrah."
            className="w-full rounded-xl border border-[color:var(--gold-soft)]/60 object-cover"
            style={{ aspectRatio: "16/10" }}
          />
        </div>
      </section>

      {/* Ihram spotlight */}
      <section className="bg-[color:var(--sand)]/50 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="tracked text-sm text-[color:var(--gold)]">The Ihram</p>
          <h2 className="mt-4 font-serif text-3xl italic text-[color:var(--cocoa)] sm:text-4xl">
            A plain white two-piece ihram, included.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[color:var(--taupe)]">
            Chosen for comfort in the heat, full coverage, and a weight that folds down small in
            your bag.
          </p>
          <p className="mt-6 text-base leading-relaxed text-[color:var(--taupe)]">
            This kit holds everything in the Kit Without Ihram and adds the ihram, so your
            preparation is finished in one box.
          </p>
        </div>
      </section>

      {/* What's inside */}
      <section id="inside" className="scroll-mt-24 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <IslamicStar className="mb-10" />
          <h2 className="text-center font-serif text-3xl sm:text-4xl">What's inside</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[color:var(--taupe)]">
            Every item from the Kit Without Ihram, plus the ihram, grouped so nothing gets missed.
          </p>
          <div className="mt-14">
            <KitCategoryList categories={product.categories} extra={product.extraItem} />
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-[color:var(--taupe)]/70">
            Airline, airport and security rules can change. Please check your airline before you
            travel.
          </p>
        </div>
      </section>

      {/* Box & bag section */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <img
            src={kitWithIhramImage.url}
            alt="Menasik kit with ihram arranged in its branded box"
            loading="lazy"
            className="w-full rounded-sm object-cover shadow-sm"
            style={{ aspectRatio: "4 / 3" }}
          />
          <div>
            <p className="tracked text-sm text-[color:var(--gold)]">Packed for travel</p>
            <h2 className="mt-4 font-serif text-3xl italic text-[color:var(--cocoa)] sm:text-4xl">
              One box at home. One bag on the plane.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[color:var(--taupe)]">
              The Menasik box keeps every item in place, including the ihram. The bag lifts straight
              out and goes into your carry-on, so packing takes a minute instead of an evening.
            </p>
            <div className="mt-8">
              <Link
                to="/interest-list"
                className="tracked-tight inline-block rounded-none border border-[color:var(--gold)] bg-[color:var(--gold)] px-8 py-3 text-sm text-[color:var(--cream)] transition-all hover:bg-transparent hover:text-[color:var(--cocoa)]"
              >
                Reserve This Kit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PreOrderSection
        paymentUrl={siteConfig.STRIPE_KIT_WITH_IHRAM_URL}
        price={siteConfig.KIT_PRICE_WITH_IHRAM}
      />

      {/* Comparison link */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg text-[color:var(--taupe)]">Already have your ihram?</p>
          <div className="mt-6">
            <Link
              to="/kit-without-ihram"
              className="tracked-tight inline-block rounded-none border border-[color:var(--cocoa)] px-8 py-3 text-sm text-[color:var(--cocoa)] transition-all hover:bg-[color:var(--cocoa)] hover:text-[color:var(--cream)]"
            >
              View Kit Without Ihram
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Reserve the Kit With Ihram."
        body="Tell us how many travelers you have and we contact you directly the moment this kit is ready to ship."
        primaryLabel="Reserve Kit With Ihram"
      />

      <SiteFooter />
    </main>
  );
}
