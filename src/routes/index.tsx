import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { SiteFooter } from "@/components/portfolio/SiteFooter";
import { SocialMarquee } from "@/components/portfolio/SocialMarquee";
import { ProjectSection } from "@/components/portfolio/ProjectSection";
import { BrowserWindow } from "@/components/portfolio/BrowserWindow";
import { CursorGlow } from "@/components/portfolio/CursorGlow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shapna Palani — UI/UX & Graphic Designer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Shapna Palani, UI/UX and graphic designer. Web, dashboard, mobile app and social media design work.",
      },
      { property: "og:title", content: "Shapna Palani — UI/UX & Graphic Designer Portfolio" },
      {
        property: "og:description",
        content:
          "Creating meaningful experiences through thoughtful design. Selected UI/UX, web and graphic design projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/** A framed screenshot inside a browser window, with a soft hover zoom. */
function Shot({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className="overflow-hidden">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045] ${className}`}
      />
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-background">
      <CursorGlow />
      <SiteNav />
      <Hero />

      <div id="works" className="scroll-mt-24">
        <ProjectSection
          title={[
            { text: "AIblf – Redefining Creativity with " },
            { text: "Next-Generation AI", accent: true },
          ]}
          description="A modern AI-powered platform designed to generate stunning images and creative content through intuitive prompts. Built with a focus on seamless user experience and visually engaging storytelling."
          tags={["Figma", "AI Website Hero Section", "Photoshop", "Behance"]}
          accent="#D808F2"
        >
          <BrowserWindow innerClassName="bg-[#1a0f22]">
            <Shot src="/images/aiblf.png" alt="AIblf AI platform landing page design" />
          </BrowserWindow>
        </ProjectSection>

        <ProjectSection
          reverse
          title={[
            { text: "CarNova – A Modern " },
            { text: "Car Rental", accent: true },
            { text: " Experience" },
          ]}
          description="Designed a sleek and responsive landing page for a car rental platform, delivering a seamless booking experience through intuitive navigation, bold visuals, and a user-focused interface."
          tags={["Car Rental Website", "Figma", "Photoshop", "Behance"]}
          accent="#FFAA00"
        >
          <BrowserWindow innerClassName="bg-[#2a1c05]">
            <Shot src="/images/carnova.png" alt="CarNova car rental landing page design" />
          </BrowserWindow>
        </ProjectSection>

        <ProjectSection
          title={[
            { text: "CarNova – " },
            { text: "Car Rental Admin", accent: true },
            { text: " Dashboard" },
          ]}
          description="CarNova is a modern admin dashboard designed to manage car rentals, bookings, drivers, availability, earnings, and expenses. It provides clear statistics and real-time car status to help administrators efficiently monitor daily operations."
          tags={[
            "UI/UX Design",
            "Dashboard Design",
            "Car Rental",
            "Admin Panel",
            "Data Visualization",
            "Web Design",
            "Figma",
            "User Experience",
          ]}
          accent="#FF5E14"
        >
          <BrowserWindow innerClassName="bg-[#181512]">
            <Shot
              src="/images/carnova-dashboard.png"
              alt="CarNova car rental admin dashboard design"
            />
          </BrowserWindow>
        </ProjectSection>

        <ProjectSection
          reverse
          title={[
            { text: "Investment – A " },
            { text: "Modern Financial", accent: true },
            { text: " Experience" },
          ]}
          description="Created a visually polished static website that presents investment solutions through a user-friendly interface, strengthening credibility and enhancing digital engagement."
          tags={["Figma", "Investment Website", "Photoshop", "Static Website"]}
          accent="#02A0E1"
        >
          <BrowserWindow innerClassName="bg-[#062637]">
            <Shot src="/images/investment.png" alt="Prime Investments website design" />
          </BrowserWindow>
        </ProjectSection>

        <ProjectSection
          title={[
            { text: "Sri Fashion – Redefining " },
            { text: "Digital Fashion", accent: true },
            { text: " Experiences" },
          ]}
          description="Designed a stylish and responsive e-commerce platform that blends modern aesthetics with intuitive usability to create an engaging online shopping journey."
          tags={["Figma", "Sri Fashion Website", "E-commerce", "Boutique"]}
          accent="#FF9000"
        >
          <BrowserWindow innerClassName="bg-[#2a1a0c]">
            <Shot src="/images/srifashion.png" alt="Sri Fashion e-commerce website design" />
          </BrowserWindow>
        </ProjectSection>

        <ProjectSection
          reverse
          title={[
            { text: "CourseWin – " },
            { text: "Online Learning", accent: true },
            { text: " Dashboard" },
          ]}
          description="CourseWin is an online learning dashboard designed to help users manage courses, lessons, tasks, mentors, and learning progress. The interface provides a clean and organized experience for discovering courses, continuing lessons, and tracking learning activities."
          tags={[
            "UI/UX Design",
            "EdTech",
            "Learning Dashboard",
            "Web Design",
            "Course Management",
            "User Experience",
            "Figma",
            "Dashboard Design",
          ]}
          accent="#1D61FF"
        >
          <BrowserWindow innerClassName="bg-[#0b1329]">
            <Shot src="/images/coursewin.png" alt="CourseWin online learning dashboard design" />
          </BrowserWindow>
        </ProjectSection>

        <ProjectSection
          title={[
            { text: "Bitco.in", accent: true },
            { text: " – Shaping the Future of Digital Finance" },
          ]}
          description="Designed a modern cryptocurrency landing page that communicates blockchain innovation through bold visuals, intuitive navigation, and a seamless user experience for digital finance audiences."
          tags={["Figma", "Bitcoin", "Photoshop", "Behance", "Landing Page"]}
          accent="#AFFC41"
        >
          <BrowserWindow innerClassName="bg-[#2a0a24]">
            <Shot src="/images/bitcoin.png" alt="Bitco.in cryptocurrency landing page design" />
          </BrowserWindow>
        </ProjectSection>

        <ProjectSection
          reverse
          title={[
            { text: "Crafting " },
            { text: "Mobile Applications", accent: true },
            { text: " That Blend Innovation with Usability" },
          ]}
          description="Hi, I'm Shapna. I design modern, accessible, and engaging digital products that connect users with brands through thoughtful design."
          tags={[
            "Figma",
            "Bitcoin",
            "Photoshop",
            "Behance",
            "Ecommerce apps",
            "Car working apps",
            "Marketplace apps",
          ]}
          accent="#FF3F5F"
        >
          <BrowserWindow innerClassName="bg-[linear-gradient(90deg,#2a1408_0%,#3a2a06_45%,#2a0d10_100%)]">
            <Shot src="/Mobile App.png" alt="Fashion e-commerce mobile app design" />
          </BrowserWindow>
        </ProjectSection>

        <SocialMarquee />
      </div>

      <SiteFooter />
    </main>
  );
}
