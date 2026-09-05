import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Menasik" },
      {
        name: "description",
        content: "Menasik terms of service governing use of the site and orders.",
      },
      { property: "og:title", content: "Terms of Service — Menasik" },
      {
        property: "og:description",
        content: "Menasik terms of service governing use of the site and orders.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Terms of Service — Menasik" },
      {
        name: "twitter:description",
        content: "Menasik terms of service governing use of the site and orders.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="min-h-screen bg-[color:var(--cream)]">
      <section className="px-6 pb-20 pt-20 sm:pt-28">
        <div className="mx-auto max-w-[720px]">
          <h1 className="font-serif text-4xl italic leading-tight text-[color:var(--cocoa)] sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-[color:var(--taupe)]">Last updated: September 5, 2026</p>
          <div className="mt-10 space-y-6 text-[color:var(--taupe)]">
            <p className="text-[17px] leading-relaxed">
              Welcome to Menasik. By using this website or placing an order, you agree to these
              terms.
            </p>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-[color:var(--cocoa)]">Who We Are</h2>
              <p className="text-[17px] leading-relaxed">
                Menasik is operated by Menasik LLC, a Minnesota limited liability company. Contact:
                info@menasik.co.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-[color:var(--cocoa)]">What We Sell</h2>
              <p className="text-[17px] leading-relaxed">
                We sell preparation kits for Muslims traveling for Umrah and Hajj pilgrimage. Kit
                contents are described on each product page. We make no religious rulings or
                guarantees about the appropriateness of any item for any specific pilgrimage
                circumstances; travelers are responsible for their own religious observance.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-[color:var(--cocoa)]">Orders and Payment</h2>
              <p className="text-[17px] leading-relaxed">
                All orders are subject to acceptance and availability. Prices are shown in US
                dollars and do not include applicable sales tax, which is added at checkout.
                Payment is processed by Stripe.
              </p>
              <p className="text-[17px] leading-relaxed">
                At the time you place a pre-order, your card is charged the full amount shown. Your
                kit ships on the ship date stated on the product page at the time of your order.
                You may cancel your pre-order for a full refund at any time before your kit ships.
                See our{" "}
                <Link
                  to="/refund-policy"
                  className="underline underline-offset-4 transition-colors hover:text-[color:var(--cocoa)]"
                >
                  Refund Policy
                </Link>{" "}
                for details.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-[color:var(--cocoa)]">
                Shipping and Delivery
              </h2>
              <p className="text-[17px] leading-relaxed">
                We ship within the United States. Shipping addresses outside the United States are
                not currently supported. We are not responsible for shipping delays caused by
                carriers or by inaccurate addresses provided at checkout.
              </p>
              <p className="text-[17px] leading-relaxed">
                We make no guarantee that airport, airline, or security authorities in any
                jurisdiction will permit specific kit items to be carried through security.
                Travelers are responsible for verifying current airline and airport rules before
                departure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-[color:var(--cocoa)]">Refunds</h2>
              <p className="text-[17px] leading-relaxed">
                Refunds are governed by our{" "}
                <Link
                  to="/refund-policy"
                  className="underline underline-offset-4 transition-colors hover:text-[color:var(--cocoa)]"
                >
                  Refund Policy
                </Link>
                .
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-[color:var(--cocoa)]">Communications</h2>
              <p className="text-[17px] leading-relaxed">
                By placing an order or joining our interest list, you agree to receive
                order-related and occasional promotional emails from us. You may unsubscribe at any
                time.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-[color:var(--cocoa)]">
                Intellectual Property
              </h2>
              <p className="text-[17px] leading-relaxed">
                The Menasik name, logo, product designs, dua book, and Umrah guide are our property
                and may not be reproduced without permission.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-[color:var(--cocoa)]">
                Limitation of Liability
              </h2>
              <p className="text-[17px] leading-relaxed">
                Our liability for any claim relating to a purchase is limited to the amount you
                paid for that order. We are not liable for indirect or consequential damages.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-[color:var(--cocoa)]">
                Changes to These Terms
              </h2>
              <p className="text-[17px] leading-relaxed">
                We may update these terms from time to time. The date at the top of this page
                reflects the most recent update.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-[color:var(--cocoa)]">Governing Law</h2>
              <p className="text-[17px] leading-relaxed">
                These terms are governed by the laws of the State of Minnesota, United States.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-[color:var(--cocoa)]">Contact</h2>
              <p className="text-[17px] leading-relaxed">
                For questions about these terms, email info@menasik.co.
              </p>
            </section>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
