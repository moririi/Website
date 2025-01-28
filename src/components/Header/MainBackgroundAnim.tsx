"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./ScrollingIcon.css";
import ScrollIcon from "./Scroll";
import { AuroraBackground } from "./BackgroundAnim";
import { FlipWords } from "./FlipWord";
import "./BackgroundAnim.css";
const words = [
  "An Aspiring Software Engineer",
  "A Food Lover",
  "A Gym Goer",
  "An Anime Enthusiast",
];

export function AuroraBackgroundDemo() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !hasScrolled) {
        setHasScrolled(true);
      } else if (window.scrollY === 0 && hasScrolled) {
        setTimeout(() => setHasScrolled(false), 500);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: hasScrolled ? 1 : 0.9, y: hasScrolled ? 0 : 10 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-extralight dark:text-white text-center">
          <h1>
            <span style={{ color: "white" }}>Hey! I'm </span>
            <span style={{ color: "mediumorchid" }}>Lorem ipsum</span>
          </h1>
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          <h2>
            <FlipWords words={words} className="text-white" />
          </h2>
        </div>
      </motion.div>
      <ScrollIcon />
    </AuroraBackground>
  );
}
