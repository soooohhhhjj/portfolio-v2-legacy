//src/pages/home/Journey.tsx
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
        delay: 0.4, // 👈 lags behind Hero's last element
      }}
      className={`relative min-h-screen w-full pt-24 pb-32 ${
        shouldShow ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <h1 className="text-4xl font-bold mb-16 text-center">
        My Journey
      </h1>

      {/* content later */}
    </motion.section>
  );
}
