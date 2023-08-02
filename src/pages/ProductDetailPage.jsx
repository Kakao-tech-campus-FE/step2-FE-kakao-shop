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

    return (  
        <div className="productDetailPage">
            {isLoading && <Loader />}
            {error && <div>{error.message}</div>}
            {product && <ProductDetailTemplate product={product} />}
        </div>
    );
};

export default ProductDetailPage;