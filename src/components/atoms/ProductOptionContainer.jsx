import { styled } from "styled-components";

const Container = styled.div`
  width: 40%;
  height: inherit;
  padding: 50px 0;
`;

const OptionContainer = styled.div`
  width: 100%;
  border-left: 1px solid #bbb;
`;

const ProductOptionContainer = ({ option }) => {
  return (
    <Container>
      <OptionContainer>{option}</OptionContainer>
    </Container>
  );
};

export default ProductOptionContainer;
