import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/product";
import Loader from "../components/atoms/Loader";
import ProductDetailTemplate from "../components/templates/ProductDetailTemplate";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery(`products/${id}`, () =>
    getProduct(id)
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
