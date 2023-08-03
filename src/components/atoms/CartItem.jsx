import React from "react";
import Box from "./Box";
import { comma } from "../../utils/convert";
import Counter from "./Counter";
import Button from "./Button";

const CartItem = ({ item, onChange, onDelete }) => {
  return (
    <Box className="cart-item-box border w-100 p-4 ml-[100px]">
      <h5 className="font-bold mb-4">{item.productName}</h5>
      {item.carts.map((cart) => (
          cart.quantity > 0 ? (
        <div key={cart.id} className="cart">
          <div className="option border p-4 my-4">
            <div className="option-name">{cart.option.optionName}</div>
            <div className="row flex justify-between">
              <div className="flex">
                <Button
                  className="border w-10 mr-2"
                  onClick={() => {
                    onDelete(cart.id, cart.quantity,cart.option.price)
                  }}
                >
                  삭제
                </Button>
                <Counter
                  initCount={cart.quantity}
                  onIncrease={(count) => {
                    onChange(cart.id, count, cart.option.price);
                  }}
                  onDecrease={(count) => {
                    onChange(cart.id, count, -cart.option.price);
                  }}
                ></Counter>
              </div>
              <div className="price font-bold">
                <span>{comma(cart.option.price * cart.quantity)}원</span>
              </div>
            </div>
          </div>
        </div>
          ):null
      ))}
      <div className="total-price">
        <div className="row border ml-0.5 mr-0.5 p-4 mt-4 w-auto flex justify-between">
          <h5>주문금액</h5>
          <div className="price text-blue-600">
            {comma(
              item.carts.reduce((acc, cur) => {
                return acc + cur.option.price * cur.quantity;
              }, 0)
            )}
            원
          </div>
        </div>
      </div>
    </Box>
  );
};

export default CartItem;