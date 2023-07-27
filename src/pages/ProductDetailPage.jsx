import { useParams } from "react-router-dom";
import Loader from "../components/atoms/Loader";
import { useQuery } from "@tanstack/react-query";
import { getProductsById } from "../services/product";
import ProductDetailTemplate from "../components/templates/ProductDetailTemplate";
import MainProductTemplate from "../components/templates/MainProductTemplate";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data, error, isError, isLoading } = useQuery([`product/${id}}`], () =>
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
      
      <div>이런 상품 어때요?</div>
      <MainProductTemplate />
    </>
  );
};

export default ProductDetailPage;
