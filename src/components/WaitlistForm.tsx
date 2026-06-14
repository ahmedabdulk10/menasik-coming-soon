import { useState, type FormEvent } from "react";
import { subscribeToWaitlist } from "@/lib/waitlist.functions";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }
    setState("loading");

    try {
      const result = await subscribeToWaitlist({ data: { email } });
      if (!result.ok) throw new Error("Request failed");
      setState("done");
    } catch {
      setState("error");
      setError("Something went wrong. Please try again.");
    }
  }

  if (state === "done") {
    return (
      <p className="fade-in mx-auto max-w-md text-center text-[color:var(--cocoa)]">
        <span className="font-serif text-2xl italic">
          Thank you — we'll be in touch soon, inshaAllah.
        </span>
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto w-full max-w-md">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          aria-label="Email address"
          className="flex-1 rounded-none border-b border-[color:var(--gold-soft)] bg-transparent px-1 py-3 text-base text-[color:var(--cocoa)] placeholder:text-[color:var(--taupe)]/60 outline-none transition-colors focus:border-[color:var(--gold)]"
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="tracked-tight rounded-none border border-[color:var(--gold)] bg-[color:var(--gold)] px-8 py-3 text-sm text-[color:var(--cream)] transition-all hover:bg-transparent hover:text-[color:var(--cocoa)] disabled:opacity-60"
        >
          {state === "loading" ? "Sending…" : "Notify Me"}
        </button>
      </div>
      {error && (
        <p className="mt-3 text-center text-base text-[color:var(--taupe)]">{error}</p>
      )}
    </form>
  );
}
