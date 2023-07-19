import { useParams } from "react-router-dom";
import { getProductById } from "../components/services/product";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/atoms/Loader";
import ProductDetailTemplate from "../components/templates/ProductDetailTemplate";

const ProductDetailPage = () => {
    // useQuery : 구분자, API 요청 함수
    // useQueries([]) : 복수의 비동기 요청을 한번에 관리하는 훅
    // useQuery는 비동기 함수이다.
    // 만약 여러개의 useQuery를 받아서 처리를 한다면?(별칭 : alias 사용 가능)
    // 그런데 각 쿼리에서 받아온 조건들이 처리되었을 때 렌더링되도록 data1 && data2 ... 비효율적!
    // 따라서 이럴 경우에는 useQueries를 사용하게 된다.

    const { id } = useParams();
    const { data, error, isLoading } = useQuery([`product/${id}`], () => 
        getProductById(id)
    );
    const product = data?.data?.response

    // data.data = { (우리가 원하는 데이터는 리액트 쿼리로 받은 data에 .data를 통해 접근)
    //     response:
    //     success:
    //     error:
    // }

    // 우리가 받는 data는 최초 상태일 때는 데이터가 없다. 따라서 parsing error를 방지하기 위해 ?를 사용한다(값이 존재하면 접근함)
    // product에 우리가 원하는 데이터가 정확하게 존재하는가? 진짜 해당 데이터가 존재하는지 검증해주면 좋다.
    // 타입스크립트 등을 쓰지 않는다면, 검증 함수를 만들어 사용!
    return (  
        <div className="productDetailPage">
            {isLoading && <Loader />}
            {error && <div>{error.message}</div>}
            {product && <ProductDetailTemplate product={product} />}
        </div>
    );
};

export default ProductDetailPage;

// const { data, error, isLoading } = useSWR(`/product/${id}`, getProductById) // 구분자로는 해당 라우트의 경로를 관례로 사용함(useSWR 방식)
// const loading = useSelector((state) => state.detail.loading)
// const error = useSelector((state) => state.detail.error)