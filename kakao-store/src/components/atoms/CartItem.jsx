import { Card } from 'react-bootstrap';
import Box from './Box';
import Counter from './Counter';
import { comma } from '../../utils/convert';
import { useState } from 'react';

// 각 상품별 장바구니 항목
// 여러 옵션이 저장될 수 있음

const CartItem = ({ item, onChange, onDelete }) => {
  return (
    <Box className="cart-item-box  p-2">
      <h3 className="productName mb-3 font-bold">{item.productName}</h3>

      {item.carts.map((cart) => (
        <Card
          // 옵션 아이디
          key={cart.id}
          className="cart mb-3 rounded border border-solid p-2"
        >
          <div className="option-name">
            <span>{cart.option.optionName}</span>
          </div>
          {/* 삭제 버튼 */}

          <div className="row my-2 flex">
            <button
              className="delete mr-1 rounded border border-solid border-gray-300 bg-white px-2 py-1 text-sm"
              onClick={() => onDelete(cart.id, cart.price)}
            >
              삭제
            </button>
            <Counter
              value={cart.quantity}
              onIncrease={(count) => {
                // 아이디, 변경된 수량, 해당 옵션의 상품의 가격
                onChange(cart.id, count, cart.option.price);
              }}
              onDecrease={(count) => {
                onChange(cart.id, count, -cart.option.price);
              }}
            ></Counter>
            <div className="price flex-1 text-right font-semibold">
              <span>{comma(cart.option.price * cart.quantity)}원</span>
            </div>
          </div>
        </Card>
      ))}
      <Card className="total-price rounded border border-solid bg-[#f1f1f1] p-2">
        <div className="row flex font-bold">
          <h5>주문금액</h5>
          <div className="price flex-1 text-right">
            {/* item.carts = 옵션들이 저장된 배열 */}
            {comma(
              item.carts.reduce((acc, cur) => {
                return acc + cur.quantity * cur.option.price;
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
