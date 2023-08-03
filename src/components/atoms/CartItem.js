import { useMemo } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";

import { updateCartReq } from "apis/cart.js";
import { convertToPrice } from "utils/convert.js";

import Button from "./Button.js";
import Counter from "./Counter.js";

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
    <div className="mb-2 bg-white border p-4 space-y-3">
      <h3 className="mb-4 text-left font-bold">{product.productName}</h3>
      {product.carts.map((cart) => (
        <div key={`cart-${cart.id}`} className="p-3 border">
          <div className="mb-2 text-left text-sm">{cart.option.optionName}</div>
          <div className="flex justify-between items-center">
            <span className="space-x-2">
              <Button
                className="px-2 py-1 border text-sm"
                onClick={() => handleDeleteClick(cart)}
              >
                삭제
              </Button>
              <Counter value={cart} setCount={handleCounterClick} />
            </span>
            <span className="font-bold">{convertToPrice(cart.price)}</span>
          </div>
        </div>
      ))}
      <p className="flex p-3 bg-gray-50 border justify-between items-center font-bold">
        <span className="text-sm">주문금액</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  );
}
