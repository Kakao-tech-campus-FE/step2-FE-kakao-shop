import { Suspense } from "react";
import { useQuery } from "react-query"
import Loader from "../component/atoms/Loader";
import CartList from "../component/molecules/CartList";
import {getCart} from "../services/addCart"
import GNB from "../component/atoms/GNB";

const CartPage=()=>{
    const {data}=useQuery("cart", getCart);

    return(
        <Suspense fallback={<Loader/>}>
            <GNB />
            <CartList data={data}/>
        </Suspense>
    );
};
export default CartPage;