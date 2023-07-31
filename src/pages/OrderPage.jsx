import { Suspense } from "react";
import OrderTemplate from "../components/templates/OrderTemplate";
import Loader from "../components/atoms/Loader";
import { useQuery } from "react-query";
import { getCart } from "../services/cart";

const OrderPage = () => {
    const { data } = useQuery('order', getCart, {
        onError: () => {
            alert("문제가 발생하였습니다.");
        }
    })

        return (
        <div className="bg-bg_gray">
            <Suspense fallback={<Loader />}>
                <OrderTemplate data={data?.data?.response}/>
            </Suspense>
        </div>
    );

};

export default OrderPage;