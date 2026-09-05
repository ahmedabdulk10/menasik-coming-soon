import { isConfigured, siteConfig } from "@/config/site";

const shipsLine = isConfigured(siteConfig.KIT_SHIP_DATE)
  ? `Ships ${siteConfig.KIT_SHIP_DATE}`
  : "Ships soon";

export function PreOrderSection({
  paymentUrl,
  price,
}: {
  paymentUrl: string;
  price: string;
}) {
  const configured = isConfigured(paymentUrl);

  return (
    <section className="bg-[color:var(--sand)]/50 px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl italic text-[color:var(--cocoa)] sm:text-4xl">
          Pre-Order Your Kit
        </h2>
        <p className="tracked mt-4 text-sm text-[color:var(--taupe)]">{shipsLine}</p>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--taupe)]">
          Reserve your kit now at full price. Kits will ship on the date above and we'll keep you
          updated at every step. Full refund available anytime before your kit ships.
        </p>
        <div className="mt-9">
          {configured ? (
            <a
              href={paymentUrl}
              className="tracked-tight inline-block rounded-none border border-[color:var(--gold)] bg-[color:var(--gold)] px-10 py-4 text-sm text-[color:var(--cream)] transition-all hover:bg-transparent hover:text-[color:var(--cocoa)]"
            >
              Pre-Order for {price}
            </a>
          ) : (
            <span className="tracked-tight inline-block cursor-not-allowed rounded-none border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/40 px-10 py-4 text-sm text-[color:var(--cream)]">
              Available Soon
            </span>
          )}
        </div>
        <p className="mx-auto mt-6 max-w-md text-xs leading-relaxed text-[color:var(--taupe)]/70">
          Secure checkout via Stripe. We collect payment now and ship on the date above. Full
          refund available anytime before shipping.
        </p>
      </div>
    </section>
  );
}
