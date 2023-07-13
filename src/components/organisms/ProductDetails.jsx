import { styled } from "styled-components";
import ProductDetailsLoader from "../molecules/ProductDetailsLoader";

const Container = styled.div`
  width: 100%;
`;

const ProductDetails = () => {
  return (
    <Container>
      <ProductDetailsLoader />
    </Container>
  );
};

export default ProductDetails;
