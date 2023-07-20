import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../store/slices/detailSlice";
import Loader from "../components/atoms/Loader";
import { getProductById } from "../services/product";
import { useQuery } from "react-query";

const ProductDetailPage = () => {
  const { id } = useParams(); // string으로 가져옴
  const dispatch = useDispatch();
  // react-query 사용
  // 단일 비동기 -> useQuery(), 여러개 비동기 -> useQueries([])
  const {
    data: detail,
    error,
    isLoading,
  } = useQuery(`product/${id}`, () => getProductById(id));

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <div>{error.message}</div>}
      {detail && <div>{detail.productName}</div>}
    </div>
  );
};

export default ProductDetailPage;
