import React from "react";
import Card from "../atoms/Card";
import Box from "./Box";
import Counter from "./Counter";
import { comma } from "../../utils/convert";

// 각 상품별 장바구니 항목
// 여러 옵션이 저장 될 수 있음
const CartItem = ({ item, onChange }) => {
  return (
    <div className="cart-item-box ">
      <h5 className="text-lg font-bold py-2">{item.productName}</h5>
      <div className="border p-2 items-center ">
        {item.carts.map((cart, index) => (
          <div key={cart.id} className="cart">
            <ul className="option-name py-2">
              <li>{`옵션${index + 1}. ${cart.option.optionName}`}</li>
              <div className="row flex justify-between font-bold py-2">
                <Counter
                  className="text-xl"
                  // 이때 변경 된 수량을 새로고침 해도 바뀌지 않도록 -> 로컬스토리지에 저장?
                  value={cart.quantity} // 상품 수량을 Counter 컴포넌트의 초기값으로 사용
                  onIncrease={(count) => {
                    // 아이디 , 변경된 수량, 해당 옵션 가격
                    onChange(cart.id, count, cart.option.price);
                  }}
                  onDecrease={(count) => {
                    onChange(cart.id, count, -cart.option.price);
                  }}
                />
                <div className="price py-2">
                  <span>{comma(cart.option.price * cart.quantity)}원</span>
                </div>
              </div>
            </ul>
          </div>
        ))}
      </div>
      <div className="border p-2 mt-2 ">
        <div className="row flex py-2 justify-between items-center ">
          <h5 className="text-lg font-bold ">주문 금액</h5>
          <span className="price text-lg font-bold ">
            {comma(
              item.carts.reduce((acc, cur) => {
                return acc + cur.option.price * cur.quantity;
              }, 0)
            )}
            원
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
