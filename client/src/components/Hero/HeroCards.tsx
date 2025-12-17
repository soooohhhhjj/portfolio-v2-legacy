import { motion } from "framer-motion";
import type { Easing } from "framer-motion";
import {
  GraduationCap,
  LaptopMinimalCheck,
  Layers,
  BugOff,
} from "lucide-react";

const easeSmooth: Easing = [0.12, 0.7, 0.63, 0.9];

interface HeroCardsProps {
  shouldAnimate: boolean;
}

const cards = [
  {
    icon: GraduationCap,
    title: "BSIT Graduate",
    subtitle: "Bachelor of Science in Information Technology",
  },
  {
    icon: LaptopMinimalCheck,
    title: "IT Internship",
    subtitle: "Technical support, system deployment & reporting",
  },
  {
    icon: Layers,
    title: "Sys-Arch Thesis",
    subtitle: "Lead Developer · Inventory Management System",
  },
  {
    icon: BugOff,
    title: "Capstone Thesis",
    subtitle: "Planning, debugging & feature support",
  },
];

export default function HeroCards({ shouldAnimate }: HeroCardsProps) {
  return (
    <div className="w-full">
      {/* SECTION LABEL */}
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: shouldAnimate ? 0 : "100vh" }}
        transition={{
          duration: 0.7,
          ease: easeSmooth,
          delay: 0.25,
        }}
        className="mb-5"
      >
        <p className="font-bruno text-[13px] tracking-[1px] uppercase text-white/80">
          Highlights
        </p>
      </motion.div>

      {/* CARDS */}
      <div className="flex flex-wrap gap-6">
        {cards.map((card, i) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={i}
              initial={{ y: "100vh" }}
              animate={{ y: shouldAnimate ? 0 : "100vh" }}
              transition={{
                duration: 0.7,
                ease: easeSmooth,
                delay: 0.35 + i * 0.12,
              }}
              className="
                relative overflow-hidden
                rounded-[5px]
                p-6
                w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]
                flex flex-col items-start gap-3
              "
              style={{
                boxShadow: "0 0 30px #ffffff1a",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#ffffff0d")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              {/* Inset border */}
              <div
                className="absolute inset-0 rounded-[5px]"
                style={{
                  border: "1px solid #ffffff1a",
                  boxShadow: "inset 0 0 15px #ffffff26",
                }}
              />

              {/* Glass gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff1a 0%, transparent 50%, #ffffff0d 100%)",
                  opacity: 0.7,
                }}
              />

              {/* ICON */}
              <Icon className="relative z-10 w-6 h-6" color="#ffffffcc" />

              {/* TITLE */}
              <h3 className="relative z-10 font-bruno text-[14px] tracking-[1px] text-white">
                {card.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="relative z-10 font-jura text-[13px] leading-relaxed text-[#ffffffbf]">
                {card.subtitle}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
