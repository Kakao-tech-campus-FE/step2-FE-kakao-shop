import { styled } from "styled-components";

const Container = styled.div`
  width: 40%;
  height: inherit;
  padding: 50px 0;
`;

const OptionContainer = styled.div`
  width: 100%;
  height: 700px;
`;
const Options = styled.div`
  width: 400px;
  margin: 0 auto;
  height: 600px;
  border-radius: 10px;
  background-color: rgba(165, 165, 165, 0.2);
  animation: skeleton-gradient 2s infinite ease-in-out;

  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.2);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.4);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.2);
    }
  }
`;

const ProductOption = () => {
  return (
    <Container>
      <OptionContainer>
        <Options />
      </OptionContainer>
    </Container>
  );
};

export default ProductOption;
