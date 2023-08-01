import Box from "./Box";
import Counter from "./Counter";
import { comma } from "../../utils/convert";
import Card from "../atoms/Card";

// 각 상품별 장바구니 항목
// 이 항목안에는 여러 옵션 저장 가능
const CartItem = ({ item, onChange }) => {
  return (
    <Box className="cart-item-box">
      <h5>{item.productName}</h5>

      {item.carts.map((cart) => (
        // cart.id = 옵션아이디
        <Card key={cart.id} className="cart-item-list">
          <div className="cart-item-list-up">
            <span>{cart.option.optionName}</span>
          </div>
          <div className="cart-item-list-">
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
            <div className="price">
              <span>{comma(cart.option.price * cart.quantity)}원</span>
            </div>
          </div>
        </Card>
      ))}

      <Card className="cart-total-price">
        <div className="row">
          <h5>주문금액</h5>
          <div className="cart-price">
            {comma(
              // item.carts = 옵션들이 저장된 배열의미.
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
