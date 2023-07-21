import "../../styles/atoms/Box.css";
import styled from "styled-components";
// children: Box에 감싸진 자식 요소
// className: style 적용을 위한 부분
const StyledBox = styled.div`
  border: 1px solid #ddd;
`;

const Box = ({ children, className = "" }) => {
  return <div className={`box ${className}`}>{children}</div>;
};

export default Box;
