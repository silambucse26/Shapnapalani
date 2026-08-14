import { useReveal } from "@/hooks/use-reveal";
import { BrowserWindow } from "./BrowserWindow";
import { MagneticLink } from "./MagneticLink";

export function Hero() {
  const { ref, shown } = useReveal<HTMLElement>(0.05);

  return (
    <section id="top" ref={ref} className="mx-auto w-full max-w-[1440px] px-5 pt-6 sm:px-8 sm:pt-10 lg:px-12">
      <div
        className={`reveal mx-auto max-w-[1180px] ${shown ? "reveal-in" : ""}`}
        style={{ ["--reveal-delay" as string]: "60ms" }}
      >
        <BrowserWindow innerClassName="bg-[linear-gradient(180deg,#2a2a2a_0%,#1a1a1a_55%,#141414_100%)]">
          <div className="px-5 pb-14 pt-8 sm:px-10 sm:pb-20 sm:pt-12 lg:px-14 lg:pb-24 lg:pt-14">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
              <div className="min-w-0">
                <h1 className="font-display text-[clamp(1.35rem,5vw,1.95rem)] font-medium leading-tight">
                  Hey I’m Shapna Palani
                </h1>
                <p className="mt-1 font-display text-[clamp(0.85rem,3vw,1.125rem)] text-white/90">
                  UI/UX Designer &amp; Graphic Designer
                </p>
              </div>
              <MagneticLink
                href="Shapna Palani Resume.pdf"
                className="shrink-0 items-center gap-1.5 rounded-lg bg-resume px-4 py-2.5 font-display text-[0.95rem] font-semibold text-white shadow-[0_10px_30px_-14px_var(--resume)] hover:brightness-110 sm:px-5 sm:text-[1.15rem]"
              >
                Resume
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                  <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </MagneticLink>
            </div>

            <h2
              className={`reveal mt-8 max-w-[1000px] font-display text-[clamp(1.9rem,7.4vw,3.7rem)] font-medium leading-[1.12] tracking-[-0.015em] sm:mt-12 ${shown ? "reveal-in" : ""}`}
              style={{ ["--reveal-delay" as string]: "180ms" }}
            >
              Creating meaningful experiences through{" "}
              <span className="italic" style={{ color: "#FFB514" }}>
                thoughtful design.
              </span>
            </h2>

            <p
              className={`reveal mt-5 max-w-[58ch] font-display text-[clamp(0.98rem,3.1vw,1.3rem)] leading-relaxed text-white/85 sm:mt-7 ${shown ? "reveal-in" : ""}`}
              style={{ ["--reveal-delay" as string]: "300ms" }}
            >
              Hi, I'm Shapna. I design modern, accessible, and engaging digital products that connect users
              with brands through thoughtful design.
            </p>
          </div>
        </BrowserWindow>
      </div>

      <div className="mt-6 flex justify-center sm:-mt-7">
        <a
          href="#works"
          aria-label="Scroll to my works"
          className="bounce-arrow flex h-12 w-12 items-center justify-center rounded-full bg-[#2b2b2b] ring-1 ring-white/15 transition-transform duration-300 hover:scale-110 sm:h-14 sm:w-14"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M12 5v14m0 0-6-6m6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
