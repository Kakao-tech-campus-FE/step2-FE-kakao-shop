import React from "react";

const Box = ({ children, className }) => {
  return <div className={`flex flex-col ${className}`}>{children}</div>;
};

export default Box;
