// src/pages/home/Journey.tsx
import { motion } from "framer-motion";
import type { Easing } from "framer-motion";
import "../../components/Journey/CSS/Journey.css";
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
          to-[#0b0b0fc9] to-[100%]
        "
      />

      {/* Content area */}
      <div className="section-content bg-[#0b0b0fc9] flex flex-col relative z-10">
        <div className="responsiveness">
          {/* TITLE */}
          <div className="text-center">
            <h1 className="font-bruno 
            text-[30px] sm:text-[38px]
            font-bold 
            tracking-[1px] 
            text-white journey-header">
              My Journey
            </h1>

            <p className="mt-[7px] text-[15px] sm:text-[16px] text-white tracking-[.3px] font-jura max-w-xl mx-auto journey-subheader">
              A timeline of my growth, learning process, and projects over the years.
            </p>
          </div>

          {/* <MemoryLane /> */}
          <div className="mt-0">
            <MemoryLane />
          </div>

        </div>
      </div>
    </motion.section>
  );
}
