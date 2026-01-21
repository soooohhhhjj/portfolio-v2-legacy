// src/pages/home/Journey.tsx
import { motion } from "framer-motion";
import type { Easing } from "framer-motion";
import { GraduationCap, LaptopMinimalCheck, Layers, Award } from "lucide-react";
import "../../components/Journey/Journey.css";
import "../../components/Hero/hero.css";

const easeSmooth: Easing = [0.12, 0.7, 0.63, 0.9];

interface Props {
  shouldShow: boolean;
}

const journeyCards = [
  {
    title: "Foundation in IT",
    subtitle: "BS Information Technology",
    description:
      "Built a strong foundation in programming, databases, systems analysis, and software development principles.",
    highlights: ["Java", "Web Fundamentals", "Database Design"],
    icon: <GraduationCap className="w-6 h-6 text-white" />,
  },
  {
    title: "Internship Experience",
    subtitle: "Real-world development exposure",
    description:
      "Worked with real systems, fixed bugs, assisted with internal tools, and collaborated with developers.",
    highlights: ["Bug fixing", "Team collaboration", "System exposure"],
    icon: <LaptopMinimalCheck className="w-6 h-6 text-white" />,
  },
  {
    title: "Academic Projects",
    subtitle: "Hands-on learning",
    description:
      "Developed multiple academic and personal projects applying best practices and clean architecture.",
    highlights: ["React", "System planning", "UI logic"],
    icon: <Layers className="w-6 h-6 text-white" />,
  },
  {
    title: "Thesis & Capstone",
    subtitle: "System-level thinking",
    description:
      "Focused on system architecture, planning, and development for large academic systems.",
    highlights: ["Architecture", "Planning", "Debugging"],
    icon: <Award className="w-6 h-6 text-white" />,
  },
];

export default function Journey({ shouldShow }: Props) {
  return (
    <motion.section
      initial={{ y: "100vh" }}
      animate={{ y: shouldShow ? 0 : "100vh" }}
      transition={{ duration: 1, ease: easeSmooth, delay: 0.4 }}
      className={`section-style relative flex flex-col ${
        shouldShow ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Fade buffer */}
      <div className="h-52 w-full bg-gradient-to-b from-transparent via-black/40 to-[#0b0b0fc9]" />

      <div className="section-content min-h-screen bg-[#0b0b0fc9] z-10">
        {/* Header */}
        <div className="text-center mt-[90px]">
          <h1 className="font-bruno text-[41px] font-[700] tracking-[2px] text-white">
            My Journey
          </h1>
          <p className="mt-4 text-[16px] text-white/80 font-jura max-w-xl mx-auto">
            How my experience, skills, and mindset evolved over time.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="mt-20 flex flex-col gap-10 max-w-5xl mx-auto px-6">
          {journeyCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, ease: easeSmooth }}
              className="bg-[#15151a] rounded-2xl p-8 shadow-lg hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                  {card.icon}
                </div>

                <div>
                  <h3 className="text-white text-xl font-semibold">
                    {card.title}
                  </h3>
                  <p className="text-sm text-white/60">{card.subtitle}</p>
                </div>
              </div>

              <p className="text-white mt-4">{card.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {card.highlights.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
