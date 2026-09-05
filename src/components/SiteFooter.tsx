import logoAsset from "@/assets/menasik-logo.asset.json";
import { siteConfig, isConfigured } from "@/config/site";

const logo = logoAsset.url;

export function SiteFooter() {
  const instagram = isConfigured(siteConfig.INSTAGRAM_URL) ? siteConfig.INSTAGRAM_URL : "#";
  const email = siteConfig.CONTACT_EMAIL;

  return (
    <footer className="border-t border-[color:var(--gold-soft)]/40 bg-[color:var(--sand)]/40 px-6 py-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        <img
          src={logo}
          alt="Menasik"
          width={160}
          height={120}
          loading="lazy"
          className="h-16 w-auto object-contain opacity-90"
        />
        <p className="font-serif text-lg italic text-[color:var(--cocoa)]">
          Pack Less. Worship More.
        </p>
        <div className="flex items-center gap-6 text-[color:var(--taupe)]">
          <a
            href={`mailto:${email}`}
            className="text-base transition-colors hover:text-[color:var(--gold)]"
          >
            {email}
          </a>
          <span className="h-1 w-1 rounded-full bg-[color:var(--gold-soft)]" />
          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="transition-colors hover:text-[color:var(--gold)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
            </svg>
          </a>
        </div>
        <p className="tracked-tight mt-4 text-xs text-[color:var(--taupe)]/70">
          © {new Date().getFullYear()} Menasik. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
