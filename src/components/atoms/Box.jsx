import React from "react";

const Box = ({
  children,
  className = "", // style 재사용
}) => {
  return (
    <div className={`relative flex flex-col ${className}`}>{children}</div>
  );
};

export default Box;
