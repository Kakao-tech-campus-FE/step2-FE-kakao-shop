import { styled } from "styled-components";

const Box = styled.div`
  color: red;
  font-size: 14px;
`;

const Error = ({ children }) => {
  return <Box>{children}</Box>;
};

export default Error;
