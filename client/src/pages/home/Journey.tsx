// src/pages/home/Journey.tsx
import { motion } from "framer-motion";
import type { Easing } from "framer-motion";

const easeSmooth: Easing = [0.12, 0.7, 0.63, 0.9];

interface Props {
  shouldShow: boolean;
}

export default function Journey({ shouldShow }: Props) {
  return (
    <motion.section
      initial={{ y: "100vh" }}
      animate={{ y: shouldShow ? 0 : "100vh" }}
      transition={{
        duration: 1,
        ease: easeSmooth,
        delay: 0.4,
      }}
      className={`section-style relative min-h-screen mt-36 pt-24 pb-32 overflow-hidden ${
        shouldShow ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Soft-entry blur background */}
      <div className="absolute inset-0 -z-10">
        {/* gradient mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent backdrop-blur-2xl" />

        {/* glass edge hint */}
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      </div>

      <div className="section-content responsiveness flex flex-col relative z-10">
        <h1 className="text-4xl font-bold mb-16 text-center">
          My Journey
        </h1>

        <div className="flex-1 center-div opacity-40 text-sm">
          Journey content goes here
        </div>
      </div>
    </motion.section>
  );
}
