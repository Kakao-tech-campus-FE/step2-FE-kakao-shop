import { useQuery } from "react-query";
import { getCart } from "../apis/cart";
import { Suspense } from "react";
import Loader from "../components/atoms/Loader";
import CartList from "../components/molecules/CartList";

// 장바구니 페이지
const CartPage = () => {
    const {data, isLoading} = useQuery("cart", getCart);
    return(
        <Suspense fallback={<Loader />}>
            {isLoading ? <Loader /> : <CartList data={data}/>}
        </Suspense>
    );
};

export default CartPage;