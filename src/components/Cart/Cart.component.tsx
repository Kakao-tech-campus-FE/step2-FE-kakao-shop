import { getCart, updateCart } from "@/remotes/product";
import { useQuery } from "@tanstack/react-query";
import { Order } from "@/hooks/useOrder";
import { CART } from "@/assets/product.ko";
import CartItem from "./CartItem.component";
import Txt from "@components/common/Txt.component";
import CartTotal from "./CartTotal.component";
import GlobalLoading from "../common/GlobalLoading.component";
import { ProductOrder } from "@/dtos/product.dto";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [products, setProducts] = useState<ProductOrder[]>([]);
  const navigate = useNavigate();

  const { data, isLoading } = useQuery(["cart"], getCart, {
    onSuccess: (data) => {
      setProducts(data.data.response.products);
    },
  });

  const removeOrder = (cartId: number) => {
    setProducts(
      products.map((product) => ({
        ...product,
        carts: product.carts.filter((cart) => cart.id !== cartId),
      }))
    );
  };

  const updateOrder = (order: Order) => {
    setProducts(
      products.map((product) => ({
        ...product,
        carts: product.carts.map((cart) =>
          cart.id === order.id ? { ...cart, quantity: order.quantity } : cart
        ),
      }))
    );
  };

  const onOrder = () => {
    updateCart(
      products.flatMap((product) =>
        product.carts.map((cart) => ({
          cartId: cart.id,
          quantity: cart.quantity,
        }))
      )
    );
    navigate("/cart/check");
  };

  if (!data || isLoading) {
    return <GlobalLoading isLoading={isLoading} />;
  }

  return (
    <>
      <div className="border-2 rounded-md divide-y-2 bg-white mb-4">
        <h3 className="w-full text-center p-4">
          <Txt typograph="h5">{CART.CART}</Txt>
        </h3>
        <div className="w-full p-4 flex flex-col gap-4">
          <CartItem
            products={products}
            isLoading={isLoading}
            removeOrder={removeOrder}
            updateOrder={updateOrder}
          />
        </div>
      </div>
      <div className="border-2 rounded-md bg-white">
        <CartTotal
          isLoading={isLoading}
          products={products}
          onOrder={onOrder}
        />
      </div>
    </>
  );
};

export default Cart;
