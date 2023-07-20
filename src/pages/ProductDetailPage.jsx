import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loader from "../components/atoms/Loader";
import { getProductById } from "../services/product";
import ProductDetailTemplate from "../components/templates/ProductDetailTemplate";
import ErrorPage from "./ErrorPage";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery(`product/${id}}`, () =>
    getProductById(id)
  );

  const product = data?.data?.response;

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorPage />}
      {product && <ProductDetailTemplate product={product} />}
    </div>
  );
};

export default ProductDetailPage;
