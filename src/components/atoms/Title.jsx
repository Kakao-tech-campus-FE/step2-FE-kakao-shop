import { styled } from "styled-components";

const StyledH1 = styled.h1`
  margin-bottom: 16px;
  text-align: center;
  font-size: 40px;
`;

const Title = ({ children }) => {
  return <StyledH1>{children}</StyledH1>;
};

export default Title;
