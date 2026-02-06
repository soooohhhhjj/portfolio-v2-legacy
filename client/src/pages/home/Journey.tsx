// src/pages/home/Journey.tsx
import { motion } from "framer-motion";
import type { Easing } from "framer-motion";
import "../../components/Journey/Journey.css";
import "../../components/Hero/hero.css";
import MemoryLane from "../../components/Journey/MemoryLane";

const easeSmooth: Easing = [0.12, 0.7, 0.63, 0.9];

interface Props {
  shouldShow: boolean;
}

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
      {/* Fade-in buffer (adjust stops here) */}
      <div
        className="
          h-52 w-full
          bg-gradient-to-b
          from-transparent from-[0%]
          via-black/40 via-[1%]
          to-[#0b0b0fc9] to-[100%]
        "
      />

      {/* Content area */}
      <div className="section-content h-[5900px] bg-[#0b0b0fc9] flex flex-col relative z-10">
        <div className="responsiveness">
          {/* TITLE */}
          <div className="text-center mt-[90px]">
            <h1 className="font-bruno text-[41px] font-[700] tracking-[2px] text-white journey-header">
              My Journey
            </h1>

            <p className="mt-4 text-[16px] text-white tracking-[.3px] font-jura max-w-xl mx-auto journey-subheader">
              A timeline of my growth, learning process, and projects over the years.
            </p>
          </div>

          <MemoryLane />

        </div>
      </div>
    </motion.section>
  );
}
