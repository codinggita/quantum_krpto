import React from "react";
import "./Glowball.css";

const Glowball = ({ color, position }) => {
  const containerClass =
    position === "right"
      ? "glowball-container-right"
      : "glowball-container-left";

  return (
    <div className={containerClass}>
      <div className="glowball" style={{ background: color }}></div>
    </div>
  );
};

export default Glowball;
