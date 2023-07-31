import { Suspense } from "react";
import OrderTemplate from "../components/templates/OrderTemplate";
import Loader from "../components/atoms/Loader";
import { useQuery } from "react-query";
import { getCart } from "../apis/cart";

const OrderPage = () => {
    const {data: cart, isLoading} = useQuery(["cart"], getCart);

    return(
        <Suspense fallback={<Loader />}>
            {isLoading ? <Loader /> : <OrderTemplate data={cart}/>}
        </Suspense>
    );
};

export default OrderPage;