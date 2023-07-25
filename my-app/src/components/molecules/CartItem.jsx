import CartOptionItem from "../atoms/CartOptionItem";
import Card from "../atoms/Card";
import Box from "../atoms/Box";
import Counter from "../atoms/Counter";
import { comma } from "../../utils/convert";
import Container from "../atoms/Container";

const CartItem = ({ item, onChange }) => {
  return (
    <Container className="cartItem-box w-auto">
      <h5 className="font-bold text-lg">상품 : {item.productName}</h5>
      {item.carts.map((cart) => (
        <Box key={cart.id} className="cart border-4">
          <div className="option-name font-bold text-lg">
            <span>{cart.option.optionName}</span>
          </div>
          <div className="row">
            <Counter
              onIncrease={(count) => {
                onChange(cart.id, count, cart.option.price);
              }}
              onDecrease={(count) => {
                onChange(cart.id, count, -cart.option.price);
              }}
              value={cart.quantity}
            />

            <div className="price font-bold text-sm">
              <span>{comma(cart.option.price * cart.quantity)}원</span>
            </div>
          </div>
        </Box>
      ))}
      <Box className="total-price">
        <div className="row">
          <h5>주문금액</h5>
          <div className="price text-blue-500">
            {comma(
              item.carts.reduce((acc, cur) => {
                return acc + cur.option.price * cur.quantity;
              }, 0)
            )}
            원
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default CartItem;
