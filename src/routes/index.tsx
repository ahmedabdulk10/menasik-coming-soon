import { createFileRoute, Link } from "@tanstack/react-router";
import kitAsset from "@/assets/menasik-kit.asset.json";
import { siteConfig } from "@/config/site";
import { WaitlistForm } from "@/components/WaitlistForm";
import { WholesaleForm } from "@/components/WholesaleForm";
import { IslamicStar, ArchMotif, PalmShadow } from "@/components/IslamicStar";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { SiteFooter } from "@/components/SiteFooter";
import { kitWithoutIhram, kitWithIhram } from "@/config/products";
import logoAsset from "@/assets/menasik-logo.asset.json";

const logo = logoAsset.url;
const kitImage = kitAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Menasik — Coming Soon | Premium Umrah Kits" },
      {
        name: "description",
        content:
          "Menasik — premium Umrah kits. Thoughtfully curated so you can focus on your journey. Join the waitlist.",
      },
      { property: "og:title", content: "Menasik — Coming Soon | Premium Umrah Kits" },
      {
        property: "og:description",
        content: "Premium Umrah kits. Pack Less. Worship More.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "Menasik — Coming Soon" },
      {
        name: "twitter:description",
        content: "Premium Umrah kits. Pack Less. Worship More.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

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
            alt="Menasik — مناسك"
            width={560}
            height={400}
            className="mx-auto h-44 w-auto select-none object-contain sm:h-56 md:h-64"
          />
        </div>

        <p className="tracked fade-up mt-10 text-sm text-[color:var(--taupe)]" style={{ animationDelay: "0.35s" }}>
          Coming Soon
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

        <div className="fade-up mt-16 text-[color:var(--gold)]" style={{ animationDelay: "1s" }} aria-hidden="true">
          <div className="mx-auto h-12 w-px bg-gradient-to-b from-transparent to-[color:var(--gold-soft)]" />
        </div>
      </section>

      {/* ============== PRODUCT SHOWCASE ============== */}
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <img
            src={kitImage}
            alt="Menasik premium Umrah kit — beautifully curated essentials for your sacred journey"
            width={1200}
            height={1200}
            loading="lazy"
            className="w-full rounded-xl object-cover shadow-[0_20px_60px_-20px_oklch(0.30_0.035_55/0.15)]"
          />
        </div>
      </section>

      {/* ============== TWO KITS ============== */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <IslamicStar className="mb-12" />
          <h2 className="text-center font-serif text-3xl sm:text-4xl">Choose your kit</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[color:var(--taupe)]">
            Two thoughtfully composed kits — pick the one that fits your journey.
          </p>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {/* Kit Without Ihram */}
            <article className="flex flex-col rounded-xl border border-[color:var(--gold-soft)]/40 bg-[color:var(--cream)] p-6 sm:p-8">
              <ImagePlaceholder label="[PLACEHOLDER: KIT WITHOUT IHRAM PHOTO]" aspect="4/3" />
              <div className="mt-6 flex-1">
                <h3 className="font-serif text-2xl text-[color:var(--cocoa)] sm:text-3xl">
                  {kitWithoutIhram.name}
                </h3>
                <p className="tracked-tight mt-2 text-sm text-[color:var(--gold)]">
                  {kitWithoutIhram.price}
                </p>
                <p className="mt-4 text-base leading-relaxed text-[color:var(--taupe)]">
                  Includes the full set of Menasik worship, personal care, travel, and organization
                  essentials. Made for travelers who already have their ihram — an ihram is not
                  included in this kit.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/kit-without-ihram"
                  className="tracked-tight inline-block rounded-none border border-[color:var(--cocoa)] px-8 py-3 text-sm text-[color:var(--cocoa)] transition-all hover:bg-[color:var(--cocoa)] hover:text-[color:var(--cream)]"
                >
                  View Kit
                </Link>
              </div>
            </article>

            {/* Kit With Ihram */}
            <article className="relative flex flex-col rounded-xl border border-[color:var(--gold)]/60 bg-[color:var(--cream)] p-6 sm:p-8">
              <span className="tracked-tight absolute -top-3 left-6 bg-[color:var(--cream)] px-3 text-xs text-[color:var(--gold)]">
                Complete Kit
              </span>
              <ImagePlaceholder label="[PLACEHOLDER: KIT WITH IHRAM PHOTO]" aspect="4/3" />
              <div className="mt-6 flex-1">
                <h3 className="font-serif text-2xl text-[color:var(--cocoa)] sm:text-3xl">
                  {kitWithIhram.name}
                </h3>
                <p className="tracked-tight mt-2 text-sm text-[color:var(--gold)]">
                  {kitWithIhram.price}
                </p>
                <p className="mt-4 text-base leading-relaxed text-[color:var(--taupe)]">
                  Includes every item in the Kit Without Ihram, plus a plain white two-piece ihram.
                  Made for travelers who want their preparation complete in one box.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/kit-with-ihram"
                  className="tracked-tight inline-block rounded-none border border-[color:var(--gold)] bg-[color:var(--gold)] px-8 py-3 text-sm text-[color:var(--cream)] transition-all hover:bg-transparent hover:text-[color:var(--cocoa)]"
                >
                  View Kit
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============== WAITLIST ============== */}
      <section id="waitlist" className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <IslamicStar className="mb-10" />
          <h2 className="font-serif text-3xl sm:text-4xl">Be the first to know.</h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-[color:var(--taupe)]">
            Sign up to be notified when we launch — and receive early access.
          </p>
          <div className="mt-10">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* ============== WHAT'S COMING ============== */}
      <section className="bg-[color:var(--sand)]/60 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <IslamicStar className="mb-12" />
          <h2 className="text-center font-serif text-3xl sm:text-4xl">What's coming</h2>
          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
            {siteConfig.teaserPoints.map((point, i) => (
              <div key={i} className="text-center">
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

      {/* ============== GROUP INQUIRY ============== */}
      <section id="wholesale" className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <IslamicStar className="mb-10" />
          <p className="tracked text-sm text-[color:var(--gold)]">
            For Agencies, Mosques &amp; Organizers
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
            Planning Umrah or Hajj for a Group?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[color:var(--taupe)]">
            Menasik welcomes inquiries from Umrah and Hajj travel companies, mosques, group
            leaders, and Islamic organizations interested in providing thoughtfully curated travel
            essentials to their pilgrims.
          </p>
          <div className="mt-14">
            <WholesaleForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
