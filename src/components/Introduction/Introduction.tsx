"use client";
import React, { useEffect, useRef } from "react";
import "./Introduction.css";

export const AboutMe: React.FC = () => {
  // ✅ Define Tech Stack Icons
  const techStackTop = [
    { name: "HTML", logo: "/icons/html.svg" },
    { name: "CSS", logo: "/icons/css.svg" },
    { name: "JavaScript", logo: "/icons/javascript.svg" },
    { name: "TypeScript", logo: "/icons/typescript.svg" },
    { name: "Python", logo: "/icons/python.svg" },
    { name: "Java", logo: "/icons/java.svg" },
  ];

  const techStackBottom = [
    { name: "React", logo: "/icons/react.svg" },
    { name: "Next.js", logo: "/icons/nextjs.svg" },
    { name: "Node.js", logo: "/icons/nodejs.svg" },
    { name: "Tailwind", logo: "/icons/tailwind.svg" },
    { name: "SASS", logo: "/icons/sass.svg" },
    { name: "MySQL", logo: "/icons/mysql.svg" },
  ];

  // ✅ Refs for cloning
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  // ✅ Function to Clone Elements for Seamless Loop
  useEffect(() => {
    const cloneItems = (container: HTMLDivElement | null) => {
      if (!container) return;
      const items = Array.from(container.children);
      const containerWidth = container.scrollWidth;

      while (container.scrollWidth < window.innerWidth * 2) {
        items.forEach((item) => {
          const clone = item.cloneNode(true) as HTMLElement;
          container.appendChild(clone);
        });
      }
    };

    cloneItems(topRowRef.current);
    cloneItems(bottomRowRef.current);
  }, []);

  return (
    <div className="about-me-container">
      {/* About Me Section */}
      <h1 style={{ fontFamily: "Courgette, cursive", color: "mediumorchid" }} className="about-me-title">
        About Me
      </h1>
      <div className="about-me-content">
        <img src="/me2.jpg" className="about-me-image" alt="Profile" />
        <p className="about-me-text font-extralight text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* ✅ Seamless Tech Stack Carousel (TWO ROWS) */}
      <div className="mt-16 w-full flex flex-col items-center gap-6 overflow-hidden">
        {/* Top Row */}
        <div className="carousel-wrapper">
          <div className="carousel-track animate-marquee" ref={topRowRef}>
            {techStackTop.map((tech, index) => (
              <div key={index} className="carousel-item">
                <img src={tech.logo} alt={tech.name} className="w-12 h-12 object-contain" />
                <span className="text-lg font-medium text-white">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row (Reverse Direction) */}
        <div className="carousel-wrapper">
          <div className="carousel-track animate-marquee-reverse" ref={bottomRowRef}>
            {techStackBottom.map((tech, index) => (
              <div key={index} className="carousel-item">
                <img src={tech.logo} alt={tech.name} className="w-12 h-12 object-contain" />
                <span className="text-lg font-medium text-white">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
