import { useQueryClient, useMutation } from "@tanstack/react-query";

import { updateCartReq } from "apis/cart";
import { convertToPrice } from "utils/convert";

import Button from "./Button";
import Counter from "./Counter";
import { useMemo } from "react";

export default function CartItem({ product }) {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: updateCartReq,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["carts"] });
    },
    onError: (err) => {
      console.dir("카트업데이트 오류:\n" + err);
    },
  });

  const totalPrice = useMemo(
    () =>
      convertToPrice(product.carts.reduce((acc, cur) => acc + cur.price, 0)),
    [product.carts]
  );

  const handleDeleteClick = (cart) => {
    const formattedData = [{ ...cart, quantity: 0 }].map((item) => ({
      cartId: item.id,
      quantity: item.quantity,
    }));
    mutate(formattedData);
  };

  const handleCounterClick = (cart, qtt) => {
    const formattedData = [{ ...cart, quantity: qtt }].map((item) => ({
      cartId: item.id,
      quantity: item.quantity,
    }));
    mutate(formattedData);
  };

  return (
    <div>
      <h3>{product.productName}</h3>
      {product.carts.map((cart) => (
        <div key={`cart-${cart.id}`}>
          <span>{cart.option.optionName}</span>
          <Button onClick={() => handleDeleteClick(cart)}>삭제</Button>
          <Counter value={cart} setCount={handleCounterClick} />
          <span>{convertToPrice(cart.price)}</span>
        </div>
      ))}
      <span>{totalPrice}</span>
    </div>
  );
}
