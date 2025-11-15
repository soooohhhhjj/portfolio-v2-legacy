import { useState, useEffect, useRef } from "react";
import { Download, SquareArrowOutUpRight } from "lucide-react";
import { motion } from "framer-motion";
import "../components/Hero/hero.css";

type HeroProps = {
  startAnimation?: boolean; // trigger from App
  blockDelays?: {
    navbar?: number;
    profile?: number;
    intro?: number;
    headline?: number;
    subtitle?: number;
    buttons?: number;
  };
};

export default function Hero({ startAnimation = false, blockDelays }: HeroProps) {
  const words = ["Building", "pixel-perfect", "Interactive", "Websites"];
  const [gradientPosition, setGradientPosition] = useState(0);
  const [targetPosition, setTargetPosition] = useState(0);
  const animationRef = useRef<number | null>(null);

  // Smooth gradient animation for "Interactive"
  useEffect(() => {
    const animate = () => {
      setGradientPosition(prev => {
        const diff = targetPosition - prev;
        const step = diff * 0.1;
        if (Math.abs(diff) < 0.1) return targetPosition;
        return prev + step;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current !== null) cancelAnimationFrame(animationRef.current);
    };
  }, [targetPosition]);

  const handleMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setTargetPosition((x / rect.width) * 100);
  };
  const handleMouseLeave = () => setTargetPosition(10);

  // -------------------------
  // Hero Blocks as motion.div
  // -------------------------

  return (
    <section className="section-style">
      <div className="section-content responsiveness flex flex-col min-h-screen cursor-default">

        {/* NAVBAR BLOCK */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={startAnimation ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: blockDelays?.navbar ?? 0.2, duration: 0.8, ease: "easeOut" }}
          className="w-full flex justify-between items-center py-6"
        >
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
        </motion.nav>

        {/* HERO BODY */}
        <div className="flex flex-col md:flex-row flex-1 items-start justify-between gap-12 mt-[25px]">

          {/* PROFILE BLOCK */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={startAnimation ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: blockDelays?.profile ?? 0.4, duration: 1, ease: "easeOut" }}
            className="relative flex-shrink-0 w-full max-w-[320px] rounded-[7px] overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            <img
              src="/prof-pic.jpg"
              alt="Profile"
              className="w-full h-full object-cover object-top rounded-[7px]"
            />
            <div className="absolute inset-0 rounded-[7px] border border-white/10 shadow-[inset_0_0_15px_rgba(255,255,255,0.15)]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 opacity-70 rounded-xl" />
          </motion.div>

          {/* RIGHT SIDE TEXT BLOCKS */}
          <div className="flex-1 max-w-[600px] text-left mt-2">

            {/* INTRO */}
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={startAnimation ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: blockDelays?.intro ?? 0.6, duration: 0.8, ease: "easeOut" }}
              className="font-jura text-[18px] tracking-[.5px] text-gray-300 font-[700]"
            >
              Hi, I'm <span>Carlo Joshua B. Abellera</span>, and I enjoy
            </motion.p>

            {/* HEADLINE */}
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={startAnimation ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: blockDelays?.headline ?? 0.8, duration: 1, ease: "easeOut" }}
              className="font-anta text-[56px] font-extrabold leading-tight text-gray-100 mt-2"
            >
              {words.map((word, idx) =>
                word === "Interactive" ? (
                  <span
                    key={idx}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="inline-block mr-2 bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `radial-gradient(circle at ${gradientPosition}% 40%, rgb(236,72,153), rgb(139,92,246), rgb(59,130,246))`,
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {word}
                  </span>
                ) : (
                  <span key={idx} className="inline-block mr-2 text-gray-100">
                    {word}
                  </span>
                )
              )}
            </motion.h2>

            {/* SUBTITLE */}
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={startAnimation ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: blockDelays?.subtitle ?? 1, duration: 0.8, ease: "easeOut" }}
              className="font-bruno text-[23px] font-[700] tracking-[1px] text-white mt-12"
            >
              Full-Stack Developer
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={startAnimation ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: blockDelays?.buttons ?? 1.2, duration: 0.8, ease: "easeOut" }}
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
