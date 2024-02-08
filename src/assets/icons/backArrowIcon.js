import React from "react";

const BackArrowIcon = ({
  width,
  height,
  top,
  left,
  color,
}) => {
  const svgStyle = {
    width,
    height,
    top,
    left,
    color,
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={svgStyle}
      stroke="#64648C"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
};

export default BackArrowIcon;
