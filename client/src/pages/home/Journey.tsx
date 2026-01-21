// src/pages/home/Journey.tsx
import { motion } from "framer-motion";
import type { Easing } from "framer-motion";
import { GraduationCap, LaptopMinimalCheck, Layers, BugOff } from "lucide-react";
import "../../components/Journey/Journey.css";
import "../../components/Hero/hero.css";
import type { JSX } from "react";

const easeSmooth: Easing = [0.12, 0.7, 0.63, 0.9];

interface Props {
  shouldShow: boolean;
}

interface JourneyItem {
  date: string;
  title: string;
  description: string;
  icon: JSX.Element;
}

const journeyData: JourneyItem[] = [
  { date: "2019", title: "Started College", description: "Began my IT journey in BSIT.", icon: <GraduationCap className="text-white w-6 h-6" /> },
  { date: "2020", title: "First Internship", description: "Assisted in developing internal tools.", icon: <LaptopMinimalCheck className="text-white w-6 h-6" /> },
  { date: "2021", title: "Certificate: HTML & CSS", description: "Completed web fundamentals certificate.", icon: <Layers className="text-white w-6 h-6" /> },
  { date: "2021", title: "Student Club Leader", description: "Managed tech projects and workshops.", icon: <BugOff className="text-white w-6 h-6" /> },
  { date: "2022", title: "Mini Project: Todo App", description: "Built a React-based todo app.", icon: <LaptopMinimalCheck className="text-white w-6 h-6" /> },
  { date: "2022", title: "Hackathon Participant", description: "Participated in a 24-hour coding hackathon.", icon: <Layers className="text-white w-6 h-6" /> },
  { date: "2023", title: "BSIT Graduate", description: "Completed my Bachelor of Science in IT.", icon: <GraduationCap className="text-white w-6 h-6" /> },
  { date: "2023", title: "IT Intern Experience", description: "Worked on bug fixes and internal tools.", icon: <LaptopMinimalCheck className="text-white w-6 h-6" /> },
  { date: "2024", title: "Capstone Project", description: "Contributed to planning and bug fixing.", icon: <Layers className="text-white w-6 h-6" /> },
  { date: "2024", title: "Thesis Project", description: "Led system architecture development.", icon: <BugOff className="text-white w-6 h-6" /> },
];

export default function Journey({ shouldShow }: Props) {
  return (
    <motion.section
      initial={{ y: "100vh" }}
      animate={{ y: shouldShow ? 0 : "100vh" }}
      transition={{ duration: 1, ease: easeSmooth, delay: 0.4 }}
      className={`section-style relative flex flex-col ${
        shouldShow ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Fade-in buffer */}
      <div className="h-52 w-full bg-gradient-to-b from-transparent via-black/40 to-[#0b0b0fc9]" />

      {/* Content area */}
      <div className="section-content min-h-[100vh] bg-[#0b0b0fc9] flex flex-col relative z-10">
        <div className="text-center mt-[90px]">
          <h1 className="font-bruno text-[41px] font-[700] tracking-[2px] text-white journey-header">
            My Journey
          </h1>
          <p className="mt-4 text-[16px] text-white tracking-[.3px] font-jura max-w-xl mx-auto journey-subheader">
            A timeline of my growth, learning process, and projects over the years.
          </p>
        </div>

        {/* Timeline container */}
        <div className="mt-16 flex flex-col items-center relative">
          {/* Vertical line height dynamically based on number of items */}
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white/30 rounded w-1"
            style={{ height: `${journeyData.length * 140}px` }}
          />

          {/* Timeline items */}
          {journeyData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeSmooth, delay: index * 0.2 }}
              className="flex flex-col md:flex-row items-center mb-16 w-full max-w-4xl"
            >
              {index % 2 === 0 ? (
                <>
                  {/* Left content */}
                  <div className="md:w-1/2 px-4 md:text-right md:pr-8">
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                    <span className="text-gray-400 text-sm">{item.date}</span>
                    <p className="text-white mt-2">{item.description}</p>
                  </div>

                  {/* Center icon */}
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center z-10 -mt-4 md:mt-0">
                    {item.icon}
                  </div>

                  {/* Right empty */}
                  <div className="md:w-1/2"></div>
                </>
              ) : (
                <>
                  {/* Left empty */}
                  <div className="md:w-1/2"></div>

                  {/* Center icon */}
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center z-10 -mt-4 md:mt-0">
                    {item.icon}
                  </div>

                  {/* Right content */}
                  <div className="md:w-1/2 px-4 md:text-left md:pl-8">
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                    <span className="text-gray-400 text-sm">{item.date}</span>
                    <p className="text-white mt-2">{item.description}</p>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
