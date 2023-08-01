import React from "react";

const Box = ({ className = "", children }) => {
  return <div className={`box ${className}`}>{children}</div>;
};

export default Box;
