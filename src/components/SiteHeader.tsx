import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import logoAsset from "@/assets/menasik-logo-header.png";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";

const logo = logoAsset;

const navLinks = [
  { to: "/kit-without-ihram", label: "Kit Without Ihram" },
  { to: "/kit-with-ihram", label: "Kit With Ihram" },
  { to: "/group-inquiry", label: "Group Inquiry" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--gold-soft)]/30 bg-[color:var(--cream)]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center" aria-label="Menasik home">
          <img src={logo} alt="Menasik" width={180} height={66} className="h-12 w-auto object-contain md:h-14" />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="tracked-tight text-xs text-[color:var(--cocoa)] transition-colors hover:text-[color:var(--gold)]"
              activeProps={{ className: "tracked-tight text-xs text-[color:var(--gold)]" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/interest-list"
            className="tracked-tight rounded-none border border-[color:var(--cocoa)] px-6 py-2 text-xs text-[color:var(--cocoa)] transition-all hover:bg-[color:var(--cocoa)] hover:text-[color:var(--cream)]"
            activeProps={{ className: "tracked-tight rounded-none border border-[color:var(--gold)] px-6 py-2 text-xs text-[color:var(--gold)]" }}
          >
            Reserve Your Kit
          </Link>
        </nav>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Open menu"
              className="rounded-md p-2 text-[color:var(--cocoa)] transition-colors hover:text-[color:var(--gold)]"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-[color:var(--cream)]">
              <SheetHeader>
                <SheetTitle className="wordmark text-lg text-[color:var(--cocoa)]">menasik</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-6 px-2">
                {navLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="tracked-tight text-sm text-[color:var(--cocoa)]"
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  to="/interest-list"
                  onClick={() => setOpen(false)}
                  className="tracked-tight inline-block rounded-none border border-[color:var(--cocoa)] px-6 py-3 text-center text-sm text-[color:var(--cocoa)] transition-all hover:bg-[color:var(--cocoa)] hover:text-[color:var(--cream)]"
                >
                  Reserve Your Kit
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
