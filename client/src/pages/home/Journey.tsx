// src/pages/home/Journey.tsx
import { motion } from "framer-motion";
import type { Easing } from "framer-motion";
import "../../components/Journey/Journey.css";
import "../../components/Hero/hero.css";

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
      className={`section-style relative mt-6 flex flex-col ${
        shouldShow ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="section-content h-[500vh] mt-36 responsiveness flex flex-col relative z-10">
        {/* TITLE */}
        <div className="text-center">
          <h1 className="font-bruno text-4xl font-[700] tracking-[2px] text-white journey-header">
            My Journey
          </h1>

          <p className="mt-4 text-[15px] text-white tracking-[.3px] font-jura max-w-xl mx-auto journey-subheader">
            A timeline of my growth, learning process, and projects over the years.
          </p>
        </div>

        {/* Divider */}
        <div className="mt-10 flex justify-center relative">
          <div className="journey-divider" />
        </div>



        {/* content comes later */}
      </div>
    </motion.section>
  );
}
