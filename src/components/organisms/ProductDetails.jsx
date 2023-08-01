import { styled } from "styled-components";
import ProductDetailsContainer from "../molecules/ProductDetailsContainer";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchProductById } from "../../services/apis";
import SkeletonPhoto from "../atoms/SkeletonPhoto";
import SkeletonRating from "../atoms/SkeletonRating";
import SkeletonTitle from "../atoms/SkeletonTitle";
import SkeletonOption from "../atoms/SkeletonOption";
import ProductPhoto from "../atoms/ProductPhoto";
import ProductRating from "../atoms/ProductRating";
import ProductTitle from "../atoms/ProductTitle";
import ProductOption from "../atoms/ProductOption";

const Container = styled.div`
  width: 100%;
`;

const ProductDetails = () => {
  const productId = useParams();
  const navigate = useNavigate();
  const {
    isLoading,
    data: product,
    refetch,
  } = useQuery(["product", productId], () => fetchProductById(productId), {
    onError: (error) => {
      // 상품을 찾을 수 없는 경우: 사용자에게 alert로 문제를 알리고, 홈 화면으로 리다이렉트
      if (error.response.status === 404) {
        alert("선택한 상품을 찾을 수 없습니다.");
        navigate("/");
        return;
      }
      // 사용자에게 alert로 문제를 알리고, refetch를 통해 계속 페칭
      alert("네트워크 연결이 원활하지 않습니다. 네트워크 상태를 확인해주세요.");
      refetch();
    },
  });

  const productDetails = product?.data.response;

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
          option={<ProductOption options={productDetails.options} />}
        />
      )}
    </Container>
  );
};

export default ProductDetails;
