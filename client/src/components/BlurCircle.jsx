import React from "react";

const BlurCircle = ({
  top = "auto",
  left = "auto",
  right = "auto",
  bottom = "auto",
}) => {
  return (
    <div
      className="absolute z-[-1] rounded-full blur-3xl opacity-40 pointer-events-none"
      style={{
        top,
        left,
        right,
        bottom,
        height: "300px",
        width: "300px",
        background: "#b91c1c",
      }}
    />
  );
};

export default BlurCircle;
