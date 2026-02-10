// src/pages/home/Skills.tsx
import {
  Code2,
  Database,
  Globe,
  Telescope,
  Wrench,
} from "lucide-react";
import { techIconMapSkills } from "../../components/Skills/techIconMapSkills";

type SkillGroup = {
  title: string;
  description: string;
  tech: string[];
  Icon: typeof Globe;
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Web Development",
    description:
      "I love designing interfaces and bringing them to life with backend integration.",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    Icon: Globe,
  },
  {
    title: "Databases",
    description:
      "Databases I've worked with so far.",
    tech: ["MySQL", "Firebase"],
    Icon: Database,
  },
  {
    title: "Programming",
    description:
      "Techs I’ve worked with before… it’s been a while though.",
    tech: ["Java", "Python", "C", "C++"],
    Icon: Code2,
  },
  {
    title: "Tools",
    description:
      "The tools I mainly use and the ones I find most relevant.",
    tech: ["GitHub", "VS Code", "Android Studio", "Google Workspace"],
    Icon: Wrench,
  },
  {
    title: "Currently Exploring",
    description:
      "Stuff I’m currently exploring and trying to get better at.",
    tech: ["React", "Tailwind", "TypeScript", "NodeJS", "Next.js"],
    Icon: Telescope,
  },
];


const TECH_ICON_FALLBACK = "w-[13px] h-[13px] rounded-full border border-white/60";

function TechPill({ name }: { name: string }) {
  const icon = techIconMapSkills[name];

  return (
    <div className="flex items-center gap-2 border border-white/30 rounded-sm px-2 py-1 text-white text-[12px] tracking-[0.3px]">
      <span className="flex items-center">
        {icon ?? <span className={TECH_ICON_FALLBACK} aria-hidden="true" />}
      </span>
      <span>{name}</span>
    </div>
  );
}
export default function Skills() {
  return (
    <section className="section-style relative flex flex-col">
      <div className="section-content flex flex-col relative z-10">
        <div className="responsiveness mb-[300px]">
          {/* Title */}
          <div className="text-center">
            <h1 className="font-bruno lg:mt-[90px] text-[35px] sm:text-[38px] lg:text-5xl font-bold tracking-[2px] text-white journey-header">
              Skills & Tools
            </h1>

            <p className="lg:mt-[12px] text-[13px] sm:text-[16px] lg:text-[17px] max-w-[80%] md:max-w-[100%] mx-auto text-white tracking-[.3px] font-jura journey-subheader">
              The technologies I've built my foundation on -- and the ones I'm still exploring.
            </p>
          </div>

          {/* Content */}
          <div className="mt-10 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_GROUPS.map(({ title, description, tech, Icon }) => (
              <div
                key={title}
                className="rounded-[7px] border border-white/20 shadow-[0_0_100px_rgba(255,255,255,0.10)]"
              >
                <div className="rounded-sm bg-transparent p-4 flex flex-col gap-3">
                  <div className="rounded-sm border border-white/30 px-3 py-2 flex items-center gap-3">
                    <Icon className="text-white w-4 h-4" />
                    <h3 className="font-jura text-white text-[15px] sm:text-[16px] font-semibold tracking-[0.6px]">
                      {title}
                    </h3>
                  </div>

                  <div className="font-jura rounded-sm border border-white/30 px-3 py-2 text-white text-[13px] sm:text-[14px] leading-relaxed tracking-[0.2px]">
                    {description}
                  </div>

                  <div className="rounded-sm flex flex-wrap gap-2">
                    {tech.map((name) => (
                      <TechPill key={name} name={name} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
