import React from "react";
import { useQuery } from "react-query";
import Loader from "../components/atoms/Loader";
import CartList from "../components/molecules/CartList";
import { getCart } from "../services/cart";
import "../styles/Pages/CartPage.css"

const CartPage = () => {
    const { data, isLoading } = useQuery("cart", getCart);

    if (isLoading) {
        return <Loader />;
    }

    return <CartList data={data} />;
};

export default CartPage;
