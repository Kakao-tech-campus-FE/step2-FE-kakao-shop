import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getProductById } from "../services/product";
import Loader from "../components/atoms/Loader";
import SkeletonGrid from "../components/organisms/SkeletonGrid";
import ProductDetailTemplate from "../components/templates/ProductDetailTemplate";
import Gnb from "../components/organisms/Gnb";

const ProductDetailPage = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useQuery("products", () =>
    getProductById(id)
  );

  const product = data?.data?.response;

  return (
    <div>
      <Gnb />
      {isLoading && <SkeletonGrid />}
      {error && <div>{error.message}</div>}
      {product && <ProductDetailTemplate product={product} />}
    </div>
  );
};

export default ProductDetailPage;
