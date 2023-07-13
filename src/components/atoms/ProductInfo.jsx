import { styled } from "styled-components";

const Container = styled.div`
  width: 60%;
  height: inherit;
  padding: 50px 0;
`;
const ProductContainer = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
`;
const PhotoContainer = styled.div`
  width: 60%;
`;
const InfoContainer = styled.div`
  flex-basis: 40%;
`;
const Photo = styled.div`
  width: 350px;
  height: 350px;
  margin: 0 auto;
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
const Rating = styled.div`
  width: 150px;
  height: 30px;
  border-radius: 15px;
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
const Title = styled.div`
  width: 280px;
  height: 50px;
  margin: 20px 0;
  border-radius: 25px;
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

const ProductInfo = () => {
  return (
    <Container>
      <ProductContainer>
        <PhotoContainer>
          <Photo />
        </PhotoContainer>
        <InfoContainer>
          <Rating />
          <Title />
        </InfoContainer>
      </ProductContainer>
    </Container>
  );
};

export default ProductInfo;
