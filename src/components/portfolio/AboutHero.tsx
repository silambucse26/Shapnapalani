import { useReveal } from "@/hooks/use-reveal";
import { BrowserWindow } from "./BrowserWindow";
import { MagneticLink } from "./MagneticLink";

const CHIPS = [
  "User-Centered Design",
  "Responsive Design",
  "Design Systems",
  "Brand Identity",
  "Prototyping",
  "Wireframe",
];

export function AboutHero() {
  const { ref, shown } = useReveal<HTMLElement>(0.05);

  return (
    <section
      id="top"
      ref={ref}
      className="mx-auto w-full max-w-[1440px] px-5 pt-6 sm:px-8 sm:pt-10 lg:px-12"
    >
      <div
        className={`reveal mx-auto max-w-[1180px] ${shown ? "reveal-in" : ""}`}
        style={{ ["--reveal-delay" as string]: "60ms" }}
      >
        <BrowserWindow innerClassName="bg-[linear-gradient(180deg,#242424_0%,#191919_55%,#141414_100%)]">
          <div className="px-5 pb-12 pt-8 sm:px-10 sm:pb-16 sm:pt-10 lg:px-14 lg:pb-20">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
              <div className="min-w-0">
                <h1 className="font-display text-[clamp(1.3rem,5vw,1.85rem)] font-medium leading-tight">
                  Hey I’m Shapna Palani
                </h1>
                <p className="mt-1 text-[clamp(0.8rem,2.8vw,0.95rem)] text-white/80">
                  UI/UX Designer &amp; Graphic Designer
                </p>
              </div>
              <MagneticLink
                href="Shapna Palani Resume.pdf"
                className="shrink-0 items-center gap-1.5 rounded-lg bg-resume px-4 py-2 font-display text-[0.95rem] font-semibold text-white shadow-[0_10px_30px_-14px_var(--resume)] hover:brightness-110 sm:px-5 sm:py-2.5 sm:text-[1.1rem]"
              >
                Resume
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  aria-hidden="true"
                >
                  <path d="Shapna Palani Resume.pdf" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </MagneticLink>
            </div>

            <div className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start lg:gap-12">
              <div className="min-w-0">
                <h2
                  className={`reveal font-display text-[clamp(1.8rem,6.6vw,3rem)] font-bold leading-[1.14] tracking-[-0.015em] ${
                    shown ? "reveal-in" : ""
                  }`}
                  style={{ ["--reveal-delay" as string]: "160ms" }}
                >
                  Crafting Interfaces that{" "}
                  <span style={{ color: "#FFB514" }}>Feel Alive</span>
                </h2>

                <p
                  className={`reveal mt-5 max-w-[62ch] text-[clamp(0.95rem,2.9vw,1.05rem)] leading-relaxed text-white/85 ${
                    shown ? "reveal-in" : ""
                  }`}
                  style={{ ["--reveal-delay" as string]: "260ms" }}
                >
                  I&apos;m a UI/UX &amp; Graphic Designer with a passion for creating digital
                  experiences that balance beauty with function. From wireframes to polished
                  prototypes, I bring ideas to life with precision and purpose.
                </p>
                <p
                  className={`reveal mt-4 max-w-[62ch] text-[clamp(0.95rem,2.9vw,1.05rem)] leading-relaxed text-white/85 ${
                    shown ? "reveal-in" : ""
                  }`}
                  style={{ ["--reveal-delay" as string]: "340ms" }}
                >
                  My work spans mobile apps, web platforms, brand identities, and marketing creatives
                  — always anchored in user research and design systems that scale.
                </p>

                <ul className="mt-7 flex flex-wrap gap-2.5 sm:gap-3">
                  {CHIPS.map((c, i) => (
                    <li
                      key={c}
                      className={`reveal ${shown ? "reveal-in" : ""}`}
                      style={{ ["--reveal-delay" as string]: `${420 + i * 70}ms` }}
                    >
                      <span className="inline-flex cursor-default rounded-full bg-chip px-4 py-2 text-[clamp(0.8rem,2.6vw,0.9rem)] text-chip-foreground ring-1 ring-white/10 transition-[transform,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-white/20 hover:shadow-[0_10px_24px_-14px_rgba(255,255,255,0.6)]">
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Portrait card */}
              <div
                className={`reveal group relative mx-auto w-full max-w-[340px] ${
                  shown ? "reveal-in" : ""
                }`}
                style={{ ["--reveal-delay" as string]: "300ms" }}
              >
                <div className="overflow-hidden rounded-3xl bg-[linear-gradient(180deg,#1b1b22_0%,#141418_100%)] ring-1 ring-white/12 transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:shadow-[0_30px_70px_-40px_rgba(255,255,255,0.5)]">
                  <img
                    src="/images/about/portrait.png"
                    alt="Illustrated portrait of Shapna Palani"
                    loading="lazy"
                    className="mx-auto block w-full max-w-[260px] transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                </div>
                <div className="absolute -bottom-4 left-0 rounded-xl bg-[#141433] px-4 py-2.5 ring-1 ring-white/12 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 sm:-left-3">
                  <p className="font-display text-[1.15rem] font-medium leading-none">2+ Years</p>
                  <p className="mt-1 text-[0.8rem] text-white/80">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </BrowserWindow>
      </div>

      <div className="mt-8 flex justify-center sm:-mt-7">
        <a
          href="#experience"
          aria-label="Scroll to experience"
          className="bounce-arrow flex h-12 w-12 items-center justify-center rounded-full bg-[#2b2b2b] ring-1 ring-white/15 transition-transform duration-300 hover:scale-110 sm:h-14 sm:w-14"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <path d="M12 5v14m0 0-6-6m6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
