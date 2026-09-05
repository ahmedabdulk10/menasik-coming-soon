import { createFileRoute, Link } from "@tanstack/react-router";
import { WholesaleForm } from "@/components/WholesaleForm";
import { IslamicStar } from "@/components/IslamicStar";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/group-inquiry")({
  head: () => ({
    meta: [
      { title: "Group Inquiry | Menasik" },
      {
        name: "description",
        content:
          "Umrah and Hajj travel companies, mosques and group leaders can order Menasik kits for their travelers.",
      },
      { property: "og:title", content: "Group Inquiry | Menasik" },
      {
        property: "og:description",
        content:
          "Umrah and Hajj travel companies, mosques and group leaders can order Menasik kits for their travelers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Group Inquiry | Menasik" },
      {
        name: "twitter:description",
        content:
          "Umrah and Hajj travel companies, mosques and group leaders can order Menasik kits for their travelers.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/group-inquiry" }],
  }),
  component: GroupInquiryPage,
});

function GroupInquiryPage() {
  return (
    <main className="min-h-screen bg-[color:var(--cream)]">
      {/* Intro */}
      <section className="px-6 pb-16 pt-20 sm:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="tracked text-sm text-[color:var(--gold)]">Group Inquiry</p>
          <h1 className="mt-4 font-serif text-4xl italic leading-tight text-[color:var(--cocoa)] sm:text-5xl md:text-6xl">
            Planning Umrah or Hajj for a group?
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--taupe)]">
            Send your travelers off with everything they need. Tell us your group size and travel
            dates, and we will come back with kit options and group pricing.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-[color:var(--sand)]/50 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <IslamicStar className="mb-10" />
          <WholesaleForm />
        </div>
      </section>

      {/* Other paths */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg text-[color:var(--taupe)]">
            Traveling on your own?
          </p>
          <div className="mt-6">
            <Link
              to="/interest-list"
              className="tracked-tight inline-block rounded-none border border-[color:var(--cocoa)] px-8 py-3 text-sm text-[color:var(--cocoa)] transition-all hover:bg-[color:var(--cocoa)] hover:text-[color:var(--cream)]"
            >
              Join the Interest List
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
