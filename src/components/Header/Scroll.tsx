import "./ScrollingIcon.css";
import React, { useState, useEffect } from "react";

const ScrollIcon: React.FC = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 100; // Adjust this value to control fade speed
      const newOpacity = Math.max(1 - scrollY / maxScroll, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="scrolldown"
      style={{ opacity, transition: "opacity 0.3s ease-out" }}
    >
      <div className="chevrons self-center">
        <div className="chevrondown"></div>
        <div className="chevrondown"></div>
      </div>
    </div>
  );
};

export default ScrollIcon;
