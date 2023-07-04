import React from "react";
import "../../styles/atoms/Container.css"

const Container = ({ className="", children }) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
