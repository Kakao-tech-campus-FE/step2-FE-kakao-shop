import { styled } from "styled-components";

const Box = styled.div`
  border-radius: 10px;
  box-shadow: 5px 5px 10px #babebc;
  position: absolute;
  width: 768px;
  min-height: 540px;
  overflow: hidden;
`;

const Container = ({ children }) => {
  return <Box>{children}</Box>;
};

export default Container;
