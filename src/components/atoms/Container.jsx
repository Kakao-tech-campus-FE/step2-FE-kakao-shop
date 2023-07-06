import React from "react";

const Container = ({ children }) => {
  return (
    <div className="mx-auto mt-20 flex max-w-xl flex-col p-5">{children}</div>
  );
};

export default Container;
