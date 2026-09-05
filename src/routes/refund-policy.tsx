import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy — Menasik" },
      {
        name: "description",
        content:
          "Menasik refund policy for pre-orders and shipped kits. Full refunds available anytime before your kit ships.",
      },
      { property: "og:title", content: "Refund Policy — Menasik" },
      {
        property: "og:description",
        content:
          "Menasik refund policy for pre-orders and shipped kits. Full refunds available anytime before your kit ships.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Refund Policy — Menasik" },
      {
        name: "twitter:description",
        content:
          "Menasik refund policy for pre-orders and shipped kits. Full refunds available anytime before your kit ships.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/refund-policy" }],
  }),
  component: RefundPolicyPage,
});

function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[color:var(--cream)]">
      <section className="px-6 pb-20 pt-20 sm:pt-28">
        <div className="mx-auto max-w-[720px]">
          <h1 className="font-serif text-4xl italic leading-tight text-[color:var(--cocoa)] sm:text-5xl">
            Refund Policy
          </h1>
          <p className="mt-4 text-sm text-[color:var(--taupe)]">Last updated: September 5, 2026</p>
          <div className="mt-10 space-y-6 text-[color:var(--taupe)]">
            <p className="text-[17px] leading-relaxed">Content to be added</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
