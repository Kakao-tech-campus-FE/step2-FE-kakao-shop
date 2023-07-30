import { ProductOrder } from "@/dtos/product.dto";
import { getCart, updateCart } from "@/remotes/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Order } from "./useOrder";
import { ERROR } from "@/assets/error.ko";
import { URL } from "@/assets/url.ko";

const useCart = () => {
  const [products, setProducts] = useState<ProductOrder[]>([]);
  const [originProducts, setOriginProducts] = useState<ProductOrder[]>([]);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data, isLoading, isFetching } = useQuery(["cart"], getCart, {
    enabled: products.length === 0,
  });

  const zeroQuantityRemover = (products: ProductOrder[]) =>
    products
      .map((product) => ({
        ...product,
        carts: product.carts.filter((cart) => cart.quantity > 0),
      }))
      .filter((product) => product.carts.length > 0);

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["cart"] });
  }, [queryClient]);

  useEffect(() => {
    if (data) {
      setProducts(zeroQuantityRemover(data.data.response.products));
      setOriginProducts(data.data.response.products);
    }
  }, [data]);

  const { mutate } = useMutation(updateCart, {
    onMutate: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      navigate(URL.CART_CHECK);
    },
  });

  const removeOrder = (cartId: number) => {
    setProducts((products) =>
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
    if (products.every((products) => products.carts.length === 0)) {
      alert(ERROR.NO_CART);
      return;
    }

    const changedProducts = originProducts.flatMap((originProduct) =>
      originProduct.carts.map((originCart) => ({
        cartId: originCart.id,
        quantity:
          products
            .filter((product) => product.id === originProduct.id)[0]
            ?.carts.filter((cart) => cart.id === originCart.id)[0]?.quantity ??
          0,
      }))
    );

    mutate(changedProducts);
  };

  return { products, isLoading, isFetching, removeOrder, updateOrder, onOrder };
};

export default useCart;
