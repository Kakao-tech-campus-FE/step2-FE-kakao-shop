import {Link, useParams} from "react-router-dom";

import ErrorPage from "./ErrorPage";
import OrderedBody from "../components/organisms/OrderedBody";
import OrderedHeader from "../components/molecules/OrderedTop";
import {ElevatedButton} from "../components/atoms/Buttons";
import {convertUrl} from "../const";

const OrderedPage = () => {
    const {orderedId} = useParams();
    if (!orderedId) return <ErrorPage error={{message: "주문번호가 없습니다.", status: 404}}/>

    return (
        <div className="mx-auto max-w-screen-sm my-10">
            <OrderedHeader/>
            <OrderedBody orderedId={orderedId}/>
            <Link to={convertUrl("/")}>
                <ElevatedButton className="w-full h-12 bg-amber-300 font-semibold">쇼핑 계속하기</ElevatedButton>
            </Link>
        </div>
    )
}

export default OrderedPage;