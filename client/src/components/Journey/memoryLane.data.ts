import type { LucideIcon } from "lucide-react";
import { GraduationCap } from "lucide-react";

export type Anchor = "top" | "bottom" | "left" | "right";

export interface MemoryItem {
  id: string;
  type: "parent" | "child";

  x: number;
  y: number;
  width: number;
  height: number;

  // parent
  icon?: LucideIcon;

  // child
  title?: string;
  details?: string;
  image?: string;

  techTags?: string[];
  highlightTags?: string[];
}

export const items: MemoryItem[] = [
  {
    id: "node1",
    type: "parent",
    x: 436,
    y: 80,
    width: 56,
    height: 56,
    icon: GraduationCap,
  },
  {
    id: "node1-c1",
    type: "child",
    x: 50,
    y: 230,
    width: 340,
    height: 300,
    title: "Freshman Projects",
    details: "Early coursework focused on web fundamentals and collaboration.",
    image: "/Journey/basc.PNG",
    techTags: ["HTML", "CSS"],
    highlightTags: ["Troubleshooting", "Teamwork"],
  },
  {
    id: "node1-c2",
    type: "child",
    x: 640,
    y: 280,
    width: 340,
    height: 300,
    title: "Freshman Projects",
    details: "Early coursework focused on web fundamentals and collaboration.",
    image: "/Journey/basc.PNG",
    techTags: ["HTML", "CSS"],
    highlightTags: ["Troubleshooting", "Teamwork"],
  },

];
