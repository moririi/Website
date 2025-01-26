import "./ScrollingIcon.css";
import React, { useState, useEffect } from "react";

const ScrollIcon: React.FC = () => {
  const [showIcon, setShowIcon] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowIcon(false); // Hide icon after scrolling down
      } else {
        setShowIcon(true); // Show icon when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    showIcon && (
      <div className="scrolldown">
        <div className="chevrons">
          <div className="chevrondown"></div>
          <div className="chevrondown"></div>
        </div>
      </div>
    )
  );
};

export default ScrollIcon;
