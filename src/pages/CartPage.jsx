import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import Loader from "../components/atoms/Loader";
import CartList from "../components/moleclules/CartList";
import { getCart } from "../apis/cart";

const CartPage = () => {
  const { data } = useQuery(["cart"], getCart);
  return (
    <Suspense fallback={<Loader></Loader>}>
      <CartList data={data} />
    </Suspense>
  );
};

export default CartPage;
