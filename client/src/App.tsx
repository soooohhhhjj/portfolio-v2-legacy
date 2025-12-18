// src/App.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Starfield from "./components/Starfield";
import Welcome from "./pages/home/Welcome";
import Hero from "./pages/home/Hero";
import Journey from "./pages/home/Journey";
import Lenis from "@studio-freight/lenis";
import { setScrollVelocity } from "./lib/scrollState";

export default function App() {
  const [slideUp, setSlideUp] = useState(false);
  const [heroDone, setHeroDone] = useState(false);

  /* ===========================
     SCROLL LOCK HELPERS
  ============================ */
  const lockScroll = () => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  };

  const unlockScroll = () => {
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
  };

  /* ===========================
     INITIAL LOAD — HARD LOCK
  ============================ */
  useEffect(() => {
    window.scrollTo(0, 0);
    lockScroll();
  }, []);

  /* ===========================
     WELCOME FINISH
  ============================ */
  const handleAnimationComplete = () => {
    setSlideUp(true);
  };

  /* ===========================
     UNLOCK SCROLL ONLY WHEN
     WELCOME + HERO ARE DONE
  ============================ */
  useEffect(() => {
    if (slideUp && heroDone) {
      unlockScroll();
    }
  }, [slideUp, heroDone]);

  /* ===========================
     BLOCK WHEEL / TOUCH / KEYS
  ============================ */
  useEffect(() => {
    const preventScroll = (e: Event) => {
      // only block scroll-related keys
      if (
        e instanceof KeyboardEvent &&
        ![
          "ArrowUp",
          "ArrowDown",
          "PageUp",
          "PageDown",
          " ",
          "Home",
          "End",
        ].includes(e.key)
      ) {
        return;
      }

      e.preventDefault();
    };

    if (!slideUp || !heroDone) {
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
      window.addEventListener("keydown", preventScroll, { passive: false });
    }

    return () => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", preventScroll);
    };
  }, [slideUp, heroDone]);

  /* ===========================
     LENIS — START LAST
  ============================ */
  useEffect(() => {
    if (!slideUp || !heroDone) return;

    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    let lastScroll = window.scrollY;
    let rafId: number;

    const raf = (time: number) => {
      lenis.raf(time);

      const current = window.scrollY;
      const delta = current - lastScroll;
      lastScroll = current;

      setScrollVelocity(Math.max(-30, Math.min(30, delta)));

      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [slideUp, heroDone]);

  return (
    <main className="relative w-full min-h-screen overflow-hidden text-white">
      {/* ===========================
          BACKGROUND STARFIELD
      ============================ */}
      <div className="fixed inset-0 -z-10">
        <Starfield mode="normal" />
      </div>

      {/* ===========================
          WELCOME SLIDE UP
      ============================ */}
      <motion.div
        className="absolute top-0 left-0 w-full h-screen will-change-transform"
        initial={{ y: 0 }}
        animate={{ y: slideUp ? "-100vh" : 0 }}
        transition={{
          duration: 1,
          ease: [0.12, 0.7, 0.63, 0.9],
        }}
      >
        <Welcome onAnimationComplete={handleAnimationComplete} />
      </motion.div>

      {/* ===========================
          MAIN CONTENT
      ============================ */}
      <div className="relative z-10">
        <Hero
          shouldAnimate={slideUp}
          onAnimationsComplete={() => setHeroDone(true)}
        />
        <Journey shouldShow={slideUp} />
      </div>
    </main>
  );
}
