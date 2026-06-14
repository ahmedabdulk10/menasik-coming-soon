import { useState, type FormEvent } from "react";
import { siteConfig, isConfigured } from "@/config/site";

export function WholesaleForm() {
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setState("loading");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const key = siteConfig.WEB3FORMS_ACCESS_KEY;

    if (!isConfigured(key)) {
      await new Promise((r) => setTimeout(r, 500));
      setState("done");
      return;
    }

    try {
      fd.append("access_key", key);
      fd.append("subject", "Menasik — Wholesale Inquiry");
      fd.append("from_name", "Menasik Wholesale");
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
      <p className="fade-in mx-auto max-w-xl text-center text-[color:var(--cocoa)]">
        <span className="font-serif text-2xl italic">
          Thank you — we'll reach out shortly, inshaAllah.
        </span>
      </p>
    );
  }

  const fieldCls =
    "w-full rounded-none border-b border-[color:var(--gold-soft)] bg-transparent px-1 py-3 text-base text-[color:var(--cocoa)] placeholder:text-[color:var(--taupe)]/60 outline-none transition-colors focus:border-[color:var(--gold)]";
  const labelCls = "tracked-tight mb-1 block text-[10px] text-[color:var(--taupe)]";

  return (
    <form onSubmit={onSubmit} className="mx-auto w-full max-w-xl space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="agency">Agency Name</label>
          <input id="agency" name="agency_name" required className={fieldCls} placeholder="Your agency" />
        </div>
        <div>
          <label className={labelCls} htmlFor="contact">Contact Name</label>
          <input id="contact" name="contact_name" required className={fieldCls} placeholder="Full name" />
        </div>
        <div>
          <label className={labelCls} htmlFor="wemail">Email</label>
          <input id="wemail" name="email" type="email" required className={fieldCls} placeholder="you@agency.com" />
        </div>
        <div>
          <label className={labelCls} htmlFor="qty">Estimated Quantity</label>
          <input id="qty" name="estimated_quantity" className={fieldCls} placeholder="e.g. 250 kits / year" />
        </div>
      </div>
      <div>
        <label className={labelCls} htmlFor="msg">Message</label>
        <textarea id="msg" name="message" rows={4} className={`${fieldCls} resize-none`} placeholder="Tell us about your travelers and timing." />
      </div>
      <div className="pt-2 text-center">
        <button
          type="submit"
          disabled={state === "loading"}
          className="tracked-tight rounded-none border border-[color:var(--cocoa)] bg-transparent px-10 py-3 text-xs text-[color:var(--cocoa)] transition-all hover:bg-[color:var(--cocoa)] hover:text-[color:var(--cream)] disabled:opacity-60"
        >
          {state === "loading" ? "Sending…" : "Request Early Access"}
        </button>
      </div>
      {error && (
        <p className="text-center text-sm text-[color:var(--taupe)]">{error}</p>
      )}
    </form>
  );
}
