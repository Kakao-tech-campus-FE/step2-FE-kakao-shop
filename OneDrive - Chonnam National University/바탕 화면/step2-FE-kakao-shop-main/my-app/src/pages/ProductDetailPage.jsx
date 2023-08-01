import { useParams } from "react-router-dom";
import Loader from "../components/atoms/Loader";
import { useQuery } from "@tanstack/react-query";
import { getProductsById } from "../services/product";
import ProductDetailTemplate from "../components/templates2/ProductDetailTemplate";

const ProductDetailPage = () => {
  const { id } = useParams(); // 언제나 string으로 받아옴
  const { data, error, isError, isLoading } = useQuery([`product/${id}}`], () => getProductsById(id)); // eslint-disable-line no-unused-vars

  const product = data?.data?.response;

  return (
    <div>
      {isLoading && <Loader />}
      {error && <div>{error.message}</div>}
      {product && <ProductDetailTemplate product={product} />}
    </div>
  );
};

export default ProductDetailPage;