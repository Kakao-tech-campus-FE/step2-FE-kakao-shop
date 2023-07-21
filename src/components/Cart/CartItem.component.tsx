import { getCart, updateCart } from "@/remotes/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Fragment } from "react";
import ProductOptionOrderItem from "../ProductOption/ProductOptionOrderResult/ProductOptionOrderItem.component";
import Txt from "@components/common/Txt.component";
import { Order } from "@/hooks/useOrder";
import { Link } from "react-router-dom";
import { CART } from "@/assets/product.ko";
import { COMMON } from "@/assets/common.ko";

const CartItem = () => {
  const { data, isLoading } = useQuery(["cart"], getCart);
  const queryClient = useQueryClient();

  const { mutate } = useMutation(updateCart, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const removeOrder = (cartId: number) => {
    mutate([{ cartId: cartId, quantity: 0 }]);
  };

  const updateOrder = (order: Order) => {
    mutate([{ cartId: order.id, quantity: order.quantity }]);
  };

  if (!data || isLoading) {
    return <div>loading...</div>;
  }

  const { products } = data.data.response;

  if (
    products.every((product) =>
      product.carts.every((cart) => cart.quantity === 0)
    )
  ) {
    return (
      <>
        <Txt>{CART.CART_EMPTY}</Txt>
        <Link
          to={"/"}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-4 w-fit"
        >
          {COMMON.GO_SHOPPING}
        </Link>
      </>
    );
  }

  return (
    <>
      {products.map(
        (product) =>
          product.carts.every((cart) => cart.quantity === 0) || (
            <Fragment key={product.id}>
              <Txt typograph="h6">{product.productName}</Txt>
              <div className="border-2 rounded-md divide-y-2">
                {product.carts.map(
                  (cart) =>
                    cart.quantity === 0 || (
                      <ProductOptionOrderItem
                        key={cart.id}
                        item={{
                          id: cart.id,
                          optionName: cart.option.optionName,
                          price: cart.option.price,
                          quantity: cart.quantity,
                        }}
                        removeOrder={removeOrder}
                        updateOrder={updateOrder}
                      />
                    )
                )}
              </div>
            </Fragment>
          )
      )}
    </>
  );
};

export default CartItem;
