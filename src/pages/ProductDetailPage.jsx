import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getProductById } from "../services/product";
import Container from "../components/atoms/Container";
import "../styles/molecules/ProductInformationColumn.css";
import ProductDetailTemplate from "../components/templates/ProductDetailTemplate";
import Skeleton from "../components/atoms/Skeleton";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery(`product/${id}`, () =>
    getProductById(id)
  );

  const product = data?.data?.response;

  return (
    <Container>
      {isLoading && <Skeleton />}
      {error && <div>{error.message}</div>}
      {product && <ProductDetailTemplate product={product} />}
    </Container>
  );
};

export default ProductDetailPage;
