import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Container from "../components/atoms/Container";
import Loader from "../components/atoms/Loader";
import ProductDetailTemplate from "../components/templates/ProductDetailTemplate";
import { getProductById } from "../apis/product";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery([`product/${id}`], () =>
    getProductById(id)
  );

  const product = data?.data?.response;

  return (
    <Container>
      {isLoading && <Loader />}
      {error && <div>{error.message}</div>}
      {product && <ProductDetailTemplate product={product} />}
    </Container>
  );
};

export default ProductDetailPage;
