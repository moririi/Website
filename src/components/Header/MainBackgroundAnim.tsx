"use client";
import { motion } from "framer-motion";
// import React from "react";
import { AuroraBackground } from "./BackgroundAnim";
import { FlipWords } from "./FlipWord";
const words = ["An Aspiring Software Engineer", "A Food Lover", "A Gym Goer", "An Anime Enthusiast"];
import "./ScrollingIcon.css";
 
export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
        <h1> 
            <span style={{ color: 'white' }}>Hey! I'm </span>
            <span style={{ color: 'mediumorchid' }}>Shinji Morikage</span></h1>
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
         <h2>
             <FlipWords words={words} className="text-white" />
            </h2>
        </div>
        
      </motion.div>
    <div className="scrolldown">
      <div className="chevrons">
        <div className="chevrondown"></div>
        <div className="chevrondown"></div>
      </div>
    </div>
    </AuroraBackground>

  );
}