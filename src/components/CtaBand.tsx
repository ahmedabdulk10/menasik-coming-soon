import { Link } from "@tanstack/react-router";
import { IslamicStar } from "@/components/IslamicStar";

type Props = {
  title?: string;
  body?: string;
  primaryLabel?: string;
  showGroupLink?: boolean;
};

export function CtaBand({
  title = "Claim your kit before the first run sells out.",
  body = "Tell us which kit you want and how many travelers you have. We reach out directly the moment your kit is ready to ship, before it goes public.",
  primaryLabel = "Reserve My Kit",
  showGroupLink = true,
}: Props) {
  return (
    <section className="bg-[color:var(--sand)]/60 px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <IslamicStar className="mb-10" />
        <h2 className="font-serif text-3xl italic text-[color:var(--cocoa)] sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--taupe)]">
          {body}
        </p>
        <div className="mt-10">
          <Link
            to="/interest-list"
            className="tracked-tight inline-block rounded-none border border-[color:var(--gold)] bg-[color:var(--gold)] px-10 py-4 text-sm text-[color:var(--cream)] transition-all hover:bg-transparent hover:text-[color:var(--cocoa)]"
          >
            {primaryLabel}
          </Link>
        </div>
        <p className="mt-6 text-sm text-[color:var(--taupe)]">
          Takes under a minute. No payment now.
        </p>
        {showGroupLink && (
          <p className="mt-8 text-sm text-[color:var(--taupe)]">
            Buying for a group or travel company?{" "}
            <Link
              to="/group-inquiry"
              className="underline decoration-[color:var(--gold-soft)] underline-offset-4 hover:text-[color:var(--gold)]"
            >
              Send a group inquiry
            </Link>
            .
          </p>
        )}
      </div>
    </section>
  );
}
