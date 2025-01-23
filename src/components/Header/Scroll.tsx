import React from "react";
import "./Scroll.css";
const Scroll: React.FC = () => {
  return (
    <div
      className="scrolldown"
      style={{ "--color": "skyblue" } as React.CSSProperties}
    >
      <div className="chevrons">
        <div className="chevrondown"></div>
        <div className="chevrondown"></div>
      </div>
    </div>
  );
};
export default Scroll;
