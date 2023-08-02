import { useParams } from "react-router-dom";
import Loader from "../components/atoms/Loader";
import { useQuery } from "react-query";
import { getProductById } from "../services/api/product";
import ProductDetailTemplate from "../components/templates/ProductDetailTemplate";
import ErrorTypo from "../components/atoms/ErrorTypo";

const ProductDetailPage = () => {
  // const dispatch = useDispatch(); // react-query 사용으로 disable
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
  const { data, error, isLoading } = useQuery(`product/${id}`, () =>
    getProductById(id)
  ); // 구분자, API 요청 함수

  // react-query 사용 이전 코드
  // useEffect(() => {
  //   dispatch(getDetail(id));
  // }, [dispatch, id]);

  // props drilling을 방지하기 위해 redux를 이용하거나 context api를 이용하여 관리하는 것이 좋다.(product)

  const product = data?.data?.response;
  // product에 우리가 원하는 데이터가 정확히 존재하는지 검증할 필요가 있다.
  // 1. Typescript로 interface, type 지정하여 이용
  // 2. 검증 함수: data가 정확이 들어왔는지 체크, validate function

  const validate = () => {
    if (!product) {
      return false;
    }
    const requiredKeys = ["id", "productName"];
    const keys = Object.keys(product); // Object의 프로로타입 메소드인 keys를 이용하여 product의 Key들을 배열로 받음
    for (let i = 0; i < requiredKeys.length; i++) {
      const requiredKey = requiredKeys[i];
      if (!keys.includes(requiredKey)) {
        alert(`product 객체에 ${requiredKeys}가 존재하지 않습니다.`);
        return false;
      }
    }
    return true;
  };

  if (isLoading) return <Loader />;
  else if (error) return <ErrorTypo />;
  else if (validate() === false) return <ErrorTypo />;
  else return <ProductDetailTemplate product={product} />;
};

export default ProductDetailPage;
