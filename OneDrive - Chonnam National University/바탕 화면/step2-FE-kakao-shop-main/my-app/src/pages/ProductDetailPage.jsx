import { useParams } from "react-router-dom";
import Loader from "../components/atoms/Loader";
import { useQuery } from "@tanstack/react-query";
import { getProductsById } from "../services/product";
import ProductDetailTemplate from "../components/templates2/ProductDetailTemplate";
import MainProductTemplate from "../components/templates2/MainProductTemplate";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery([`product/${id}}`], () =>
    getProductsById(id)
  );

  const product = data?.data?.response;

  return (
    <>
      <div className="my-8">
        {isLoading && <Loader />}
        {error && <div>{error.message}</div>}
        {product && <ProductDetailTemplate product={product} />}
      </div>

      <div className="text-2xl font-bold m-4">
        <span className="text-blue-500">이런 상품</span>
        <span>은 어때요?</span>
      </div>
      <MainProductTemplate />
    </>
  );
};

export default ProductDetailPage;