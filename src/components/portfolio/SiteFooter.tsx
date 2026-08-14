import { useReveal } from "@/hooks/use-reveal";
import { MagneticLink } from "./MagneticLink";

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SiteFooter() {
  const { ref, shown } = useReveal<HTMLElement>(0.1);

  return (
    <footer id="contact" ref={ref} className="w-full bg-footer">
      <div
        className={`reveal mx-auto grid max-w-[1280px] gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-3 lg:gap-8 lg:px-12 lg:py-24 ${
          shown ? "reveal-in" : ""
        }`}
      >
        <div className="min-w-0">
          <h2 className="font-display text-[clamp(1.9rem,7vw,3.1rem)] font-bold leading-tight">
            Shapna Palani
          </h2>
          <p className="mt-1 text-[1rem] text-white/85">UI/UX Designer/ Graphic Designer</p>
          <hr className="mt-6 max-w-[260px] border-white/25" />
          <p className="mt-5 max-w-[36ch] text-[1rem] leading-relaxed text-white/85">
            Crafting beautiful digital experiences that people love.
          </p>
        </div>

        <div className="min-w-0">
          <h3 className="font-display text-[clamp(1.4rem,5vw,1.75rem)] font-medium underline underline-offset-8">
            Get in Touch
          </h3>
          <ul className="mt-6 flex flex-col gap-4 text-[1.05rem]">
            <li>
              <a
                href="tel:+918428428711"
                className="flex min-h-11 items-center gap-3 transition-opacity duration-300 hover:opacity-70"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
                  <path d="M11 18.5h2" strokeLinecap="round" />
                </svg>
                +91 84284 28711
              </a>
            </li>
            <li>
              <a
                href="mailto:shapnamona@gmail.com"
                className="flex min-h-11 items-center gap-3 break-all transition-opacity duration-300 hover:opacity-70"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
                  <path d="m3.5 7 8.5 6 8.5-6" strokeLinecap="round" />
                </svg>
                shapnamona@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/shapnapalani_uiux"
                target="_blank"
                rel="noreferrer"
                className="flex min-h-11 items-center gap-3 transition-opacity duration-300 hover:opacity-70"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                </svg>
                shapnapalani_uiux
              </a>
            </li>
          </ul>
        </div>

        <div className="min-w-0">
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-[1.05rem] font-medium sm:max-w-[320px]">
            <a href="#works" className="flex min-h-11 items-center transition-opacity duration-300 hover:opacity-70">
              My Works
            </a>
            <a
              href="/about"
              className="flex min-h-11 items-center transition-opacity duration-300 hover:opacity-70"
            >
              About
            </a>
            <MagneticLink
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="min-h-11 items-center gap-1 hover:opacity-70"
            >
              LinkedIn <Arrow />
            </MagneticLink>
            <MagneticLink
              href="https://www.behance.net/shapnapalani"
              target="_blank"
              rel="noreferrer"
              className="min-h-11 items-center gap-1 hover:opacity-70"
            >
              Behance <Arrow />
            </MagneticLink>
          </div>
          <hr className="mt-6 border-white/25 sm:max-w-[320px]" />
          <p className="mt-5 max-w-[30ch] text-[1rem] text-white/85">
            © 2026 Shapnapalani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
