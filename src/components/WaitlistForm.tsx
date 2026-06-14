import { useState, type FormEvent } from "react";
import { siteConfig, isConfigured } from "@/config/site";

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

    const apiKey = siteConfig.MAILERLITE_API_KEY;
    const groupId = siteConfig.MAILERLITE_GROUP_ID;

    // If MailerLite isn't configured yet, gracefully show the confirmation
    // so the page still works in preview mode.
    if (!isConfigured(apiKey) || !isConfigured(groupId)) {
      await new Promise((r) => setTimeout(r, 500));
      setState("done");
      return;
    }

    try {
      const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ email, groups: [groupId] }),
      });
      if (!res.ok) throw new Error("Request failed");
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
          className="tracked-tight rounded-none border border-[color:var(--gold)] bg-[color:var(--gold)] px-8 py-3 text-xs text-[color:var(--cream)] transition-all hover:bg-transparent hover:text-[color:var(--cocoa)] disabled:opacity-60"
        >
          {state === "loading" ? "Sending…" : "Notify Me"}
        </button>
      </div>
      {error && (
        <p className="mt-3 text-center text-sm text-[color:var(--taupe)]">{error}</p>
      )}
    </form>
  );
}
