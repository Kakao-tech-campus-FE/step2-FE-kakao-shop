import { useQuery } from "react-query";
import OrderTemplate from "../component/templates/OrderTemplate";
import { getCart } from "../services/cart";
import { Suspense } from "react";
import Loader from "../component/atoms/Loader";

const OrderPage = () => {
    const { data, error, isLoading } = useQuery("cart", getCart);
    return (
        <Suspense fallback={<Loader />}>
            <OrderTemplate data={data} />
        </Suspense>
    )
}

export default OrderPage;