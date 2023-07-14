import { styled } from "styled-components";
import ProductDetailsSkeleton from "../molecules/ProductDetailsSkeleton";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchProductById } from "../../services/apis";

const Container = styled.div`
  width: 100%;
`;

const ProductDetails = () => {
  const productId = useParams();
  const { isLoading, data: product } = useQuery(["product", productId], () =>
    fetchProductById(productId)
  );

  console.log(product);
  return (
    <Container>
      {isLoading ? <ProductDetailsSkeleton /> : <div>하이!</div>}
    </Container>
  );
};

export default ProductDetails;
