import Card from "../atoms/Card";
import Box from "./Box";
import Counter from "./Counter";
import { comma } from "../../utils/convert";

//각 상품별 장바구니 항목
// 여러 옵션이 저장 될 수 있음
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
                // 아이디 , 변경된 수량, 해당 옵션 가격
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
      <Card classNam="total-price">
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
