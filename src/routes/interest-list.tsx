import { createFileRoute, Link } from "@tanstack/react-router";
import { InterestForm } from "@/components/InterestForm";
import { IslamicStar } from "@/components/IslamicStar";
import { SiteFooter } from "@/components/SiteFooter";
import { kitWithoutIhram, kitWithIhram } from "@/config/products";

export const Route = createFileRoute("/interest-list")({
  head: () => ({
    meta: [
      { title: "Interest List — Menasik" },
      {
        name: "description",
        content:
          "Join the Menasik interest list — tell us which Umrah kit you're interested in and be the first to know at launch.",
      },
      { property: "og:title", content: "Interest List — Menasik" },
      {
        property: "og:description",
        content:
          "Join the Menasik interest list — tell us which Umrah kit you're interested in and be the first to know at launch.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Interest List — Menasik" },
      {
        name: "twitter:description",
        content:
          "Join the Menasik interest list — tell us which Umrah kit you're interested in and be the first to know at launch.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/interest-list" }],
  }),
  component: InterestListPage,
});

function InterestListPage() {
  return (
    <main className="min-h-screen bg-[color:var(--cream)]">
      {/* Intro */}
      <section className="px-6 pb-16 pt-20 sm:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="tracked text-sm text-[color:var(--gold)]">Interest List</p>
          <h1 className="mt-4 font-serif text-4xl italic leading-tight text-[color:var(--cocoa)] sm:text-5xl md:text-6xl">
            Tell us what you're waiting for.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--taupe)]">
            Menasik is pre-launch. Share a few details and we'll reach out the moment your kit is
            ready — with early access for those on the list.
          </p>
        </div>
      </section>

      {/* Kit summary */}
      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          <KitSummary
            name={kitWithoutIhram.name}
            body="The full set of worship, personal care, travel, and organization essentials — for travelers who already have their ihram."
            to="/kit-without-ihram"
          />
          <KitSummary
            name={kitWithIhram.name}
            body="Everything in the Kit Without Ihram, plus a plain white two-piece ihram — complete in one box."
            to="/kit-with-ihram"
          />
        </div>
      </section>

      {/* Form */}
      <section className="bg-[color:var(--sand)]/50 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <IslamicStar className="mb-10" />
          <InterestForm />
        </div>
      </section>

      {/* Other paths */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg text-[color:var(--taupe)]">
            Organizing Umrah or Hajj for a group?
          </p>
          <div className="mt-6">
            <Link
              to="/"
              hash="wholesale"
              className="tracked-tight inline-block rounded-none border border-[color:var(--cocoa)] px-8 py-3 text-sm text-[color:var(--cocoa)] transition-all hover:bg-[color:var(--cocoa)] hover:text-[color:var(--cream)]"
            >
              Contact Menasik
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
      <h2 className="font-serif text-xl text-[color:var(--cocoa)] sm:text-2xl">{name}</h2>
      <p className="mt-3 text-base leading-relaxed text-[color:var(--taupe)]">{body}</p>
uation      <span className="tracked-tight mt-4 inline-block text-xs text-[color:var(--gold)]">View Kit →</span>
    </Link>
  );
}
