import { inCart } from "../services/cart";
import { useQuery } from "react-query";
import Loader from "../components/atoms/Loader";
import CartList from "../components/molecules/CartList";

const CartPage = () => {
  const { data, isLoading } = useQuery("cart", inCart);

  return (
    <div>
      {isLoading && <Loader />}
      {data && <CartList data={data} />}
    </div>
  );
};
export default CartPage;
