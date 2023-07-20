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

const ProductInfoContainer = ({ photo, rating, title }) => {
  return (
    <Container>
      <ProductContainer>
        <PhotoContainer>{photo}</PhotoContainer>
        <InfoContainer>
          {rating}
          {title}
        </InfoContainer>
      </ProductContainer>
    </Container>
  );
};

export default ProductInfoContainer;
