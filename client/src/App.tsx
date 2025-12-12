// src/App.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Starfield from "./components/Starfield";
import Welcome from "./pages/home/Welcome";
import Hero from "./pages/home/Hero";
import Journey from "./pages/home/Journey";

export default function App() {
  const [slideUp, setSlideUp] = useState(false);

  // Lock scroll on initial load + reset scroll position
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.style.overflow = "hidden";
  }, []);

  // Handles Welcome finishing its animation
  const handleAnimationComplete = () => {
    setSlideUp(true);
  };

  return (
    <main className="relative w-full min-h-screen overflow-hidden text-white">

      {/* ===========================
          BACKGROUND STARFIELD
      ============================ */}
      <div className="fixed inset-0 -z-10">
        <Starfield mode="normal" />
      </div>

      {/* ===========================
          ONLY WELCOME SLIDES UP
      ============================ */}
      <motion.div
        className="absolute top-0 left-0 w-full h-screen will-change-transform"
        initial={{ y: 0 }}
        animate={{ y: slideUp ? "-100vh" : 0 }}
        transition={{
          duration: 1,
          ease: [0.12, 0.7, 0.63, 0.9],
        }}
        onAnimationComplete={() => {
          if (slideUp) {
            document.documentElement.style.overflow = "auto";
          }
        }}
      >
        <Welcome onAnimationComplete={handleAnimationComplete} />
      </motion.div>

      {/* ===========================
          NORMAL PAGE SECTIONS
      ============================ */}
      <div className="relative z-10">
        <Hero shouldAnimate={slideUp} />
        <Journey />
      </div>
    </main>
  );
}
