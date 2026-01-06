// src/pages/home/Journey.tsx
import { motion } from "framer-motion";
import type { Easing } from "framer-motion";
import "../../components/Journey/Journey.css";
import "../../components/Hero/hero.css";

const easeSmooth: Easing = [0.12, 0.7, 0.63, 0.9];

interface Props {
  shouldShow: boolean;
}

/* TEMP CARD — visual only */
function DemoCard({ label, color }: { label: string; color: string }) {
  return (
    <div className={`h-40 w-56 rounded-xl flex items-center justify-center text-white font-bold ${color}`}>
      {label}
    </div>
  );
}

/* Reusable visual line */
function Line() {
  return (
    <div className="flex-1 min-w-full sm:min-w-0 h-[2px] bg-white/40" />
  );
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

        {/* ===== ROW 1 ===== */}
        <div className="mt-6 flex flex-wrap items-center gap-5">
          <Line />

          <div className="flex gap-6">
            <DemoCard label="Batch 1A" color="bg-red-500/60" />
            <DemoCard label="Batch 1B" color="bg-red-500/60" />
            <DemoCard label="Batch 1C" color="bg-red-500/60" />
          </div>

          <Line />

          <div className="flex gap-6">
            <DemoCard label="Batch 2A" color="bg-blue-500/60" />
            <DemoCard label="Batch 2B" color="bg-blue-500/60" />
          </div>

          <Line />
        </div>

        {/* ===== ROW 2 ===== */}
        <div className="mt-6 flex flex-wrap items-center gap-5">
          <Line />

          <div className="flex gap-6">
            <DemoCard label="Batch 3A" color="bg-green-500/60" />
            <DemoCard label="Batch 3B" color="bg-green-500/60" />
          </div>

          <Line />

          <div className="flex gap-6">
            <DemoCard label="Batch 4A" color="bg-purple-500/60" />
          </div>

          <Line />
        </div>

        {/* ===== ROW 3 ===== */}
        <div className="mt-6 flex flex-wrap items-center gap-5">
          <Line />

          <div className="flex gap-6">
            <DemoCard label="Batch 5A" color="bg-yellow-500/60" />
            <DemoCard label="Batch 5B" color="bg-yellow-500/60" />
          </div>

          <Line />

          <div className="flex gap-6">
            <DemoCard label="Batch 6A" color="bg-pink-500/60" />
            <DemoCard label="Batch 6B" color="bg-pink-500/60" />
          </div>

          <Line />
        </div>

        {/* ===== ROW 4 ===== */}
        <div className="mt-6 flex flex-wrap items-center gap-5">
          <Line />

          <div className="flex gap-6">
            <DemoCard label="Batch 7A" color="bg-cyan-500/60" />
          </div>

          <Line />

          <div className="flex gap-6">
            <DemoCard label="Batch 8A" color="bg-indigo-500/60" />
            <DemoCard label="Batch 8B" color="bg-indigo-500/60" />
            <DemoCard label="Batch 8C" color="bg-indigo-500/60" />
          </div>

          <Line />
        </div>

        {/* ===== ROW 5 ===== */}
        <div className="mt-6 flex flex-wrap items-center gap-5">
          <Line />

          <div className="flex gap-6">
            <DemoCard label="Batch 9A" color="bg-orange-500/60" />
            <DemoCard label="Batch 9B" color="bg-orange-500/60" />
          </div>

          <Line />

          <div className="flex gap-6">
            <DemoCard label="Batch 10A" color="bg-teal-500/60" />
          </div>

          <Line />
        </div>

      </div>
    </motion.section>
  );
}
