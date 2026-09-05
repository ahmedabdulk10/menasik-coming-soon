import { useState, type FormEvent } from "react";
import { siteConfig, isConfigured } from "@/config/site";

const inputClass =
  "w-full rounded-none border-b border-[color:var(--gold-soft)] bg-transparent px-1 py-3 text-base text-[color:var(--cocoa)] placeholder:text-[color:var(--taupe)]/60 outline-none transition-colors focus:border-[color:var(--gold)]";

const kitLabels = {
  "without-ihram": "Kit Without Ihram",
  "with-ihram": "Kit With Ihram",
  "not-sure": "Not sure yet",
} as const;

export function InterestForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [kitInterest, setKitInterest] = useState<keyof typeof kitLabels>("not-sure");
  const [travelers, setTravelers] = useState("");
  const [notes, setNotes] = useState("");
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

    const fd = new FormData();
    fd.append("name", name.trim());
    fd.append("email", email.trim());
    fd.append("kit_interest", kitLabels[kitInterest]);
    if (travelers) fd.append("travelers", travelers);
    if (notes.trim()) fd.append("notes", notes.trim());

    const key = siteConfig.WEB3FORMS_INTEREST_KEY;

    if (!isConfigured(key)) {
      await new Promise((r) => setTimeout(r, 500));
      setState("done");
      return;
    }

    try {
      fd.append("access_key", key);
      fd.append("subject", "Menasik — Interest List Signup");
      fd.append("from_name", "Menasik Interest List");
      fd.append("replyto", email.trim());
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });
      const data = await res.json();
      if (!data?.success) throw new Error("Request failed");
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
          You're on the list — we'll be in touch soon, inshaAllah.
        </span>
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto w-full max-w-xl text-left">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="interest-name" className="tracked-tight mb-2 block text-xs text-[color:var(--taupe)]">
            Name
          </label>
          <input
            id="interest-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="interest-email" className="tracked-tight mb-2 block text-xs text-[color:var(--taupe)]">
            Email <span aria-hidden="true" className="text-[color:var(--gold)]">*</span>
          </label>
          <input
            id="interest-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="interest-kit" className="tracked-tight mb-2 block text-xs text-[color:var(--taupe)]">
            Which kit interests you?
          </label>
          <select
            id="interest-kit"
            value={kitInterest}
            onChange={(e) => setKitInterest(e.target.value as keyof typeof kitLabels)}
            className={inputClass}
          >
            <option value="not-sure">Not sure yet</option>
            <option value="without-ihram">Kit Without Ihram</option>
            <option value="with-ihram">Kit With Ihram</option>
          </select>
        </div>
        <div>
          <label htmlFor="interest-travelers" className="tracked-tight mb-2 block text-xs text-[color:var(--taupe)]">
            Travelers (optional)
          </label>
          <input
            id="interest-travelers"
            type="number"
            min={1}
            value={travelers}
            onChange={(e) => setTravelers(e.target.value)}
            placeholder="1"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-8">
        <label htmlFor="interest-notes" className="tracked-tight mb-2 block text-xs text-[color:var(--taupe)]">
          Anything we should know? (optional)
        </label>
        <textarea
          id="interest-notes"
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Travel dates, questions, special requests…"
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="mt-10 text-center">
        <button
          type="submit"
          disabled={state === "loading"}
          className="tracked-tight rounded-none border border-[color:var(--gold)] bg-[color:var(--gold)] px-10 py-3 text-sm text-[color:var(--cream)] transition-all hover:bg-transparent hover:text-[color:var(--cocoa)] disabled:opacity-60"
        >
          {state === "loading" ? "Sending…" : "Join the Interest List"}
        </button>
        {error && <p className="mt-3 text-base text-[color:var(--taupe)]">{error}</p>}
      </div>
    </form>
  );
}

