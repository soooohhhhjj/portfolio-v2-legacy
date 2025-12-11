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

  // Trigger slide-up animation
  const handleAnimationComplete = () => {
    setSlideUp(true);
  };

  return (
    <main className="relative w-full min-h-screen overflow-hidden text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <Starfield mode="normal" />
      </div>

      {/* Sliding container */}
      <motion.div
        className="relative w-full will-change-transform"
        initial={{ y: 0 }}
        animate={{ y: slideUp ? "-100vh" : 0 }}
        transition={{
          duration: 1,
          ease: [0.12, 0.7, 0.63, 0.9],
        }}
        onAnimationComplete={() => {
          // Only unlock scroll AFTER slide-up finishes
          if (slideUp) {
            document.documentElement.style.overflow = "auto";
          }
        }}
      >
        <Welcome onAnimationComplete={handleAnimationComplete} />
        <Hero shouldAnimate={slideUp} />
        <Journey />
      </motion.div>
    </main>
  );
}
