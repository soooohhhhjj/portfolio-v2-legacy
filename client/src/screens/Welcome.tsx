// src/screens/Welcome.tsx
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Transition } from "framer-motion";

type WelcomeProps = {
  text: string;
  speed?: number;          // typing speed (ms per character)
  slideDuration?: number;  // duration of slide-up animation
  delayAfterTyping?: number; // delay after typing before slide
  onDone?: () => void;
};

export default function Welcome({
  text,
  speed = 100,
  slideDuration = 1.2,
  delayAfterTyping = 500,
  onDone,
}: WelcomeProps) {
  const [displayed, setDisplayed] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [isSlideTriggered, setIsSlideTriggered] = useState(false);

  const indexRef = useRef(0);
  const timeoutRef = useRef<number | null>(null);

  // Typing effect
  useEffect(() => {
    setDisplayed("");
    setIsTypingDone(false);
    setIsSlideTriggered(false);
    indexRef.current = 0;

    const tick = () => {
      const i = indexRef.current;
      if (i >= text.length) {
        setIsTypingDone(true);
        timeoutRef.current = null;
        return;
      }

      setDisplayed((prev) => prev + text.charAt(i));
      indexRef.current += 1;

      timeoutRef.current = window.setTimeout(tick, speed);
    };

    timeoutRef.current = window.setTimeout(tick, speed);

    return () => {
      if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
    };
  }, [text, speed]);

  // Trigger slide after typing + optional delay
  useEffect(() => {
    if (isTypingDone) {
      const timer = setTimeout(() => setIsSlideTriggered(true), delayAfterTyping);
      return () => clearTimeout(timer);
    }
  }, [isTypingDone, delayAfterTyping]);

  // Trigger parent callback after slide
  useEffect(() => {
    if (isSlideTriggered && onDone) {
      const timer = setTimeout(onDone, slideDuration * 1000); // convert seconds to ms
      return () => clearTimeout(timer);
    }
  }, [isSlideTriggered, slideDuration, onDone]);

  const transition: Transition = { duration: slideDuration, ease: "easeInOut" };

  return (
    <AnimatePresence>
      {!isSlideTriggered && (
        <motion.section
          className="section-style"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100vh" }}
          transition={transition}
        >
          <div className="section-content center-div responsiveness text-center">
            <span className="font-jura text-[35px] tracking-[.09rem] font-[600] text-white">
              {displayed}
              <span className={`caret ${isTypingDone ? "blink" : ""}`} />
            </span>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
