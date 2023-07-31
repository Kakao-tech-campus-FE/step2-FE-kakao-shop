import React from "react";
import Card from "../atoms/Card";
import Box from "./Box";
import Counter from "./Counter";
import { comma } from "../../utils/convert";

// 각 상품별 장바구니 항목
// 여러 옵션이 저장 될 수 있음
const CartItem = ({ item, onChange }) => {
  return (
    <Box className="cart-item-box">
      <h5>상품명 : {item.productName}</h5>
      {item.carts.map((cart) => (
        <Card key={cart.id} className="cart">
          <li className="option-name">
            <span>{cart.option.optionName}</span>

            <div className="row">
              <Counter
                value={cart.quantity} // 상품 수량을 Counter 컴포넌트의 초기값으로 사용
                onIncrease={(count) => {
                  // 아이디 , 변경된 수량, 해당 옵션 가격
                  onChange(cart.id, count, cart.option.price);
                }}
                onDecrease={(count) => {
                  onChange(cart.id, count, -cart.option.price);
                }}
              />
              <div className="price">
                <span>{comma(cart.option.price * cart.quantity)}원</span>
              </div>
            </div>
          </li>
        </Card>
      ))}
      <Card className="total-price">
        <div className="row">
          <h5>주문 금액</h5>
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
