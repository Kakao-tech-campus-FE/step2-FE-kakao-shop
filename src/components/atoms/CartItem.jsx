import React from "react";
import Box from "./Box";
import { comma } from "../../utils/convert";
import Card from "./Card";
import Counter from './Counter';

const CartItem = ({ item, onChange }) => {
  return (
    <Box className="cart-item-box">
      <h5>{item.productName}</h5>
      {item.carts.map((cart) => (
        <Card key={cart.id} className="cart">
          <div className="option-name">
            <span>{cart.option.optionName}</span>
          </div>
          <div className="row">
            {/* onIncrease, onDecrease 코드 작성 */}
            <Counter
              onIncrease={(count) => {
                onChange(cart.id, count, cart.option.price);
              }}
              onDecrease={(count) => {
                onChange(cart.id, count, -cart.option.price);
              }}
            ></Counter>
            <div className="price">
              <span>{comma(cart.option.price * cart.quantity)}원</span>
            </div>
          </div>
        </Card>
      ))}
      <Card className="total-price">
        <div className="row">
          <h5>주문금액</h5>
          <div className="price">
            {comma(
              item.carts.reduce((acc, cur) => {
                return acc + cur.option.price * cur.quantity;
              }, 0)
            )}
            원
          </div>
        </div>
      </Card>
    </Box>
  );
};

export default CartItem;
