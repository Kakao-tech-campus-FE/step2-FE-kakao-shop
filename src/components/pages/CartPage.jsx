import {getCart} from "../../services/cart";
import {useQuery} from "react-query";
import Loader from "../atoms/Loader";
import {Suspense} from "react";
import CartList from "../organisms/CartList";
import Toast from "../atoms/Toast";
import useToast from "../../hooks/useToast";

const CartPage = () => {
    const {data, isError, error} = useQuery("cart", getCart);

    const {toastMessage, toastShow, hideToast} = useToast()
    return (
        <Suspense fallback={<Loader/>}>
            <Toast
                message={toastMessage}
                isShow={toastShow}
                time={2400}
                onClose={() => {
                    hideToast();
                }}
            />
            <div className={"page flex"}>
                <CartList data={data}/>
            </div>
            {isError && <div>{error.message}</div>}
        </Suspense>
    )
}

export default CartPage;