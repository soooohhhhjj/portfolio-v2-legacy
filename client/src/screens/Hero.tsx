// src/screens/Hero.tsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, SquareArrowOutUpRight } from "lucide-react";
import type { Easing } from "framer-motion";
import "../components/Hero/hero.css";
import GlassFrame from "../components/ui/GlassCard";

const easeSmooth: Easing = [0.12, 0.7, 0.63, 0.9];

interface HeroProps {
  shouldAnimate: boolean;
}

export default function Hero({ shouldAnimate }: HeroProps) {
  const [outlineHover, setOutlineHover] = useState(false);
  const [runFlicker, setRunFlicker] = useState(false);

  useEffect(() => {
    if (!shouldAnimate) return;

    const timer = setTimeout(() => {
      setRunFlicker(true);
    }, 1600); // matches your hero animation end timing

    return () => clearTimeout(timer);
  }, [shouldAnimate]);

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="section-content responsiveness flex flex-col min-h-screen cursor-default">

        {/* NAVBAR */}
        <nav className="w-full flex justify-between items-center py-6">
          <h1 className="web-name font-bruno text-[20px] font-[500] tracking-[2px] text-white icon-role-text">
            {"sohj.abe".split("").map((char, i) => (
              <span
                key={i}
                className={`char-${i} ${runFlicker ? "flicker-once" : ""}`}
              >
                {char}
              </span>
            ))}
          </h1>
          <div className="nav-links font-jura font-medium flex items-center gap-6">
            <a href="#about" className="nav-link">Home</a>
            <a href="#works" className="nav-link">My Projects</a>
            <a href="#about" className="nav-link">About Me</a>
            <a href="#about" className="nav-link">Contact</a>
          </div>
        </nav>

        {/* HERO BODY */}
        <div className="flex flex-col md:flex-row flex-1 items-start justify-between gap-12 mt-[25px]">

          {/* PROFILE PIC */}
          <GlassFrame
            as={motion.div}
            animated={{
              initial: { y: "100vh" },
              animate: { y: shouldAnimate ? 0 : "100vh" },
              transition: { duration: 0.8, ease: easeSmooth, delay: 0 }
            }}
            width="max-w-[320px]"
            corner="rounded-[7px]"
            shadow="shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            <img
              src="/prof-pic.jpg"
              alt="Profile"
              className="w-full h-full object-cover object-top"
            />
          </GlassFrame>


          {/* TEXT SIDE */}
          <div className="flex-1 max-w-[600px] text-left mt-2">

            {/* SMOL TEXT */}
            <motion.p
              initial={{ y: "100vh" }}
              animate={{ y: shouldAnimate ? 0 : "100vh" }}
              transition={{ duration: .9, ease: easeSmooth, delay: 0.05 }}
              className="font-jura text-[18px] tracking-[.5px] text-white font-[700]"
            >
              Hi, I'm <span>Carlo Joshua B. Abellera</span>, and I enjoy
            </motion.p>

            {/* BIG TEXT */}
            <motion.h2
              initial={{ y: "100vh" }}
              animate={{ y: shouldAnimate ? 0 : "100vh" }}
              transition={{ duration: 1, ease: easeSmooth, delay: 0.1 }}
              className="font-anta text-[58px] font-extrabold leading-tight tracking-tight inline-block mt-2"
            >
              <span className="hero-text">Building pixel-perfect</span><br/>
              <span className="hero-gradient-text">Interactive </span>
              <span className="hero-text">Websites</span>
            </motion.h2>

            {/* ROLE TEXT */}
            <motion.p
              initial={{ y: "100vh" }}
              animate={{ y: shouldAnimate ? 0 : "100vh" }}
              transition={{ duration: 1.1, ease: easeSmooth, delay: 0.15 }}
              className="font-bruno text-[21px] font-[500] tracking-[1px] text-white mt-12 icon-role-text"
            >
              Full-Stack Developer
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ y: "100vh" }}
              animate={{ y: shouldAnimate ? 0 : "100vh" }}
              transition={{ duration: 1.2, ease: easeSmooth, delay: 0.2 }}
              className="btn-pair flex flex-wrap gap-4 pt-7 text-[12px] tracking-[.2px] font-[700] font-jura"
            >

              {/* SOLID BUTTON */}
              <button
                className={`hero-btn hero-btn-solid ${outlineHover ? "btn-drain" : ""}`}
              >
                <Download size={13} />
                Resume
              </button>

              {/* OUTLINE BUTTON */}
              <button
                className="hero-btn hero-btn-outline"
                onMouseEnter={() => setOutlineHover(true)}
                onMouseLeave={() => setOutlineHover(false)}
              >
                <SquareArrowOutUpRight size={13} />
                Explore
              </button>

            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

