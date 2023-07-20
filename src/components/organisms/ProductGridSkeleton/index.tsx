import ProductCardSkeleton from "@components/molecules/ProductCardSkeleton";
import { styled } from "styled-components";

const ProductGridSkeleton = () => {
  return (
    <Wrapper>
      {new Array(9).fill("").map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </Wrapper>
  );
};

export default ProductGridSkeleton;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
