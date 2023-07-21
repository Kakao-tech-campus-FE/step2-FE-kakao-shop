import "../../styles/atoms/Box.css";
import styled from "styled-components";

const StyledBox = styled.div`
  border: 1px solid #ddd;
`;

// children = Box 안에 들어갈 컴포넌트들, className = 클래스이름(디폴트 = "")
const Box = ({ children, className = "" }) => {
  return <StyledBox className={`box ${className}`}>{children}</StyledBox>;
};

export default Box;
