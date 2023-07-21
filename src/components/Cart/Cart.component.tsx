import { getCart, updateCart } from "@/remotes/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Order } from "@/hooks/useOrder";
import { CART } from "@/assets/product.ko";
import CartItem from "./CartItem.component";
import Txt from "@components/common/Txt.component";
import CartTotal from "./CartTotal.component";
import GlobalLoading from "../common/GlobalLoading.component";
import { ProductOrder } from "@/dtos/product.dto";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ERROR } from "@/assets/error.ko";

const Cart = () => {
  const [products, setProducts] = useState<ProductOrder[]>([]);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery(["cart"], getCart);

  useEffect(() => {
    if (data) {
      setProducts(data.data.response.products);
    }
  }, [data]);

  const { mutate } = useMutation(updateCart, {
    onMutate: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const removeOrder = (cartId: number) => {
    setProducts(
      products.map((product) => ({
        ...product,
        carts: product.carts.map((cart) => {
          if (cart.id === cartId) {
            cart.quantity = 0;
          }
          return cart;
        }),
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
    mutate(
      products.flatMap((product) =>
        product.carts.map((cart) => ({
          cartId: cart.id,
          quantity: cart.quantity,
        }))
      )
    );
    if (
      products.every((product) =>
        product.carts.every((cart) => cart.quantity === 0)
      )
    ) {
      alert(ERROR.NO_CART);
      return;
    }
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
