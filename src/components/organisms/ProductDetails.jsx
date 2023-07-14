import { styled } from "styled-components";
import ProductDetailsContainer from "../molecules/ProductDetailsContainer";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchProductById } from "../../services/apis";
import SkeletonPhoto from "../atoms/SkeletonPhoto";
import SkeletonRating from "../atoms/SkeletonRating";
import SkeletonTitle from "../atoms/SkeletonTitle";
import SkeletonOption from "../atoms/SkeletonOption";
import ProductPhoto from "../atoms/ProductPhoto";
import ProductRating from "../atoms/ProductRating";
import ProductTitle from "../atoms/ProductTitle";

const Container = styled.div`
  width: 100%;
`;

const ProductDetails = () => {
  const productId = useParams();
  const { isLoading, data: product } = useQuery(["product", productId], () =>
    fetchProductById(productId)
  );

  const productDetails = product?.data.response;
  console.log(productDetails);
  return (
    <Container>
      {isLoading ? (
        <ProductDetailsContainer
          photo={<SkeletonPhoto />}
          rating={<SkeletonRating />}
          title={<SkeletonTitle />}
          option={<SkeletonOption />}
        />
      ) : (
        <ProductDetailsContainer
          photo={
            <ProductPhoto
              src={`${process.env.REACT_APP_BASE_URL}${productDetails.image}`}
              alt={productDetails.productName}
            />
          }
          rating={<ProductRating starCount={productDetails.starCount} />}
          title={<ProductTitle>{productDetails.productName}</ProductTitle>}
          option={<div>안녕</div>}
        />
      )}
    </Container>
  );
};

export default ProductDetails;
