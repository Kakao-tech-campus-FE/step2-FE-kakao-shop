import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../components/atoms/Loader";
import { getProductById } from "../services/product";
import { getDetail } from "../store/slices/detailSlice";
import { useQuery } from "react-query";
import ProductDetailTemplate from "../components/oTemplates/ProductDetailTemplate";

const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); //string
  const { data, error, isLoading } = useQuery(`product/${id}`, () =>
    getProductById(id)
  ); // 구분자, API 요청 함수

  // useEffect(() => {
  //   dispatch(getDetail(id));
  // }, [dispatch, id]);

  const product = data?.data?.response; // null, undefined

  return (
    <div>
      {isLoading && <Loader />}
      {error && <div>{error.message}</div>}
      {product && <ProductDetailTemplate product={product} />}
    </div>
  );
};

export default ProductDetailPage;
