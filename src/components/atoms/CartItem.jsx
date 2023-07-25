import { Card } from "react-bootstrap";
import Box from "./Box";
import Counter from "./Counter";
import "../../styles/atoms/CartItem.css";
import { comma } from "../../utils/convert";

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
            <Counter
              onIncrease={(count) => {
                // onChange(아이디, 변경된 수량, 해당 옵션 상품의 가격)
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
      <Card className="total-price">
        <div className="row">
          <h5>주문금액</h5>
          <div className="price">
            {/* item.carts = 옵션들이 저장된 배열 */}
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
