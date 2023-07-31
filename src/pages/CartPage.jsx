import { useQuery } from "react-query";
import { getCart } from "../services/cart";
import { Suspense } from "react";
import CartList from "../components/molecules/CartList";
import Loader from "../components/atoms/Loader";


const CartPage = () => {
    const { data } = useQuery(
        "cart", 
        getCart, 
        {
            onError: (err) => {
                alert('장바구니 로딩 에러');
            }
        }
    )
    // console.log('cart data', data?.data?.response);

    return (
        <div className="bg-bg_gray">
            <Suspense fallback={<Loader />}>
                <CartList data={data?.data?.response} />
            </Suspense>
        </div>
    );
};

export default CartPage;