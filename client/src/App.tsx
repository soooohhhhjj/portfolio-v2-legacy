// src/App.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Starfield from "./components/Starfield";
import Welcome from "./screens/Welcome";
import Hero from "./screens/Hero";

export default function App() {
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    // Disable scroll initially
    document.documentElement.style.overflow = 'hidden';
  }, []);

  const handleAnimationComplete = () => {
    setSlideUp(true);
    // Enable scroll after animation
    setTimeout(() => {
      document.documentElement.style.overflow = 'auto';
    }, 800); // Match animation duration
  };

  return (
    <main className="relative w-full h-screen overflow-hidden text-white">
      <div className="fixed inset-0 -z-10">
        <Starfield mode="normal" />
      </div>
      
      <motion.div
        className="absolute w-full"
        initial={{ y: 0 }}
        animate={{ y: slideUp ? "-100vh" : 0 }}
        transition={{ 
          duration: 1.2, 
          ease: "easeInOut" 
        }}
      >
        {/* Welcome Block */}
        <Welcome onAnimationComplete={handleAnimationComplete} />
        
        {/* Hero Block */}
        <Hero />
      </motion.div>
    </main>
  );
}