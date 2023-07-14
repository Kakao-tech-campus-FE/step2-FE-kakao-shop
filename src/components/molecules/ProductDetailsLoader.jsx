import { styled } from "styled-components";
import ProductInfo from "../atoms/ProductInfo";
import ProductOption from "../atoms/ProductOption";
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

const ProductDetailsLoader = () => {
  return (
    <Container>
      <ProductInfo
        photo={<SkeletonPhoto />}
        rating={<SkeletonRating />}
        title={<SkeletonTitle />}
      />
      <ProductOption option={<SkeletonOption />} />
    </Container>
  );
};

export default ProductDetailsLoader;
