import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../components/atoms/Loader";
import { getProductById } from "../services/product";
import { useQuery } from "react-query";

//Maybe next week hw

const ProductDetailPage = () => {
  const { id } = useParams(); //string
  const dispatch = useDispatch();
  const {
    data: detail,
    error,
    isLoading,
  } = useQuery(`product/${id}`, () => getProductById(id)); // 구분자, API 요청 함수,, 50초가 걸리는 요청
  // useQuery 따로따로 관리하는 단일 비동기 요청
  // useQueries([]); 복수의 비동기 요청을 한 번에 관리

  //useQuery('some api', ()=> fetch('some api')); //20초 걸리는 요청

  // 여러 비동기를 다 받고 처리를 해야한다고 한다면
  //비동기 함수

  //const { data, error, isLoading } = useSWR(`/product/${id}`, getProductById); ->swr
  // react-query, useSWR

  // 의도

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
