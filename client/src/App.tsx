// src/App.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Starfield from "./components/Starfield";
import Welcome from "./screens/Welcome";
import Hero from "./screens/Hero";

export default function App() {
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
  }, []);

  const handleAnimationComplete = () => {
    setSlideUp(true);
    
    setTimeout(() => {
      document.documentElement.style.overflow = 'auto';
    }, 2000);
  };

  return (
    <main className="relative w-full h-screen overflow-hidden text-white">
      <div className="fixed inset-0 -z-10">
        <Starfield mode="normal" />
      </div>

      <motion.div
        className="absolute w-full will-change-transform"
        initial={{ y: 0 }}
        animate={{ y: slideUp ? "-100vh" : 0 }}
        transition={{
          duration: 1,
          ease: [0.12, 0.7, 0.63, .9]
        }}
      >
        <Welcome onAnimationComplete={handleAnimationComplete} />
        <Hero shouldAnimate={slideUp} />
      </motion.div>
    </main>
  );
}