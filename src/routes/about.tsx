import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { SiteFooter } from "@/components/portfolio/SiteFooter";
import { AboutHero } from "@/components/portfolio/AboutHero";
import { Experience } from "@/components/portfolio/Experience";
import { Tools } from "@/components/portfolio/Tools";
import { CursorGlow } from "@/components/portfolio/CursorGlow";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Shapna Palani — UI/UX & Graphic Designer" },
      {
        name: "description",
        content:
          "About Shapna Palani: UI/UX and graphic designer with 2+ years of experience across mobile apps, web platforms, brand identity and marketing creatives.",
      },
      { property: "og:title", content: "About Shapna Palani — UI/UX & Graphic Designer" },
      {
        property: "og:description",
        content:
          "Crafting interfaces that feel alive. Experience, skills and design tools of Shapna Palani.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-background">
      <CursorGlow />
      <SiteNav active="about" />
      <AboutHero />
      <Experience />
      <Tools />
      <SiteFooter />
    </main>
  );
}
