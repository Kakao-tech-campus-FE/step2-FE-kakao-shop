/*eslint-disable react/prop-types */

//Set label components with class, htmlfor, content

import React from "react"; //eslint-disable-line no-unused-vars
import "../../styles/atoms/Label.css";
const Label = ({ htmlFor, children, className }) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
};

export default Label;
