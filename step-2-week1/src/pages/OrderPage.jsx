import { useQuery } from "react-query";
import OrderTemplate from "../component/templates/OrderTemplate";
import { getCart } from "../services/cart";
import { Suspense } from "react";
import Loader from "../component/atoms/Loader";

const OrderPage = () => {
    const { data, error, isLoading } = useQuery("cart", getCart, {
        onError: (error) => {
            console.log(error);
        },
    });

    return (
        <Suspense fallback={<Loader />}>
            {isLoading ? ( <Loader /> ) : ( <OrderTemplate data={data} error={error} /> )}
        </Suspense>
    )
}

export default OrderPage;