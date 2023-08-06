import { Suspense } from "react";
import Loader from "../component/atoms/Loader";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getOrderFromId } from "../services/order";

const OrderCompletePage = ()=> {
    const {id} = useParams();

    const { data, error } = useQuery(`/orders/${id}`, ()=> getOrderFromId(id));


// 완료된 결제 정보를 불러오기
//결제 정보를 불러오는 동안 로딩 화면을 보여주가
//렌더링의 역할만 하는 컴포넌트가 표기


    return <Suspense fallback={<Loader />}>



    </Suspense>;
}

export default OrderCompletePage;