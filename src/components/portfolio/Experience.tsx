import { useReveal } from "@/hooks/use-reveal";
import { SectionLabel } from "./SectionLabel";

type Job = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

const JOBS: Job[] = [
  {
    role: "Graphic Designer",
    company: "Chimertech Private Limited, Chennai",
    period: "Nov 2025 - Present",
    points: [
      "Designed 500+ creatives including posters, social media campaigns, banners, brochures, and catalogues.",
      "Created branding assets aligned with marketing goals and brand identity.",
      "Collaborated with marketing and development teams for consistent campaign execution.",
      "Delivered creative designs for healthcare, veterinary, and tech projects.",
      "Recognized for strong creative contributions and visual communication skills.",
    ],
  },
  {
    role: "UI/UX Designer",
    company: "Wizinoa, Madurai",
    period: "Nov 2024 - Oct 2025",
    points: [
      "Designed 200+ marketing creatives, enhancing brand visibility and engagement.",
      "Created 15+ responsive website UI designs with modern layouts and strong visual hierarchy.",
      "Designed Laundoor Car Wash Management System UI for Admin, Supervisor, and Employee apps.",
      "Developed JaiFashion E-commerce UI for User and Admin platforms with seamless UX.",
      "Improved user flow and interface consistency for the Labbaik Marketplace App.",
      "Collaborated with developers and stakeholders to deliver user-centered UI/UX solutions.",
    ],
  },
  {
    role: "UI/UX Designer, Intern",
    company: "Duhzine IT Solutions, Chennai",
    period: "Nov 2024 - Oct 2025",
    points: [
      "Designed multiple static website interfaces and login screens by applying design principles like alignment, spacing, and color balance, ensuring a seamless and user-friendly browsing experience across all devices.",
    ],
  },
];

function JobRow({ job, index }: { job: Job; index: number }) {
  const { ref, shown } = useReveal<HTMLDivElement>(0.12);

  return (
    <div
      ref={ref}
      className="group grid gap-4 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-10"
    >
      <h3
        className={`reveal min-w-0 font-display text-[clamp(1.35rem,5.2vw,1.85rem)] font-bold leading-tight transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 ${
          shown ? "reveal-in" : ""
        }`}
        style={{ ["--reveal-delay" as string]: `${index * 60}ms` }}
      >
        {job.role}
      </h3>

      <div className="relative min-w-0 pl-6 sm:pl-8">
        <span
          aria-hidden="true"
          className="absolute left-0 top-2 h-3 w-3 rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-125 group-hover:shadow-[0_0_16px_3px_rgba(255,255,255,0.5)]"
        />
        <div
          className={`reveal ${shown ? "reveal-in" : ""}`}
          style={{ ["--reveal-delay" as string]: "90ms" }}
        >
          <p className="font-display text-[clamp(1.15rem,4.4vw,1.5rem)] font-medium leading-snug">
            {job.company}
          </p>
          <p className="mt-1 text-[clamp(0.85rem,2.9vw,0.95rem)] text-white/70">{job.period}</p>
        </div>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[clamp(0.92rem,2.9vw,1.02rem)] leading-relaxed text-white/85 marker:text-white/50">
          {job.points.map((p, i) => (
            <li
              key={p}
              className={`reveal transition-colors duration-300 hover:text-white ${
                shown ? "reveal-in" : ""
              }`}
              style={{ ["--reveal-delay" as string]: `${160 + i * 70}ms` }}
            >
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Experience() {
  const { ref, shown } = useReveal<HTMLElement>(0.1);

  return (
    <section
      id="experience"
      ref={ref}
      className="mx-auto w-full max-w-[1440px] scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className={`reveal ${shown ? "reveal-in" : ""}`}>
        <SectionLabel>Experience</SectionLabel>
      </div>

      <div className="mt-10 flex flex-col gap-12 sm:mt-14 sm:gap-16">
        {JOBS.map((j, i) => (
          <JobRow key={j.company} job={j} index={i} />
        ))}
      </div>

      <hr className="mt-16 border-white/15 sm:mt-20" />
    </section>
  );
}
