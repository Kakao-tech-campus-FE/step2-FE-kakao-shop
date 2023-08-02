import CartList from "../components/molecules/CartList";
import Loader from "../components/atoms/Loader";
import { Suspense, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getCart } from "../services/cart";

const CartPage = () => {
  // const { data, refetch } = useQuery("cart", getCart);
  // useEffect(() => {
  //   console.log(data);
  //   if (data === undefined) {
  //     refetch();
  //   }
  // }, [data]);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getCart()
      .then((res) => {
        console.log(res);
        setCartItems(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   console.log("cartItems");
  //   console.log(cartItems);
  // }, [cartItems]);

  return (
    <div className="cartpage">
      <Suspense fallback={<Loader />}>
        {cartItems.length !== 0 && <CartList data={cartItems} />}
      </Suspense>
    </div>
  );
};

export default CartPage;
