import React from "react"; // eslint-disable-line no-unused-vars
import "../../styles/atoms/Box.css";
// import styled from "styled-components";

// const StyledBox = styled.div`
//   border: 1px solid #ddd;
// `;

// const StyledAnchorBox = styled(AnchorBox)`
//   color: red;
// `

// props
// className: CSS 스타일 적용 시 활용할 클래스 이름
// children: Box 안에 들어갈 내용
const Box = ({ className = "", children }) => {
  return <div className={`box ${className}`}>{children}</div>;
};

export default Box;