import { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/atoms/Loader";
import { getCart } from "../components/services/cart";
import CartList from "../components/molecules/CartList";

const CartPage = () => {
  const {data} = useQuery("cart", getCart);
  return (
    <Suspense fallback={<Loader/>}> {/* 렌더링이 되기 전 fallback에 해당하는 부분 표기 */}
      <CartList data={data}/> 
    </Suspense>
  );
};

export default CartPage;