// src/screens/Hero.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, SquareArrowOutUpRight } from "lucide-react";
import type { Easing } from "framer-motion";
import "../components/Hero/hero.css";

const easeSmooth: Easing = [0.12, 0.7, 0.63, .9];

interface HeroProps {
  shouldAnimate: boolean;
}

export default function Hero({ shouldAnimate }: HeroProps) {
  const words = ["Building", "pixel-perfect", "Interactive", "Websites"];
  const [gradientPosition, setGradientPosition] = useState(10);
  const [targetPosition, setTargetPosition] = useState(10);

  useEffect(() => {
    let raf: number; 
    const loop = () => {
      setGradientPosition((prev) => {
        const diff = targetPosition - prev;
        const step = diff * 0.1;
        return Math.abs(diff) < 0.1 ? targetPosition : prev + step;
      });
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, [targetPosition]);

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setTargetPosition(((e.clientX - r.left) / r.width) * 100);
  };

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="section-content responsiveness flex flex-col min-h-screen cursor-default">

        {/* NAVBAR - No animation, moves with container */}
        <nav className="w-full flex justify-between items-center py-6">
          <h1 className="font-bruno text-[20px] font-[800] tracking-[2px] text-white drop-shadow-[0_0_1px_#0095ff]">
            sohj.abe
          </h1>
          <div className="font-jura font-medium flex items-center gap-6 text-base">
            <a href="#works" className="hover:text-blue-400 transition-colors">Works</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About Me</a>
            <button className="border border-blue-400 px-4 py-1.5 rounded-md hover:bg-blue-400 hover:text-black transition-colors">
              Contact
            </button>
          </div>
        </nav>

        {/* HERO BODY */}
        <div className="flex flex-col md:flex-row flex-1 items-start justify-between gap-12 mt-[25px]">

          {/* PROFILE PIC */}
          <motion.div
            initial={{ y: "100vh" }}
            animate={{ y: shouldAnimate ? 0 : "100vh" }}
            transition={{ duration: .8, ease: easeSmooth, delay: 0 }}
            className="relative flex-shrink-0 w-full max-w-[320px] rounded-[7px] overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            <img src="/prof-pic.jpg" alt="Profile" className="w-full h-full object-cover object-top rounded-[7px]" />
            <div className="absolute inset-0 rounded-[7px] border border-white/10 shadow-[inset_0_0_15px_rgba(255,255,255,0.15)]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 opacity-70 rounded-xl" />
          </motion.div>

          {/* TEXT SIDE */}
          <div className="flex-1 max-w-[600px] text-left mt-2">

            {/* SMOL TEXT */}
            <motion.p
              initial={{ y: "100vh" }}
              animate={{ y: shouldAnimate ? 0 : "100vh" }}
              transition={{ duration: .9, ease: easeSmooth, delay: 0.05 }}
              className="font-jura text-[18px] tracking-[.5px] text-gray-300 font-[700]"
            >
              Hi, I'm <span>Carlo Joshua B. Abellera</span>, and I enjoy
            </motion.p>

            {/* BIG TEXT */}
            <motion.h2
              initial={{ y: "100vh" }}
              animate={{ y: shouldAnimate ? 0 : "100vh" }}
              transition={{ duration: 1, ease: easeSmooth, delay: 0.1 }}
              className="font-anta text-[56px] font-extrabold leading-tight text-gray-100 mt-2"
            >
              {words.map((word, idx) =>
                word === "Interactive" ? (
                  <span
                    key={idx}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => setTargetPosition(10)}
                    className="inline-block mr-2 bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `radial-gradient(circle at ${gradientPosition}% 40%, rgb(236,72,153), rgb(139,92,246), rgb(59,130,246))`,
                      WebkitBackgroundClip: "text",
                    }}
                  >
                    {word}
                  </span>
                ) : (
                  <span key={idx} className="inline-block mr-2 text-gray-100">{word}</span>
                )
              )}
            </motion.h2>

            {/* ROLE TEXT */}
            <motion.p
              initial={{ y: "100vh" }}
              animate={{ y: shouldAnimate ? 0 : "100vh" }}
              transition={{ duration: 1.1, ease: easeSmooth, delay: 0.15 }}
              className="font-bruno text-[23px] font-[700] tracking-[1px] text-white mt-12"
            >
              Full-Stack Developer
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ y: "100vh" }}
              animate={{ y: shouldAnimate ? 0 : "100vh" }}
              transition={{ duration: 1.2, ease: easeSmooth, delay: 0.2 }}
              className="flex flex-wrap gap-4 pt-7 text-[14px] font-[700] font-jura"
            >
              <button className="flex items-center gap-[6px] bg-blue-500/90 hover:bg-blue-600 text-white px-[18px] py-[7px] rounded-md shadow-[0_0_12px_rgba(59,130,246,0.4)] transition-all duration-300">
                <Download size={16} /> Resume
              </button>

              <button className="flex items-center gap-2 border border-blue-400 px-[18px] py-[7px] rounded-md hover:bg-blue-400 hover:text-black shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all duration-300">
                <SquareArrowOutUpRight size={15} /> Projects
              </button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}