import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../components/atoms/Loader";
import { useQuery } from "react-query";
import { getProductsById } from "../services/product";
import Photo from "../components/atoms/Photo";
import ProductCard from "../components/molecules/ProductCard";
import ProductDetailTemplate from "../components/templates/ProductDetailTemplate";

const ProductDetailPage = () => {
  const { id } = useParams(); // 언제나 string으로 받아옴
  const { data, error, isError, isLoading } = useQuery(`product/${id}}`, () =>
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
