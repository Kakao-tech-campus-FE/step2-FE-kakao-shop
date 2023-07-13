import { styled } from "styled-components";
import NavBar from "../molecules/NavBar";

const StyledHeader = styled.header`
  border-bottom: 1px solid black;
  background-color: #fff;
  height: 80px;
  z-index: 9;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GlobalNavBar = () => {
  return (
    <StyledHeader>
      <NavBar />
    </StyledHeader>
  );
};

export default GlobalNavBar;
