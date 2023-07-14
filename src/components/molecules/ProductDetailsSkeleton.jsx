import { styled } from "styled-components";
import ProductInfoContainer from "../atoms/ProductInfoContainer";
import ProductOptionContainer from "../atoms/ProductOptionContainer";
import SkeletonPhoto from "../atoms/SkeletonPhoto";
import SkeletonRating from "../atoms/SkeletonRating";
import SkeletonTitle from "../atoms/SkeletonTitle";
import SkeletonOption from "../atoms/SkeletonOption";

const Container = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  align-items: center;
`;

const ProductDetailsSkeleton = () => {
  return (
    <Container>
      <ProductInfoContainer
        photo={<SkeletonPhoto />}
        rating={<SkeletonRating />}
        title={<SkeletonTitle />}
      />
      <ProductOptionContainer option={<SkeletonOption />} />
    </Container>
  );
};

export default ProductDetailsSkeleton;
