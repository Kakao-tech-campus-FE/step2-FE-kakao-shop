import { Suspense } from "react";
import { useQuery } from "react-query";
import Loader from "../component/atoms/Container";
import OrderTemplate from "../component/templates/OrderTemplate";
import { getCart } from "../services/cart";

const OrderPage = () => {
    const { data } = useQuery("cart", getCart);

    return (
        <Suspense fallback={<Loader />}>
            <OrderTemplate data={data} />
        </Suspense>
    )
}

export default OrderPage;