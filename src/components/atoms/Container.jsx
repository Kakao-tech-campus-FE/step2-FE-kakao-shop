import styled from "styled-components";
const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;

const StyledContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40%;
  padding: 2.5rem;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
`;
