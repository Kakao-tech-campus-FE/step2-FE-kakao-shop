import { ProductOrder } from "@/dtos/product.dto";
import { getCart, updateCart } from "@/remotes/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Order } from "./useOrder";
import { ERROR } from "@/assets/error.ko";

const useCart = () => {
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

  return { products, isLoading, removeOrder, updateOrder, onOrder };
};

export default useCart;
