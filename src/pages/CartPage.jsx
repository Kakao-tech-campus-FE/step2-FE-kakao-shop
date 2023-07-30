import { Suspense } from "react";
import { useQuery } from "react-query";
import Loader from "../components/atoms/Loader";
import CartList from "../components/molecules/CartList";
import { getCart } from "../apis/cart";
import GNB from "../components/atoms/GNB";

// 장바구니 페이지
const CartPage = () => {
  const { data } = useQuery("cart", getCart);

  return (
    <Suspense fallback={<Loader />}>
      <GNB />
      <CartList data={data} />
    </Suspense>
  );
};

export default CartPage;
