import type { LucideIcon } from "lucide-react";
import { GraduationCap, Code } from "lucide-react";

export type Anchor = "top" | "bottom" | "left" | "right";

export interface MemoryItem {
  id: string;
  type: "parent" | "child";

  x: number;
  y: number;
  width: number;
  height: number;

  icon?: LucideIcon;
  title?: string;
  stack?: string[];
}

export interface MemoryEdge {
  from: string;
  to: string;

  fromAnchor: Anchor;
  toAnchor: Anchor;

  // optional bend points (absolute positions)
  via?: { x: number; y: number }[];
}

export const items: MemoryItem[] = [
  {
    id: "1a",
    type: "parent",
    x: 120,
    y: 200,
    width: 44,
    height: 44,
    icon: GraduationCap,
  },
  {
    id: "2a",
    type: "child",
    x: 260,
    y: 300,
    width: 320,
    height: 180,
    title: "Freshman Projects",
    stack: ["HTML", "CSS"],
  },
  {
    id: "3a",
    type: "child",
    x: 420,
    y: 520,
    width: 320,
    height: 180,
    title: "Portfolio v1",
    stack: ["JavaScript"],
  },
  {
    id: "1b",
    type: "parent",
    x: 300,
    y: 820,
    width: 44,
    height: 44,
    icon: Code,
  },
];

export const edges: MemoryEdge[] = [
  {
    from: "1a",
    to: "2a",
    fromAnchor: "right",
    toAnchor: "top",
    via: [
      { x: 180, y: 220 },
      { x: 220, y: 180 },
      { x: 250, y: 260 },
    ],
  },
  {
    from: "2a",
    to: "3a",
    fromAnchor: "bottom",
    toAnchor: "top",
    via: [
      { x: 280, y: 420 },
      { x: 400, y: 480 },
      { x: 380, y: 500 },
    ],
  },
  {
    from: "3a",
    to: "1b",
    fromAnchor: "bottom",
    toAnchor: "left",
    via: [
      { x: 580, y: 700 },
      { x: 260, y: 680 },
      { x: 320, y: 720 },
      { x: 280, y: 780 },
    ],
  },
];
