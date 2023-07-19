/*eslint-disable react/prop-types */

// Rendering a <div> element that encloses a given child element
import React from "react"; //eslint-disable-line no-unused-vars
import "../../styles/atoms/Box.css";
import styled from "styled-components";
const StyledBox = styled.div`
  border: 1px solid #ddd;
`;

const Box = ({ children, className = "" }) => {
  return <StyledBox className={`box ${className}`}>{children}</StyledBox>;
};

export default Box;
