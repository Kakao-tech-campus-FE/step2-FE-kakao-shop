import { styled } from "styled-components";

const StyledH1 = styled.h1`
  width: 280px;
  margin: 20px 0;
  font-size: 26px;
`;

const ProductTitle = ({ children }) => {
  return <StyledH1>{children}</StyledH1>;
};

export default ProductTitle;
