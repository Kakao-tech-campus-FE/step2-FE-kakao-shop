import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../store/slices/detailSlice";
import Loader from "../components/atoms/Loader";
import { useQuery } from "react-query";
import { getProductById } from "../services/api/product";

const ProductDetailPage = () => {
  const dispatch = useDispatch();
  // useParams로 파라미터 가져오기 ex: ...URL/user/1에서 user는 pathname, 1은 parameter
  const { id } = useParams(); // 주의! useParams로 받은 값은 항상 string이다. 필요 시 가공하여 사용
  // const parsedId = parseInt(id, 10); // 10진수로 파싱 // 지금은 필요 없음 만약 다른 프로젝트에서 필요하다면 사용

  /* 
  아래의 세줄의 상태 관리 코드를 직후 코드처럼 한 줄로 사용하면 안되나? => 안된다
  왜? 코드는 줄어들지 몰라도 이렇게 하면은 detail이 바뀌면 
  다른 값들도 모두 리프레쉬 되며 렌더링되므로 성능 저하의 원인이 된다.
  const {loading, error, detail} = useSelector((state) => state.detail); 
  */
  /* 그러면 어떻게 해결할 수 있지? => useSWR 또는 react-query 사용하여 해결 */
  // react-query 사용 이전 코드
  // const loading = useSelector((state) => state.detail.loading);
  // const error = useSelector((state) => state.detail.error);
  // const detail = useSelector((state) => state.detail.detail);

  // react-query를 이용한 상태 관리
  const { data, error, isLoading } = useQuery(`procutc/${id}`, () =>
    getProductById(id)
  ); // 구분자, API 요청 함수

  // react-query 사용 이전 코드
  // useEffect(() => {
  //   dispatch(getDetail(id));
  // }, [dispatch, id]);
  return (
    <div>
      {isLoading && <Loader />}
      {error && <div>{error.message}</div>}
      {data && <div>{data.data.response.productName}</div>}
    </div>
  );
};

export default ProductDetailPage;
