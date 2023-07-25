import { useQuery } from "@tanstack/react-query";
import CartList from "../components/moleclules/CartList";
import { getCart } from "../apis/cart";

const CartPage = () => {
  const { data } = useQuery(["cart"], getCart, { suspense: true });

  return <CartList data={data} />;
};

export default CartPage;
