import {getCart} from "../../services/cart";
import {Suspense} from "react";

const OrderPage = () => {

    const {data, error, isLoading} = useQuery(getCart);
    return (
        <div>
            <h1>Order Page</h1>
            <Suspense fallback={<div>Loading...</div>}>
                {data && <div>{data.data.response}</div>}
                {error && <div>{error}</div>}
                {isLoading && <div>Loading...</div>}
            </Suspense>
        </div>
    )
}