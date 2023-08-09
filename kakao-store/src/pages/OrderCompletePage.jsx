import { Suspense } from "react";
import Loader from "../components/atoms/Loader";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getOrderFromId } from "../apis/order";
import OrderComplateTemplate from "../components/templates/OrderComplateTemplate";
import Error404Page from "./Error404Page";

const OrderCompletePage = () => {
    const { id } = useParams();
    
    // 완료된 결제 정보를 불러오기
    const { data, error, isLoading } = useQuery(`orders/${id}`, () => 
        getOrderFromId(id)
    );

    // 결제 정보를 불러오는 동안 로딩 화면을 보여주기
    // 렌더링의 역할만 하는 컴포넌트가 표기
    return (
        <Suspense fallback={<Loader />}>
            {error && <Error404Page />}
            {/* data가 fetch 되기 전에 Template에서 데이터를 사용하려고 해서 오류가 나는 듯 */}
            {data !== undefined && <OrderComplateTemplate data={data} />}
        </Suspense>
    );
}

export default OrderCompletePage;