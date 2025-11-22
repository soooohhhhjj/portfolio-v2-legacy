// src/screens/Hero.tsx
import { motion } from "framer-motion";
import { Download, SquareArrowOutUpRight } from "lucide-react";
import type { Easing } from "framer-motion";
import "../components/Hero/hero.css";

const easeSmooth: Easing = [0.12, 0.7, 0.63, .9];

interface HeroProps {
  shouldAnimate: boolean;
}

export default function Hero({ shouldAnimate }: HeroProps) {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="section-content responsiveness flex flex-col min-h-screen cursor-default">

        {/* NAVBAR - No animation, moves with container */}
        <nav className="w-full flex justify-between items-center py-6">
          <h1 className="font-bruno text-[20px] font-[800] tracking-[2px] text-white">
            sohj.abe
          </h1>
          <div className="font-jura font-medium flex items-center gap-6 text-base">
            <a href="#about" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#works" className="hover:text-blue-400 transition-colors">My Projects</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About Me</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">Contact</a>
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
              className="font-jura text-[18px] tracking-[.5px] text-white font-[700]"
            >
              Hi, I'm <span>Carlo Joshua B. Abellera</span>, and I enjoy
            </motion.p>

            {/* BIG TEXT */}
            <motion.h2
              initial={{ y: "100vh" }}
              animate={{ y: shouldAnimate ? 0 : "100vh" }}
              transition={{ duration: 1, ease: easeSmooth, delay: 0.1 }}
              className="font-anta text-[58px] font-extrabold leading-tight tracking-tight "
            >
              <span className="inline-block text-white mt-2">
                Building pixel-perfect <br/>
                <span className="inline-block leading-tight">
                  Interactive websites
                </span>

              </span>
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
              <button className="flex items-center gap-[6px] bg-white text-black px-[18px] py-[7px] rounded-md">
                <Download size={16} /> Resume
              </button>

              <button className="flex items-center gap-2 border border-white px-[18px] py-[7px] rounded-md">
                <SquareArrowOutUpRight size={15} /> Explore
              </button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}