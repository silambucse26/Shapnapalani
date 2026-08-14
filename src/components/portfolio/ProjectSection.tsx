import { useRef, useState, type ReactNode } from "react";
import { useHasPointer, useReveal } from "@/hooks/use-reveal";

export type TitlePart = { text: string; accent?: boolean };

type Props = {
  id?: string;
  title: TitlePart[];
  description: string;
  tags: string[];
  /** Accent colour of the project's visual identity, e.g. "#D808F2". */
  accent: string;
  /** Italic styling for the accent words (matches the original design). */
  accentItalic?: boolean;
  /** Places the tag cloud on the left and the window on the right. */
  reverse?: boolean;
  children: ReactNode;
};

export function ProjectSection({
  id,
  title,
  description,
  tags,
  accent,
  accentItalic = true,
  reverse = false,
  children,
}: Props) {
  const { ref: revealRef, shown } = useReveal<HTMLElement>(0.12);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const raf = useRef<number | null>(null);
  const hasPointer = useHasPointer();
  const [active, setActive] = useState(false);

  const onMove = (e: React.MouseEvent) => {
    if (!hasPointer) return;
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.transform = `perspective(1400px) rotateX(${(-py * 5).toFixed(2)}deg) rotateY(${(px * 6).toFixed(2)}deg) scale(1.022)`;
      el.style.setProperty("--mx", `${((px + 0.5) * 100).toFixed(1)}%`);
      el.style.setProperty("--my", `${((py + 0.5) * 100).toFixed(1)}%`);
    });
  };

  const onEnter = () => {
    if (!hasPointer) return;
    setActive(true);
    document.documentElement.style.setProperty("--cursor-hue", accent);
  };

  const onLeave = () => {
    setActive(false);
    document.documentElement.style.setProperty("--cursor-hue", "oklch(1 0 0)");
    const el = cardRef.current;
    if (el) el.style.transform = "perspective(1400px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section
      id={id}
      ref={revealRef}
      style={{ ["--accent" as string]: accent }}
      className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className={`reveal ${shown ? "reveal-in" : ""}`}>
        <h2 className="text-[clamp(1.55rem,5.2vw,2.875rem)] font-medium leading-[1.15] tracking-[-0.01em]">
          {title.map((p, i) => (
            <span
              key={i}
              style={p.accent ? { color: accent } : undefined}
              className={p.accent && accentItalic ? "italic" : undefined}
            >
              {p.text}
            </span>
          ))}
        </h2>
        <p className="mt-3 max-w-[62ch] text-[clamp(0.95rem,2.6vw,1.25rem)] leading-relaxed text-white/85 sm:mt-4">
          {description}
        </p>
      </div>

      <div
        className={`mt-8 grid items-center gap-8 sm:mt-12 lg:gap-10 ${
          reverse ? "lg:grid-cols-[minmax(0,0.34fr)_minmax(0,1fr)]" : "lg:grid-cols-[minmax(0,1fr)_minmax(0,0.34fr)]"
        }`}
      >
        {/* Tag cloud */}
        <div
          className={`reveal order-2 flex flex-wrap gap-2.5 sm:gap-3 ${shown ? "reveal-in" : ""} ${
            reverse ? "lg:order-1" : "lg:order-2"
          }`}
          style={{ ["--reveal-delay" as string]: "160ms" }}
        >
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-chip px-4 py-2.5 text-[0.85rem] font-medium text-chip-foreground transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 sm:px-5 sm:py-3 sm:text-[0.95rem]"
              style={
                active
                  ? { boxShadow: `0 0 0 1px ${accent}55, 0 8px 24px -14px ${accent}` }
                  : undefined
              }
            >
              {t}
            </span>
          ))}
        </div>

        {/* Project window */}
        <div
          className={`reveal order-1 ${shown ? "reveal-in" : ""} ${reverse ? "lg:order-2" : "lg:order-1"}`}
          style={{ ["--reveal-delay" as string]: "80ms" }}
        >
          <div className="relative">
            {/* ambient glow behind the window */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] blur-[48px] transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:-inset-10"
              style={{
                opacity: active ? 0.5 : 0,
                background: `radial-gradient(60% 60% at 50% 50%, ${accent} 0%, transparent 70%)`,
              }}
            />
            <div
              ref={cardRef}
              onMouseMove={onMove}
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              className="project-window group relative"
              style={{
                boxShadow: active
                  ? `0 0 0 1px ${accent}66, 0 30px 90px -40px ${accent}`
                  : "0 0 0 1px rgba(255,255,255,0.06)",
                borderRadius: "26px",
              }}
            >
              {children}
              {/* cursor-tracking sheen */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[26px] transition-opacity duration-500"
                style={{
                  opacity: active ? 1 : 0,
                  background: `radial-gradient(circle at var(--mx,50%) var(--my,50%), ${accent}1f 0%, transparent 55%)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
