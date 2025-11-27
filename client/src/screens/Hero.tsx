// src/screens/Hero.tsx
import { motion } from "framer-motion";
import { Download, SquareArrowOutUpRight } from "lucide-react";
import type { Easing } from "framer-motion";
import "../components/Hero/hero.css";
import HologramImage from "../components/Hologram/HologramImage";

const easeSmooth: Easing = [0.12, 0.7, 0.63, .9];

interface HeroProps {
  shouldAnimate: boolean;
}

export default function Hero({ shouldAnimate }: HeroProps) {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="section-content responsiveness flex flex-col min-h-screen cursor-default hero-text">

        {/* NAVBAR - No animation, moves with container */}
        <nav className="w-full flex justify-between items-center py-6">
          <h1 className="font-bruno text-[20px] font-[800] tracking-[2px]">
            sohj.abe
          </h1>
          <div className="font-kanit font-[400] flex items-center gap-6 text-base tracking-[.6px]">
            <a href="#about" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#works" className="hover:text-blue-400 transition-colors">My Projects</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About Me</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </nav>

        {/* HERO BODY */}
        <div className="flex flex-col md:flex-row flex-1 items-start justify-between gap-12 mt-[25px]">

          {/* PROFILE PIC (3D Hologram) */}
          <motion.div
            initial={{ y: "100vh" }}
            animate={{ y: shouldAnimate ? 0 : "100vh" }}
            transition={{ duration: .8, ease: easeSmooth, delay: 0 }}
            className="relative flex-shrink-0 w-full max-w-[320px] h-[400px] rounded-[5px] overflow-hidden"
          >
            <HologramImage src="/prof-pic.jpg" />
          </motion.div>


          {/* TEXT SIDE */}
          <div className="flex-1 max-w-[600px] text-left mt-2">

            {/* SMOL TEXT */}
            <motion.p
              initial={{ y: "100vh" }}
              animate={{ y: shouldAnimate ? 0 : "100vh" }}
              transition={{ duration: .9, ease: easeSmooth, delay: 0.05 }}
              className="font-kanit text-[19px] tracking-[1px] font-[300] italic"
            >
              Hi, I'm <span>Carlo Joshua B. Abellera</span>, and I enjoy
            </motion.p>

            {/* BIG TEXT */}
            <motion.h2
              initial={{ y: "100vh" }}
              animate={{ y: shouldAnimate ? 0 : "100vh" }}
              transition={{ duration: 1, ease: easeSmooth, delay: 0.1 }}
              className="font-anta text-[58px] font-extrabold leading-tight tracking-tight mt-2"
            >
              <div className="inline-block">
               <span>Building pixel-perfect </span> <br/>
               <span className="gradient-text">Interactive </span>
               <span>Websites </span>

              </div>
            </motion.h2>


            {/* ROLE TEXT */}
            <motion.p
              initial={{ y: "100vh" }}
              animate={{ y: shouldAnimate ? 0 : "100vh" }}
              transition={{ duration: 1.1, ease: easeSmooth, delay: 0.15 }}
              className="font-bruno text-[21px] font-[700] tracking-[1px] mt-12"
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