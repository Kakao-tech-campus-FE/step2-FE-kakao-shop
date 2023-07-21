import {getCart} from "../../services/cart";
import {useQuery} from "react-query";
import Loader from "../atoms/Loader";
import {Suspense} from "react";
import CartList from "../organisms/CartList";

const CartPage = () => {
    const {data, isError, error} = useQuery("cart", getCart);
    return (
        <Suspense fallback={<Loader/>}>
            <div className={"page flex"}>
                <CartList data={data}/>
            </div>
            {isError && <div>{error.message}</div>}
        </Suspense>
    )
}

export default CartPage;