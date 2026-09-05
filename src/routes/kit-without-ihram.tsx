import { createFileRoute, Link } from "@tanstack/react-router";
import { WaitlistForm } from "@/components/WaitlistForm";
import { IslamicStar } from "@/components/IslamicStar";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { SiteFooter } from "@/components/SiteFooter";
import { KitCategoryList } from "@/components/KitCategoryList";
import { kitWithoutIhram } from "@/config/products";
import kitWithoutIhramImage from "@/assets/menasik-kit-without-ihram.png.asset.json";

export const Route = createFileRoute("/kit-without-ihram")({
  head: () => ({
    meta: [
      { title: "Kit Without Ihram — Menasik" },
      {
        name: "description",
        content:
          "The full Menasik kit of worship, personal care, travel, and organization essentials for travelers who already have their ihram.",
      },
      { property: "og:title", content: "Kit Without Ihram — Menasik" },
      {
        property: "og:description",
        content:
          "The full Menasik kit for travelers who already have their ihram.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Kit Without Ihram — Menasik" },
      {
        name: "twitter:description",
        content: "The full Menasik kit for travelers who already have their ihram.",
      },
    ],
    links: [{ rel: "canonical", href: "/kit-without-ihram" }],
  }),
  component: KitWithoutIhramPage,
});

function KitWithoutIhramPage() {
  const product = kitWithoutIhram;

  return (
    <main className="min-h-screen bg-[color:var(--cream)]">
      {/* Intro */}
      <section className="px-6 pb-12 pt-20 sm:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="tracked text-sm text-[color:var(--gold)]">Kit</p>
          <h1 className="mt-4 font-serif text-4xl italic leading-tight text-[color:var(--cocoa)] sm:text-5xl md:text-6xl">
            {product.name}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--taupe)]">
            {product.summary} Every item is fragrance-free and ihram-appropriate, packed into a
            considered box that's ready to travel.
          </p>
        </div>
      </section>

      {/* Hero image */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl">
          <img
            src={kitWithoutIhramImage.url}
            alt="The Menasik kit without ihram: a branded box with the complete travel, worship, and personal-care essentials."
            className="w-full rounded-xl border border-[color:var(--gold-soft)]/60 object-cover"
            style={{ aspectRatio: "16/10" }}
          />
        </div>
      </section>

      {/* Specification note */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-3xl rounded-lg border border-[color:var(--gold-soft)]/40 bg-[color:var(--sand)]/40 px-6 py-5 text-center">
          <p className="tracked-tight text-xs text-[color:var(--gold)]">Specification</p>
          <p className="mt-2 text-base text-[color:var(--cocoa)]">
            An ihram is not included with this kit.
          </p>
        </div>
      </section>

      {/* What's inside */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <IslamicStar className="mb-10" />
          <h2 className="text-center font-serif text-3xl sm:text-4xl">What's inside</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[color:var(--taupe)]">
            Grouped for clarity — worship, personal care, and everything for travel.
          </p>
          <div className="mt-14">
            <KitCategoryList categories={product.categories} />
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-[color:var(--taupe)]/70">
            Airline, airport, and security requirements can vary. Travelers should verify current
            requirements before departure.
          </p>
        </div>
      </section>

      {/* Box & bag section */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <ImagePlaceholder label="KIT ARRANGED INSIDE MENASIK BOX" aspect="4/3" />
          <div>
            <p className="tracked text-sm text-[color:var(--gold)]">Organized for travel</p>
            <h2 className="mt-4 font-serif text-3xl italic text-[color:var(--cocoa)] sm:text-4xl">
              A box that carries the kit as one.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[color:var(--taupe)]">
              The branded Menasik box holds every item in its place. The premium bag lifts out
              cleanly and travels with you — compact, considered, and thoughtfully organized so
              nothing gets left behind.
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
            Prefer everything in one box, ihram included?
          </p>
          <div className="mt-6">
            <Link
              to="/kit-with-ihram"
              className="tracked-tight inline-block rounded-none border border-[color:var(--gold)] bg-[color:var(--gold)] px-8 py-3 text-sm text-[color:var(--cream)] transition-all hover:bg-transparent hover:text-[color:var(--cocoa)]"
            >
              View Kit With Ihram
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
            <Link to="/group-inquiry" className="underline decoration-[color:var(--gold-soft)] underline-offset-4 hover:text-[color:var(--gold)]">
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
