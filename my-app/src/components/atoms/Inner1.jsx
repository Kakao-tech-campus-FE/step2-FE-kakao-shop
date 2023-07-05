import { styled } from "styled-components";

const Box = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Inner1 = ({ children }) => {
  return <Box>{children}</Box>;
};

export default Inner1;
