import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/menasik-logo.asset.json";
import kitAsset from "@/assets/menasik-kit.asset.json";
import { siteConfig, isConfigured } from "@/config/site";
import { WaitlistForm } from "@/components/WaitlistForm";
import { WholesaleForm } from "@/components/WholesaleForm";
import { IslamicStar, ArchMotif, PalmShadow } from "@/components/IslamicStar";

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
        content:
          "Premium Umrah kits. Pack Less. Worship More.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Menasik — Coming Soon" },
      {
        name: "twitter:description",
        content: "Premium Umrah kits. Pack Less. Worship More.",
      },
      { name: "theme-color", content: "#F2EBDD" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "icon", type: "image/png", href: logo },
      { rel: "apple-touch-icon", href: logo },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Jost:wght@300;400;500&display=swap",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  const instagram = isConfigured(siteConfig.INSTAGRAM_URL) ? siteConfig.INSTAGRAM_URL : "#";
  const email = siteConfig.CONTACT_EMAIL;

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[color:var(--cream)]">
      {/* whisper-light arch motif backdrop */}
      <ArchMotif className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-[120vh] w-[80vw] -translate-x-1/2 text-[color:var(--gold)] opacity-[0.06]" />

      {/* ============== HERO ============== */}
      <section className="sacred-backdrop relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
        {/* warm palm-frond shadow overlay (top-left, like sunlight through leaves) */}
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

        <p
          className="tracked fade-up mt-10 text-[11px] text-[color:var(--taupe)]"
          style={{ animationDelay: "0.35s" }}
        >
          Coming Soon
        </p>

        <h1
          className="fade-up mt-6 font-serif text-4xl italic leading-tight text-[color:var(--cocoa)] sm:text-5xl md:text-6xl"
          style={{ animationDelay: "0.5s" }}
        >
          {siteConfig.tagline}
        </h1>

        <p
          className="fade-up mx-auto mt-6 max-w-xl text-base leading-relaxed text-[color:var(--taupe)] sm:text-lg"
          style={{ animationDelay: "0.7s" }}
        >
          {siteConfig.heroSubtext}
        </p>

        <div
          className="fade-up mt-16 text-[color:var(--gold)]"
          style={{ animationDelay: "1s" }}
          aria-hidden="true"
        >
          <div className="mx-auto h-12 w-px bg-gradient-to-b from-transparent to-[color:var(--gold-soft)]" />
        </div>
      </section>

      {/* ============== WAITLIST ============== */}
      <section id="waitlist" className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <IslamicStar className="mb-10" />
          <h2 className="font-serif text-3xl sm:text-4xl">Be the first to know.</h2>
          <p className="mx-auto mt-4 max-w-lg text-[color:var(--taupe)]">
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
          <h2 className="text-center font-serif text-3xl sm:text-4xl">
            What's coming
          </h2>
          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
            {siteConfig.teaserPoints.map((point, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center">
                  <span className="font-serif text-2xl italic text-[color:var(--gold)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="tracked-tight text-xs text-[color:var(--cocoa)]">
                  {point.title}
                </h3>
                <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-[color:var(--taupe)]">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== WHOLESALE ============== */}
      <section id="wholesale" className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <IslamicStar className="mb-10" />
          <p className="tracked text-[11px] text-[color:var(--gold)]">For Umrah Agencies</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
            Elevate your travelers' journey.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[color:var(--taupe)]">
            Offer your travelers a premium, branded kit. Wholesale and white-label
            options available at launch.
          </p>
          <div className="mt-14">
            <WholesaleForm />
          </div>
        </div>
      </section>

      {/* ============== FOOTER ============== */}
      <footer className="border-t border-[color:var(--gold-soft)]/40 bg-[color:var(--sand)]/40 px-6 py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <img
            src={logo}
            alt="Menasik"
            width={160}
            height={120}
            loading="lazy"
            className="h-16 w-auto object-contain opacity-90"
          />
          <p className="font-serif text-lg italic text-[color:var(--cocoa)]">
            Menasik — Pack Less. Worship More.
          </p>
          <div className="flex items-center gap-6 text-[color:var(--taupe)]">
            <a
              href={`mailto:${email}`}
              className="text-sm transition-colors hover:text-[color:var(--gold)]"
            >
              {email}
            </a>
            <span className="h-1 w-1 rounded-full bg-[color:var(--gold-soft)]" />
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="transition-colors hover:text-[color:var(--gold)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
              </svg>
            </a>
          </div>
          <p className="tracked-tight mt-4 text-[10px] text-[color:var(--taupe)]/70">
            © {new Date().getFullYear()} Menasik. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
