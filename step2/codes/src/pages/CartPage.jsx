import { Suspense } from "react";
import { useQuery } from "react-query";
import Loader from "../component/atoms/Loader";
import CartList from "../component/molecules/CartList";
import { getCart } from "../services/cart";

// 장바구니 페이지
const CartPage = () => {
    const { data } = useQuery("cart", getCart);
    
    return (
        <Suspense fallback={<Loader />}>
            {/* 렌더링이 되기 전, fallback 부분이 표기 */}
            <CartList data={data} /> 
        </Suspense>
    );
};

export default CartPage;