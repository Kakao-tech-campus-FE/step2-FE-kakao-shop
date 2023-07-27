import { useParams } from "react-router-dom";
import Loader from "../components/atoms/Loader";
import { useQuery } from "@tanstack/react-query";
import { getProductsById } from "../services/product";
import ProductDetailTemplate from "../components/templates/ProductDetailTemplate";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data, error, isError, isLoading } = useQuery([`product/${id}}`], () =>
    getProductsById(id)
  );

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
