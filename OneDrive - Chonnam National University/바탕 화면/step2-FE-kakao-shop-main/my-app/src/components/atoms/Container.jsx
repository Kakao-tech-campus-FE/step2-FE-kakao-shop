import React from "react"; // eslint-disable-line no-unused-vars
import "../../styles/atoms/Container.css";

const Container = ({ className = "", children }) => {
  return <div className={`${className}`}>{children}</div>;
};
export default Container;