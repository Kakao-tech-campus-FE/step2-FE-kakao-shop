import { styled } from "styled-components";
import ProductInfo from "../atoms/ProductInfo";
import ProductOption from "../atoms/ProductOption";

const Container = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  align-items: center;
`;

const ProductDetailsLoader = () => {
  return (
    <Container>
      <ProductInfo />
      <ProductOption />
    </Container>
  );
};

export default ProductDetailsLoader;
