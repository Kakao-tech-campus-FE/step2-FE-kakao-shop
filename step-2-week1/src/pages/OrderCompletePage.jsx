import { Suspense } from "react";
import Loader from "../component/atoms/Loader";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getOrderFromId } from "../services/order";
import OrderCompleteTemplate from "../component/templates/OrderCompleteTemplate";

const OrderCompletePage = () => {
    const { id } = useParams();
    // 완료된 결제 정보 불러오기
    const { data, error } = useQuery(`/orders/${id}`, () => getOrderFromId(id));

    // 결제 정보 불러오는 동안 로딩 화면

    // 렌더링 역할만 하는 컴포넌트가 표기

    return <Suspense fallback={<Loader/>}>
        <OrderCompleteTemplate data={data} />
    </Suspense>;
};

export default OrderCompletePage;