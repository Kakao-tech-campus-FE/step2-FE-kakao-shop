import {getCart} from "../../services/cart";
import {useQuery} from "react-query";
import Loader from "../atoms/Loader";
import {Suspense} from "react";
import CartList from "../organisms/CartList";

const CartPage = () => {
    const { data } = useQuery("cart", getCart);
    return (
        <Suspense fallback={<Loader />}>
            <CartList data={data} />
        </Suspense>
    )
}

export default CartPage;