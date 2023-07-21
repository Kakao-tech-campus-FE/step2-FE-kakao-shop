import { Suspense } from "react";
import { useQuery } from "react-query";
import { getCart } from "../api/cart";
import Loader from "../components/atoms/Loader";
import CartList from "../components/organisms/CartList";

const CartPage = () => {
  const { data } = useQuery("cart", getCart);
  return (
    <Suspense fallback={<Loader />}>
      <CartList data={data} />
    </Suspense>
  );
};

export default CartPage;
