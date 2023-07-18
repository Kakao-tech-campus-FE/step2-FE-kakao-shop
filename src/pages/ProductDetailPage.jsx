import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetail } from "../store/slices/detailSlice";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import Loader from "../components/atoms/Loader";
import ProductCard from "../components/molecules/ProductCard";
import { getProductById } from "../services/product";
import ProductDetailTemplate from "../components/templates/ProductDetailTemplate";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery(`product/${id}}`, () =>
    getProductById(id)
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
