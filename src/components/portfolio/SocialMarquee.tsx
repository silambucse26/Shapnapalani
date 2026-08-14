import { useReveal } from "@/hooks/use-reveal";

type Row = { images: string[]; duration: string; reverse?: boolean };

function MarqueeRow({ images, duration, reverse }: Row) {
  const items = [...images, ...images, ...images, ...images];
  return (
    <div className="relative overflow-hidden">
      <div
        className="marquee-track gap-4 sm:gap-5"
        style={{
          ["--marquee-duration" as string]: duration,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {items.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="group relative h-[168px] w-[168px] shrink-0 overflow-hidden rounded-xl sm:h-[220px] sm:w-[220px] lg:h-[298px] lg:w-[298px]"
          >
            <img
              src={src}
              alt="Social media creative designed by Shapna Palani"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
            />
            <div className="pointer-events-none absolute inset-0 bg-black/25 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function SocialMarquee() {
  const { ref, shown } = useReveal<HTMLElement>(0.1);

  return (
    <section ref={ref} className="w-full overflow-hidden py-14 sm:py-20">
      <div className={`reveal mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12 ${shown ? "reveal-in" : ""}`}>
        <h2 className="text-[clamp(1.55rem,5.2vw,2.875rem)] font-medium leading-[1.15]">
          More <span style={{ color: "#91FF0B" }}>Social Media</span> Creatives / Logo
        </h2>
        <p className="mt-3 max-w-[70ch] text-[clamp(0.95rem,2.6vw,1.25rem)] leading-relaxed text-white/85 sm:mt-4">
          A collection of impactful social media designs crafted to strengthen brand identity, increase
          audience engagement, and deliver compelling visual communication across digital platforms.
        </p>
      </div>

      <div className={`reveal mt-9 flex flex-col gap-4 sm:mt-14 sm:gap-5 ${shown ? "reveal-in" : ""}`}>
        <MarqueeRow
          images={["/images/sm1.png", "/images/sm2.png", "/0.jpeg","/09.jpeg","/909.jpeg","/890.jpeg","/8909.jpeg","/WhatsApp Image 2026-08-13 at 5.17.06 PM (2).jpeg","/WhatsApp Image 2026-08-13 at 5.17.06 PM.jpeg","/WhatsApp Image 2026-08-13 at 5.17.32 PM (1).jpeg","/WhatsApp Image 2026-08-13 at 5.17.32 PM.jpeg"]}
          duration="40s"
        />
        <MarqueeRow images={["/images/sm4.png", "/images/sm5.png","/0.jpeg","/09.jpeg"] }duration="34s" reverse />
      </div>
    </section>
  );
}
