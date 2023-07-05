import { styled } from "styled-components";

const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Wrapper = ({ children }) => {
  return <Box>{children}</Box>;
};

export default Wrapper;
