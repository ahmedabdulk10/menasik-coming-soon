import { createFileRoute, Link } from "@tanstack/react-router";
import kitAsset from "@/assets/menasik-kit.asset.json";
import kitWithIhramImage from "@/assets/menasik-kit-with-ihram.png.asset.json";
import kitWithoutIhramImage from "@/assets/menasik-kit-without-ihram.png.asset.json";
import { isConfigured, siteConfig } from "@/config/site";
import { IslamicStar, ArchMotif, PalmShadow } from "@/components/IslamicStar";
import { SiteFooter } from "@/components/SiteFooter";
import { FaqSection } from "@/components/FaqSection";
import { CtaBand } from "@/components/CtaBand";
import { kitWithoutIhram, kitWithIhram } from "@/config/products";
import logoAsset from "@/assets/menasik-logo.asset.json";

const logo = logoAsset.url;
const kitImage = kitAsset.url;

const shipsLine = isConfigured(siteConfig.KIT_SHIP_DATE)
  ? `Ships ${siteConfig.KIT_SHIP_DATE}`
  : "Ships soon";

const description =
  "Menasik packs every Umrah essential into one box. Fragrance-free care, a prayer mat, dua book, guide and travel gear, ready for your carry-on.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Menasik | Premium Umrah Kits, Packed and Ready" },
      { name: "description", content: description },
      { property: "og:title", content: "Menasik | Premium Umrah Kits" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "Menasik | Premium Umrah Kits" },
      { name: "twitter:description", content: description },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

const steps = [
  {
    n: "01",
    title: "Pick your kit",
    body: "With ihram if you need one, without if you already own yours.",
  },
  {
    n: "02",
    title: "Tell us you want it",
    body: "One short form with your name, kit and number of travelers.",
  },
  {
    n: "03",
    title: "We reach out first",
    body: "You hear from us directly the moment your kit is ready to ship.",
  },
];

function Landing() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[color:var(--cream)]">
      <ArchMotif className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-[120vh] w-[80vw] -translate-x-1/2 text-[color:var(--gold)] opacity-[0.06]" />

      {/* ============== HERO ============== */}
      <section className="sacred-backdrop relative flex min-h-[90svh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
        <PalmShadow className="pointer-events-none absolute -left-24 -top-20 h-[70vh] w-[70vh] text-[color:var(--cocoa)] opacity-[0.07] md:-left-10" />

        <div className="fade-in relative" style={{ animationDelay: "0.05s" }}>
          <img
            src={logo}
            alt="Menasik, مناسك"
            width={560}
            height={400}
            className="mx-auto h-40 w-auto select-none object-contain sm:h-52 md:h-60"
          />
        </div>

        <p className="tracked fade-up mt-8 text-sm text-[color:var(--taupe)]" style={{ animationDelay: "0.35s" }}>
          Premium Umrah Kits
        </p>

        <h1
          className="fade-up mt-6 font-serif text-4xl italic leading-tight text-[color:var(--cocoa)] sm:text-5xl md:text-6xl"
          style={{ animationDelay: "0.5s" }}
        >
          {siteConfig.tagline}
        </h1>

        <p
          className="fade-up mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--taupe)] sm:text-xl"
          style={{ animationDelay: "0.7s" }}
        >
          {siteConfig.heroSubtext}
        </p>

        <div
          className="fade-up mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          style={{ animationDelay: "0.85s" }}
        >
          <Link
            to="/interest-list"
            className="tracked-tight w-full rounded-none border border-[color:var(--gold)] bg-[color:var(--gold)] px-10 py-4 text-sm text-[color:var(--cream)] transition-all hover:bg-transparent hover:text-[color:var(--cocoa)] sm:w-auto"
          >
            Reserve My Kit
          </Link>
          <a
            href="#kits"
            className="tracked-tight w-full rounded-none border border-[color:var(--cocoa)] px-10 py-4 text-sm text-[color:var(--cocoa)] transition-all hover:bg-[color:var(--cocoa)] hover:text-[color:var(--cream)] sm:w-auto"
          >
            See What's Inside
          </a>
        </div>

        <p className="fade-up mt-6 text-sm text-[color:var(--taupe)]" style={{ animationDelay: "1s" }}>
          Fragrance-free. Carry-on sized. Ready the day it arrives.
        </p>
      </section>

      {/* ============== PRODUCT SHOWCASE ============== */}
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <img
            src={kitImage}
            alt="The Menasik Umrah kit laid out with its box, bag, water bottle and dua book"
            width={1200}
            height={1200}
            loading="lazy"
            className="w-full rounded-xl object-cover shadow-[0_20px_60px_-20px_oklch(0.30_0.035_55/0.15)]"
          />
        </div>
      </section>

      {/* ============== WHY ============== */}
      <section className="bg-[color:var(--sand)]/60 px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <IslamicStar className="mb-12" />
          <h2 className="text-center font-serif text-3xl sm:text-4xl">
            The week before Umrah should not feel like a scavenger hunt.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-[color:var(--taupe)]">
            Unscented soap in one shop, safety pins in another, a prayer mat you settle for at the
            airport. Menasik solves all of it in a single box.
          </p>
          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
            {siteConfig.teaserPoints.map((point, i) => (
              <div key={point.title} className="text-center">
                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center">
                  <span className="font-serif text-2xl italic text-[color:var(--gold)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="tracked-tight text-sm text-[color:var(--cocoa)]">{point.title}</h3>
                <p className="mx-auto mt-4 max-w-xs text-base leading-relaxed text-[color:var(--taupe)]">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== TWO KITS ============== */}
      <section id="kits" className="scroll-mt-24 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <IslamicStar className="mb-12" />
          <h2 className="text-center font-serif text-3xl sm:text-4xl">Choose your kit</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[color:var(--taupe)]">
            Same kit inside. The only question is whether you need the ihram.
          </p>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {/* Kit Without Ihram */}
            <article className="flex flex-col rounded-xl border border-[color:var(--gold-soft)]/40 bg-[color:var(--cream)] p-6 sm:p-8">
              <img
                src={kitWithoutIhramImage.url}
                alt="Menasik Kit Without Ihram in its branded presentation box"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-xl border border-[color:var(--gold-soft)]/60 object-cover"
              />
              <div className="mt-6 flex-1">
                <h3 className="font-serif text-2xl text-[color:var(--cocoa)] sm:text-3xl">
                  {kitWithoutIhram.name}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[color:var(--taupe)]">
                  Every worship, personal care and travel essential in the box. Best if you already
                  own your ihram, since one is not included here.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/kit-without-ihram"
                  className="tracked-tight inline-block rounded-none border border-[color:var(--cocoa)] px-8 py-3 text-sm text-[color:var(--cocoa)] transition-all hover:bg-[color:var(--cocoa)] hover:text-[color:var(--cream)]"
                >
                  See What's Inside
                </Link>
              </div>
            </article>

            {/* Kit With Ihram */}
            <article className="relative flex flex-col rounded-xl border border-[color:var(--gold)]/60 bg-[color:var(--cream)] p-6 sm:p-8">
              <span className="tracked-tight absolute -top-3 left-6 bg-[color:var(--cream)] px-3 text-xs text-[color:var(--gold)]">
                Most Popular
              </span>
              <img
                src={kitWithIhramImage.url}
                alt="Menasik Kit With Ihram beside folded white ihram cloth"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-xl border border-[color:var(--gold-soft)]/60 object-cover"
              />
              <div className="mt-6 flex-1">
                <h3 className="font-serif text-2xl text-[color:var(--cocoa)] sm:text-3xl">
                  {kitWithIhram.name}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[color:var(--taupe)]">
                  Everything above plus a plain white two-piece ihram. Nothing left to buy before
                  you fly.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/kit-with-ihram"
                  className="tracked-tight inline-block rounded-none border border-[color:var(--gold)] bg-[color:var(--gold)] px-8 py-3 text-sm text-[color:var(--cream)] transition-all hover:bg-transparent hover:text-[color:var(--cocoa)]"
                >
                  See What's Inside
                </Link>
              </div>
            </article>
          </div>

          <p className="mt-12 text-center text-base text-[color:var(--taupe)]">
            Already know which one you want?{" "}
            <Link
              to="/interest-list"
              className="underline decoration-[color:var(--gold-soft)] underline-offset-4 hover:text-[color:var(--gold)]"
            >
              Reserve it now
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ============== HOW IT WORKS ============== */}
      <section className="bg-[color:var(--sand)]/60 px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-serif text-3xl sm:text-4xl">How it works</h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.n} className="text-center">
                <span className="font-serif text-3xl italic text-[color:var(--gold)]">{step.n}</span>
                <h3 className="mt-4 font-serif text-xl text-[color:var(--cocoa)]">{step.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-base leading-relaxed text-[color:var(--taupe)]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== FAQ ============== */}
      <FaqSection />

      {/* ============== FINAL CTA ============== */}
      <CtaBand />

      <SiteFooter />
    </main>
  );
}
