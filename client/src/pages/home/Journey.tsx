// src/pages/home/Journey.tsx
import { motion } from "framer-motion";
import type { Easing } from "framer-motion";
import "../../components/Journey/Journey.css";

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
      className={`section-style relative h-[500vh] mt-6 overflow-hidden justify-start flex flex-col ${
        shouldShow ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Backgrounds */}
      <div className="" />

      {/* CONTENT (temporary) */}
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
