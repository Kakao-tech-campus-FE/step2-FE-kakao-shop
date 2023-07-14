import { styled } from "styled-components";
import ProductInfoContainer from "../atoms/ProductInfoContainer";
import ProductOptionContainer from "../atoms/ProductOptionContainer";

const Container = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  align-items: center;
`;

const ProductDetailsContainer = ({ photo, rating, title, option }) => {
  return (
    <Container>
      <ProductInfoContainer photo={photo} rating={rating} title={title} />
      <ProductOptionContainer option={option} />
    </Container>
  );
};

export default ProductDetailsContainer;
