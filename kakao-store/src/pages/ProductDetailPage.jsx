import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../store/slices/detailSlice";
import Loader from "../components/atoms/Loader";
import { getProductById } from "../services/product";
import useSWR from "swr";
import { useQuery } from "react-query";

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // const { data, error, isLoading } = useSWR(`/product/${id}`, getProductById);
  const {
    data: detail,
    error,
    isLoading,
  } = useQuery(`product/${id}`, () => getProductById(id)); // 구분자, API 요청 함수 / deatilSlice 필요없음

  // 비동기 함수
  // 50초랑 20초 요청이 있으면 동시에 출발
  // 여러 비동기를 다 받고 처리를 해야한다고 한다면
  // useQueries([]) 사용
  // 단일 비동기는 useQuery 사용

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>product </h1>
      {/* loading state 
      error state */}
      {isLoading && <Loader />}
      {error && <div>{error.message}</div>}
      {detail && <div>{detail.productName}</div>}
    </div>
  );
};

export default ProductDetailPage;
