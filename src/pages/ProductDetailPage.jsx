import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDetail } from "../store/slices/detailSlice";
import { getProductById } from "../components/services/product";
import { useQuery } from "react-query";
import Loader from "../components/atoms/Loader";
// import useSWR from 'swr'

const ProductDetailPage = () => {
    // useQuery : 구분자, API 요청 함수
    // useQueries([]) : 복수의 비동기 요청을 한번에 관리하는 훅
    // useQuery는 비동기 함수이다.
    // 만약 여러개의 useQuery를 받아서 처리를 한다면?(별칭 : alias 사용 가능)
    // 그런데 각 쿼리에서 받아온 조건들이 처리되었을 때 렌더링되도록 data1 && data2 ... 비효율적!
    // 따라서 이럴 경우에는 useQueries를 사용하게 된다.

    const { id } = useParams();
    const dispatch = useDispatch();
    const { data, error, isLoading } = useQuery(`product/${id}`, () => getProductById(id));

    useEffect(() => {
        dispatch(getDetail(id));
    }, [dispatch, id])

    // loading & error state에 대한 처리 필요
    return (
        <>  
            <div className="productDetailPage">
                {isLoading && <Loader />}
                {error && <div>{error.message}</div>}
                {data && <div>{data.productName}</div>}
            </div>
        </>
    );
};

export default ProductDetailPage;

// const { data, error, isLoading } = useSWR(`/product/${id}`, getProductById) // 구분자로는 해당 라우트의 경로를 관례로 사용함(useSWR 방식)
// const loading = useSelector((state) => state.detail.loading)
// const error = useSelector((state) => state.detail.error)