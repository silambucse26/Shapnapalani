import { useEffect, useState } from "react";
import { MagneticLink } from "./MagneticLink";

const LINKEDIN = "https://www.linkedin.com/";
const BEHANCE = "https://www.behance.net/shapnapalani";
const ABOUT = "/about";

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SiteNav({ active = "works" }: { active?: "works" | "about" }) {
  const worksHref = active === "about" ? "/#works" : "#works";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:grid-cols-3 lg:px-12 lg:py-6">
        <a
          href={active === "about" ? "/" : "#top"}
          className="min-w-0 truncate font-display text-[1.25rem] font-bold tracking-tight sm:text-[1.55rem]"
        >
          Shapna Palani
        </a>

        {/* Desktop pill nav */}
        <nav className="hidden justify-center lg:flex">
          <div className="flex items-center gap-1 rounded-full bg-white/[0.07] p-1.5 ring-1 ring-white/10">
            <a
              href={worksHref}
              className={`rounded-full px-5 py-2 text-[0.95rem] font-medium transition-colors duration-300 ${
                active === "works" ? "bg-white/15 hover:bg-white/25" : "hover:bg-white/10"
              }`}
            >
              My works
            </a>
            <a
              href={ABOUT}
              className={`rounded-full px-5 py-2 text-[0.95rem] transition-colors duration-300 ${
                active === "about" ? "bg-white/15 font-medium hover:bg-white/25" : "hover:bg-white/10"
              }`}
            >
              About
            </a>
          </div>
        </nav>

        {/* Desktop socials */}
        <div className="hidden items-center justify-end gap-8 lg:flex">
          <MagneticLink
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="items-center gap-1 text-[1.05rem] font-medium hover:text-white/70"
          >
            LinkedIn <Arrow />
          </MagneticLink>
          <MagneticLink
            href={BEHANCE}
            target="_blank"
            rel="noreferrer"
            className="items-center gap-1 text-[1.05rem] font-medium hover:text-white/70"
          >
            Behance <Arrow />
          </MagneticLink>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/[0.08] ring-1 ring-white/10 transition-transform duration-300 active:scale-95 lg:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 block h-[2px] w-5 rounded bg-white transition-transform duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-[2px] w-5 rounded bg-white transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-[2px] w-5 rounded bg-white transition-transform duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4 sm:px-8">
          {[
            { label: "My works", href: worksHref, external: false },
            { label: "About", href: ABOUT, external: false },
            { label: "LinkedIn", href: LINKEDIN, external: true },
            { label: "Behance", href: BEHANCE, external: true },
            { label: "Get in Touch", href: "#contact", external: false },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noreferrer" : undefined}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center justify-between rounded-xl px-3 text-[1.05rem] font-medium transition-colors duration-300 active:bg-white/10"
            >
              {l.label}
              {l.external ? <Arrow /> : null}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
