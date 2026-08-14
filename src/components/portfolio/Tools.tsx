import { useReveal } from "@/hooks/use-reveal";
import { SectionLabel } from "./SectionLabel";

const TOOLS = [
  { name: "Figma", icon: "/images/about/figma.png" },
  { name: "Adobe Photoshop", icon: "/images/about/photoshop.png" },
  { name: "Adobe Photoshop", icon: "/images/about/photoshop2.png" },
  { name: "Adobe XD", icon: "/images/about/xd.png" },
  { name: "Canva", icon: "/images/about/canva.png" },
  { name: "Adobe After Effect", icon: "/images/about/after-effect.png" },
  { name: "Corel Draw", icon: "/images/about/corel.png" },
  { name: "Adobe Lightroom", icon: "/images/about/lightroom.png" },
  { name: "Framer", icon: "/images/about/framer.png" },
  { name: "Notion", icon: "/images/about/notion.png" },
  { name: "Miro", icon: "/images/about/miro.png" },
  { name: "Claude Ai", icon: "/images/about/claude.png" },
  { name: "Chatgpt", icon: "/images/about/chatgpt.png" },
  { name: "Gemini", icon: "/images/about/gemini.png" },
  { name: "Stitch", icon: "/images/about/stitch.png" },
  { name: "More Ai+", icon: "/images/about/more-ai.png" },
];

export function Tools() {
  const { ref, shown } = useReveal<HTMLElement>(0.1);

  return (
    <section
      id="tools"
      ref={ref}
      className="mx-auto w-full max-w-[1440px] px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12"
    >
      <div className={`reveal ${shown ? "reveal-in" : ""}`}>
        <SectionLabel>Tools / AI</SectionLabel>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-6 sm:mt-14 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-9 lg:grid-cols-4 lg:gap-x-10">
        {TOOLS.map((t, i) => (
          <li
            key={`${t.name}-${i}`}
            className={`reveal group flex min-w-0 items-center gap-2 sm:gap-3 ${
              shown ? "reveal-in" : ""
            }`}
            style={{ ["--reveal-delay" as string]: `${(i % 4) * 80 + Math.floor(i / 4) * 90}ms` }}
          >
            <img
              src={t.icon}
              alt={`${t.name} logo`}
              loading="lazy"
              className="h-8 w-8 shrink-0 rounded-lg object-contain transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:scale-110 sm:h-9 sm:w-9"
            />
            <span className="min-w-0 truncate rounded-full bg-chip px-3 py-2 text-[clamp(0.78rem,2.6vw,1rem)] text-chip-foreground ring-1 ring-white/10 transition-[transform,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:bg-white/20 group-hover:shadow-[0_12px_28px_-16px_rgba(255,255,255,0.7)] sm:px-5 sm:py-2.5">
              {t.name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
