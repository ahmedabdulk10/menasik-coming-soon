import { createFileRoute, Link } from "@tanstack/react-router";
import { WaitlistForm } from "@/components/WaitlistForm";
import { IslamicStar } from "@/components/IslamicStar";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { SiteFooter } from "@/components/SiteFooter";
import { KitCategoryList } from "@/components/KitCategoryList";
import { kitWithIhram } from "@/config/products";
import kitWithIhramImage from "@/assets/menasik-kit-with-ihram.png.asset.json";

export const Route = createFileRoute("/kit-with-ihram")({
  head: () => ({
    meta: [
      { title: "Kit With Ihram — Menasik" },
      {
        name: "description",
        content:
          "The complete Menasik kit — every worship, personal care, travel, and organization essential, plus a plain white two-piece ihram.",
      },
      { property: "og:title", content: "Kit With Ihram — Menasik" },
      {
        property: "og:description",
        content:
          "The complete Menasik kit — everything in the Kit Without Ihram, plus a plain white two-piece ihram.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Kit With Ihram — Menasik" },
      {
        name: "twitter:description",
        content:
          "The complete Menasik kit — everything in the Kit Without Ihram, plus a plain white two-piece ihram.",
      },
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
          <p className="tracked text-sm text-[color:var(--gold)]">Complete Kit</p>
          <h1 className="mt-4 font-serif text-4xl italic leading-tight text-[color:var(--cocoa)] sm:text-5xl md:text-6xl">
            {product.name}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--taupe)]">
            {product.summary}
          </p>
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

      {/* Ihram spotlight — prominent, high on the page */}
      <section className="bg-[color:var(--sand)]/50 px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <ImagePlaceholder label="[PLACEHOLDER: PLAIN WHITE IHRAM PHOTO]" aspect="4/5" />
          <div>
            <p className="tracked text-sm text-[color:var(--gold)]">The Ihram</p>
            <h2 className="mt-4 font-serif text-3xl italic text-[color:var(--cocoa)] sm:text-4xl">
              A plain white two-piece ihram.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[color:var(--taupe)]">
              A plain white two-piece men's ihram selected for comfort, coverage, portability, and
              convenient packing.
            </p>
            <p className="mt-6 text-base leading-relaxed text-[color:var(--taupe)]">
              This kit includes everything in the Kit Without Ihram, plus the ihram — so your
              preparation is complete in one box.
            </p>
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <IslamicStar className="mb-10" />
          <h2 className="text-center font-serif text-3xl sm:text-4xl">What's inside</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[color:var(--taupe)]">
            Every item from the Kit Without Ihram, plus the ihram — grouped for clarity.
          </p>
          <div className="mt-14">
            <KitCategoryList categories={product.categories} extra={product.extraItem} />
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-[color:var(--taupe)]/70">
            Airline, airport, and security requirements can vary. Travelers should verify current
            requirements before departure.
          </p>
        </div>
      </section>

      {/* Feature spotlights */}
      <section className="bg-[color:var(--sand)]/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <IslamicStar className="mb-10" />
          <h2 className="text-center font-serif text-3xl sm:text-4xl">Considered essentials</h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Spotlight
              label="[PLACEHOLDER: PREMIUM PRAYER MAT PHOTO]"
              title="Premium Prayer Mat"
              body="A refined mat for salah wherever the journey takes you."
            />
            <Spotlight
              label="[PLACEHOLDER: PREMIUM BAG PHOTO]"
              title="Premium Bag"
              body="A quiet, well-made carry that holds the kit and travels with you."
            />
            <Spotlight
              label="[PLACEHOLDER: PERSONAL-CARE PRODUCTS PHOTO]"
              title="Personal Care Collection"
              body="Fragrance-free essentials selected for ihram."
            />
            <Spotlight
              label="[PLACEHOLDER: DUA BOOK AND UMRAH GUIDE PHOTO]"
              title="Dua Book & Umrah Guide"
              body="A curated pair — duas for every stage, and the rites, step by step."
            />
            <Spotlight
              label="[PLACEHOLDER: DIGITAL TASBIH RING PHOTO]"
              title="Digital Tasbih Ring"
              body="A discreet ring for counting dhikr — no beads to fumble with."
            />
            <Spotlight
              label="[PLACEHOLDER: USB-C ADAPTER PHOTO]"
              title="USB-C Plug Adapter"
              body="A compact adapter for keeping devices ready on the go."
            />
            <Spotlight
              label="[PLACEHOLDER: BRANDED MENASIK BOX PHOTO]"
              title="Branded Menasik Box"
              body="A considered box that holds and presents the kit as one."
            />
          </div>
        </div>
      </section>

      {/* Box & bag section */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <ImagePlaceholder label="[PLACEHOLDER: KIT ARRANGED INSIDE MENASIK BOX]" aspect="4/3" />
          <div>
            <p className="tracked text-sm text-[color:var(--gold)]">Organized for travel</p>
            <h2 className="mt-4 font-serif text-3xl italic text-[color:var(--cocoa)] sm:text-4xl">
              A box that carries the kit as one.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[color:var(--taupe)]">
              The branded Menasik box holds every item in its place — including the ihram. The
              premium bag lifts out cleanly and travels with you, compact and thoughtfully
              organized.
            </p>
          </div>
        </div>
      </section>

      {/* Travel wording */}
      <section className="bg-[color:var(--sand)]/40 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <IslamicStar className="mb-8" />
          <h2 className="font-serif text-3xl sm:text-4xl">Travel-ready by design</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--taupe)]">
            Compact, carry-on conscious, travel-sized where applicable, and thoughtfully
            organized — designed to simplify preparation and packing so you can focus on your
            journey.
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-xs text-[color:var(--taupe)]/70">
            Airline, airport, and security requirements can vary. Travelers should verify current
            requirements before departure.
          </p>
        </div>
      </section>

      {/* Comparison link */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg text-[color:var(--taupe)]">
            Already have your ihram?
          </p>
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

      {/* CTA — waitlist */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <IslamicStar className="mb-10" />
          <h2 className="font-serif text-3xl sm:text-4xl">Notify me at launch.</h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-[color:var(--taupe)]">
            Menasik is pre-launch. Join the waitlist for early access when this kit is available.
          </p>
          <div className="mt-10">
            <WaitlistForm />
          </div>
          <p className="mt-8 text-sm text-[color:var(--taupe)]">
            Organizing a group?{" "}
            <Link to="/" hash="wholesale" className="underline decoration-[color:var(--gold-soft)] underline-offset-4 hover:text-[color:var(--gold)]">
              Contact Menasik
            </Link>
            .
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function Spotlight({ label, title, body }: { label: string; title: string; body: string }) {
  return (
    <div>
      <ImagePlaceholder label={label} aspect="4/3" showStar={false} />
      <h3 className="mt-5 font-serif text-xl text-[color:var(--cocoa)]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[color:var(--taupe)]">{body}</p>
    </div>
  );
}
