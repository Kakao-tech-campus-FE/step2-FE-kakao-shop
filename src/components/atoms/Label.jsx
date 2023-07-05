import React from "react";

const Label = ({ htmlFor, children }) => {
  return (
    <label className="text-gray-600" htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
