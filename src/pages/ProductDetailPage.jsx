import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../components/atoms/Loader";
import { useQuery } from "react-query";
import { getProductsById } from "../services/product";
import Photo from "../components/atoms/Photo";
import ProductCard from "../components/molecules/ProductCard";

const ProductDetailPage = () => {
  const { id } = useParams(); // 언제나 string으로 받아옴
  const dispatch = useDispatch();
  const { data, error, isError, isLoading } = useQuery(`product/${id}}`, () =>
    getProductsById(id)
  );
  return (
    <div>
      {isLoading && <Loader />}
      
      {error && <div>{error.message}</div>}
      {data && <ProductCard product={data.data.response} />}
      {data && <div>{data.data.response.productName}</div>}
      {data && <div>{data.data.response.price}</div>}
      {data && <div>평점: {data.data.response.starCount}점</div>}
    </div>
  );
};

export default ProductDetailPage;
