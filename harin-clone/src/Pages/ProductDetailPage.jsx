import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../Servicies/product";
import { getDetail } from "../Store/Slices/detailSlice";
import Loader from "../Components/Atoms/Loader";
import { useQuery } from "react-query";


const ProductDetailPage = () => {
  const { id } = useParams().id; //string
  // const parseId = parseInt(id, 10); => 10진수로 number
  const dispatch = useDispatch();
  // const detail = useSelector((state) => state.detail.detail)
  // const loading = useSelector((state) => state.detail.loading)
  // const error = useSelector((state) => state.detail.error)
  const { 
    data: detail, 
    error, 
    isLoading 
  } = useQuery([`product/${id}`], () => getProductById(id)); // 구분자, API 요청 함수
  // 단일 쿼리의 비동기는 useQuery, 복수 비동기 요청 관리는 useQueries

  useEffect(() => {
    dispatch(getDetail(id))
  }, [dispatch, id])

  return (
    <div>
      {isLoading && <Loader />}
      {error && <div>{error.message}</div>}
      {detail && <div>{detail.productName}</div> }
    </div>

  )
}

export default ProductDetailPage;