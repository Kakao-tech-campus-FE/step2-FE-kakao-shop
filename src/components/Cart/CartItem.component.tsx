import { getCart, updateCart } from "@/remotes/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Fragment } from "react";
import ProductOptionOrderItem from "../ProductOption/ProductOptionOrderResult/ProductOptionOrderItem.component";
import Txt from "@components/common/Txt.component";
import { Order } from "@/hooks/useOrder";

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

  return (
    <div className="w-full p-4 flex flex-col gap-4">
      {products.map((product) => (
        <Fragment key={product.id}>
          <Txt typograph="h6">{product.productName}</Txt>
          <div className="border-2 rounded-md divide-y-2">
            {product.carts.map((cart) => (
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
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default CartItem;
