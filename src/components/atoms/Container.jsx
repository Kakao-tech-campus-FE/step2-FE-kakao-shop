import React from "react";

const Container = ({ children }) => {
  return (
    <div className="mx-auto mt-10 flex max-w-[530px] flex-col border border-[rgba(0,0,0,.12)] px-[70px] py-[55px]">
      {children}
    </div>
  );
};

export default Container;
