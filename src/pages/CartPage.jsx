import { useQuery } from "react-query";
import { getCart } from "../services/cart";
import { Suspense } from "react";
import CartList from "../components/molecules/CartList";
import Loader from "../components/atoms/Loader";


const CartPage = () => {
    const { data } = useQuery("cart", getCart, {
        onSuccess: () => {

        },
        onError: () => {
            alert('장바구니 로딩 에러');
            // window.location.href="/login";
        }
    });
    // console.log('cart data', data?.data?.response);
    return (
        <div style={{backgroundColor:"#f4f4f4"}}>
            <Suspense fallback={<Loader />}>
                <CartList data={data?.data?.response} />
            </Suspense>
        </div>
    );
};

export default CartPage;