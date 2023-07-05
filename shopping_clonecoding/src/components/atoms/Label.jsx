/*eslint-disable react/prop-types */
import React from "react"; //eslint-disable-line no-unused-vars

const Label = ({ htmlFor, children, className }) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
};

export default Label;
