import { Suspense } from "react";
import React from "react";
import { useQuery } from "react-query";
import Loader from "../component/atoms/Loader";
import CartList from "../component/molecules/CartList";

const CartPage = () => {
    const {data} = useQuery("cart");
    return (
        <Suspense fallback={<Loader />}>
            <CartList data = {data} />
        </Suspense>
    )
}

export default CartPage