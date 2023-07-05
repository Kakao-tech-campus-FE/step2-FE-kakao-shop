/*eslint-disable react/prop-types */
import React from "react"; //eslint-disable-line no-unused-vars
import "../../styles/atoms/Container.css";
const Container = ({ children, className = "" }) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
