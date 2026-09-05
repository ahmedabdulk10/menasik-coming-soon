import { createFileRoute, Link } from "@tanstack/react-router";
import { InterestForm } from "@/components/InterestForm";
import { IslamicStar } from "@/components/IslamicStar";
import { SiteFooter } from "@/components/SiteFooter";
import { kitWithoutIhram, kitWithIhram } from "@/config/products";

const description =
  "Reserve your Menasik Umrah kit. Tell us which kit you want and how many travelers, and we contact you the moment it is ready to ship.";

export const Route = createFileRoute("/interest-list")({
  head: () => ({
    meta: [
      { title: "Reserve Your Kit | Menasik" },
      { name: "description", content: description },
      { property: "og:title", content: "Reserve Your Kit | Menasik" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Reserve Your Kit | Menasik" },
      { name: "twitter:description", content: description },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/interest-list" }],
  }),
  component: InterestListPage,
});

const reasons = [
  "First access before kits go public",
  "We confirm your kit and traveler count by email",
  "No payment now, and you can change your mind",
];

function InterestListPage() {
  return (
    <main className="min-h-screen bg-[color:var(--cream)]">
      {/* Intro */}
      <section className="px-6 pb-14 pt-20 sm:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="tracked text-sm text-[color:var(--gold)]">Reserve Your Kit</p>
          <h1 className="mt-4 font-serif text-4xl italic leading-tight text-[color:var(--cocoa)] sm:text-5xl md:text-6xl">
            Claim your kit before you fly.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--taupe)]">
            Share a few details and we reach out the moment your kit is ready to order. It takes
            under a minute.
          </p>
          <ul className="mx-auto mt-8 flex max-w-xl flex-col items-center gap-3 text-base text-[color:var(--taupe)]">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-3 text-left">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Form */}
      <section className="bg-[color:var(--sand)]/50 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <IslamicStar className="mb-10" />
          <InterestForm />
        </div>
      </section>

      {/* Kit summary */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-serif text-3xl sm:text-4xl">Still deciding?</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <KitSummary
              name={kitWithoutIhram.name}
              body="Worship, personal care and travel essentials in one box, for travelers who already own their ihram."
              to="/kit-without-ihram"
            />
            <KitSummary
              name={kitWithIhram.name}
              body="Everything in the Kit Without Ihram plus a plain white two-piece ihram, complete in one box."
              to="/kit-with-ihram"
            />
          </div>
        </div>
      </section>

      {/* Other paths */}
      <section className="bg-[color:var(--sand)]/40 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg text-[color:var(--taupe)]">
            Organizing Umrah or Hajj for a group?
          </p>
          <div className="mt-6">
            <Link
              to="/group-inquiry"
              className="tracked-tight inline-block rounded-none border border-[color:var(--cocoa)] px-8 py-3 text-sm text-[color:var(--cocoa)] transition-all hover:bg-[color:var(--cocoa)] hover:text-[color:var(--cream)]"
            >
              Send a Group Inquiry
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function KitSummary({ name, body, to }: { name: string; body: string; to: string }) {
  return (
    <Link
      to={to}
      className="block rounded-xl border border-[color:var(--gold-soft)]/40 bg-[color:var(--cream)] p-6 transition-colors hover:border-[color:var(--gold)]/60 sm:p-8"
    >
      <h3 className="font-serif text-xl text-[color:var(--cocoa)] sm:text-2xl">{name}</h3>
      <p className="mt-3 text-base leading-relaxed text-[color:var(--taupe)]">{body}</p>
      <span className="tracked-tight mt-4 inline-block text-xs text-[color:var(--gold)]">
        View Kit →
      </span>
    </Link>
  );
}
