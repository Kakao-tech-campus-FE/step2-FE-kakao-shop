import { styled } from "styled-components";

const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Inner2 = ({ children }) => {
  return <Box>{children}</Box>;
};

export default Inner2;
