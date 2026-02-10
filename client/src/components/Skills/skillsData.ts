import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Database,
  Globe,
  Telescope,
  Wrench,
} from "lucide-react";

export type SkillGroup = {
  title: string;
  description: string;
  tech: string[];
  Icon: LucideIcon;
};

export const SKILLS_SECTION_META = {
  title: "Skills & Tools",
  subtitle:
    "The technologies I've built my foundation on -- and the ones I'm still exploring.",
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Web Development",
    description: "I love designing interfaces and bringing them to life with backend integration.",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    Icon: Globe,
  },
  {
    title: "Databases",
    description: "Databases I've worked with so far.",
    tech: ["MySQL", "Firebase"],
    Icon: Database,
  },
  {
    title: "Programming",
    description: "Techs I've worked with before... it's been a while though.",
    tech: ["Java", "Python", "C", "C++"],
    Icon: Code2,
  },
  {
    title: "Tools",
    description: "The tools I mainly use and the ones I find most relevant.",
    tech: ["GitHub", "VS Code", "Android Studio", "Google Workspace"],
    Icon: Wrench,
  },
  {
    title: "Currently Exploring",
    description: "Stuff I'm currently exploring and trying to get better at.",
    tech: ["React", "Tailwind", "TypeScript", "NodeJS", "Next.js"],
    Icon: Telescope,
  },
];
