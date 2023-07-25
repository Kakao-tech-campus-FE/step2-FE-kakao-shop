import React from "react";

const Container = ({ children, type, className }) => {
  return (
    <div
      className={
        type === "form"
          ? "mx-auto mt-10 flex max-w-[530px] flex-col border border-[rgba(0,0,0,.12)] px-[70px] py-[55px]"
          : `mx-auto max-w-[1280px] lg:px-5 ${className}`
      }
    >
      {children}
    </div>
  );
};

export default Container;
