import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/atoms/Loader";
import { getProductById } from "../services/product";
import ProductDetailTemplate from "../components/templates/ProductDetailTemplate";
import { Suspense, useEffect } from "react";

const ProductDetailPage = () => {
  const { id } = useParams();
  const route = useNavigate();

  const { data, error, isLoading } = useQuery(`product/${id}`, () =>
    getProductById(id)
  );

  const product = data?.data?.response;

  useEffect(() => {
    if (!id || error) {
      route("/error");
    }
  }, [id, error, route]);

  return (
    <div className="pt-40">
      <Suspense fallback={<Loader />}>
        {isLoading && <Loader />}
        {error && <div>{error.message}</div>}
        {product && <ProductDetailTemplate product={product} />}
      </Suspense>
    </div>
  );
};

export default ProductDetailPage;
