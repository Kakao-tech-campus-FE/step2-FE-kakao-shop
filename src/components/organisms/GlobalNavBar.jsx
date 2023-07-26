import { styled } from "styled-components";
import NavBar from "../molecules/NavBar";

const StyledHeader = styled.header`
  border-bottom: 1px solid black;
  padding: 0 20px;
  background-color: #fff;

  z-index: 9;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${(props) => props.$height};
`;

// height: 높이에 따라 GNB를 사용
const GlobalNavBar = ({ height }) => {
  return (
    <StyledHeader $height={height}>
      <NavBar />
    </StyledHeader>
  );
};

export default GlobalNavBar;
