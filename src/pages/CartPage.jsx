import { Suspense } from "react";
import { inCart } from "../services/cart";
import { useQuery } from "react-query";
import Loader from "../components/atoms/Loader";
import CartList from "../components/molecules/CartList";

const CartPage = () => {
  const { data } = useQuery("cart", () => inCart());
  return (
    <Suspense fallback={<Loader />}>
      <CartList data={data} />
    </Suspense>
  );
};
export default CartPage;
