import Counter from "./Counter";
import { comma } from "../../utils/convert";
import "../../styles/atoms/CartItem.css";

// 각 상품별 장바구니 항목
// 이 항목안에는 여러 옵션 저장 가능
const CartItem = ({ item, onChange }) => {
  return (
    <div className="cart-item-box">
      <span className="cart-item-name">{item.productName}</span>

      {item.carts.map((cart) => (
        // cart.id = 옵션아이디
        <div key={cart.id} className="cart-item-option">
          <div className="option-top">
            <span className="option-name">{cart.option.optionName}</span>
          </div>
          <div className="option-bottom">
            <Counter
              quantity={cart.quantity}
              onIncrease={(count) => {
                // id, 변경된 수량, 해당 옵션 상품의 가격
                onChange(cart.id, count, cart.option.price);
              }}
              onDecrease={(count) => {
                onChange(cart.id, count, -cart.option.price);
              }}
            />
            <div className="option-price">
              <span>{comma(cart.option.price * cart.quantity)}원</span>
            </div>
          </div>
        </div>
      ))}

      <div className="cart-option-total">
        <span>주문금액</span>
        <span>
          {comma(
            // item.carts = 옵션들이 저장된 배열의미.
            item.carts.reduce((acc, cur) => {
              return acc + cur.option.price * cur.quantity;
            }, 0)
          )}
          원
        </span>
      </div>
    </div>
  );
};

export default CartItem;
