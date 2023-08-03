import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Container from "../components/atoms/Container";
import ProductDetailTemplate from "../components/templates/ProductDetailTemplate";
import { getProductById } from "../apis/product";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data, error } = useQuery(
    [`product/${id}`],
    () => getProductById(id),
    { suspense: true }
  );

  const product = data?.data.response;

  return (
    <Container>
      {error && <div>{error.message}</div>}
      {product && <ProductDetailTemplate product={product} />}
    </Container>
  );
};

export default ProductDetailPage;
