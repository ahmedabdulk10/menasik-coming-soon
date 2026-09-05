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
            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-[color:var(--cocoa)]">Pre-Orders</h2>
              <p className="text-[17px] leading-relaxed">
                Menasik kits are currently sold as pre-orders. Your card is charged at the time of
                purchase, and your kit ships on the ship date shown on the product page at the time
                of your order.
              </p>
              <p className="text-[17px] leading-relaxed">
                You may request a full refund of your pre-order at any time before your kit ships,
                for any reason. To request a refund, email info@menasik.co with your order number.
                We will process refunds within 7 business days of receiving your request. Refunds
                are returned to the original payment method.
              </p>
              <p className="text-[17px] leading-relaxed">
                If we are unable to ship your kit by the stated ship date, we will notify you by
                email with a revised date. You may accept the new date or request a full refund at
                that time.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-[color:var(--cocoa)]">After Your Kit Ships</h2>
              <p className="text-[17px] leading-relaxed">
                Once your kit has shipped, refund requests are handled as follows.
              </p>
              <p className="text-[17px] leading-relaxed">
                If your kit arrives damaged or is missing items, email info@menasik.co within 14
                days of delivery with your order number and photos. We will replace missing or
                damaged items at no cost.
              </p>
              <p className="text-[17px] leading-relaxed">
                Kits may be returned in original, unused condition within 30 days of delivery for a
                refund of the kit price. Return shipping is the customer's responsibility. Refunds
                are issued once we receive and inspect the returned kit.
              </p>
              <p className="text-[17px] leading-relaxed">
                Kits that have been opened or used are not eligible for return.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-[color:var(--cocoa)]">How to Contact Us</h2>
              <p className="text-[17px] leading-relaxed">
                For any refund questions or requests, email info@menasik.co. Include your order
                number and we will respond within 2 business days.
              </p>
            </section>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
