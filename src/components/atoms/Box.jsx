import React from "react";
import "../../styles/atoms/Box.css";

const Box = ({ className="", children }) => {
  return <div className={`box ${className}`}>{children}</div>;
};

export default Box;
