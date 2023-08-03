import Box from "../atoms/Box";
import Counter from "../atoms/Counter";
import { comma } from "../../utils/convert";
import Container from "../atoms/Container";

const CartItem = ({ item, onChange }) => {
  return (
    <Container className="cartItem-box w-auto pb-4">
      <h5 className="font-bold text-lg p-2">{item.productName}</h5>
      {item.carts.map((cart) => (
        <Box key={cart.id} className="cart border-2 rounded mb-2 p-2">
          <div className="option-name font-bold text-lg ">
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

            <div className="price font-bold">
              <span>{comma(cart.option.price * cart.quantity)}원</span>
            </div>
          </div>
        </Box>
      ))}
      <Box className="total-price border-2 rounded border-gray-200 bg-gray-100">
        <div className="row font-semibold p-2 flex justify-between">
          <span>주문금액</span>
          <span className="price text-indigo-500 font-bold">
            {comma(
              item.carts.reduce((acc, cur) => {
                return acc + cur.option.price * cur.quantity;
              }, 0)
            )}
            원
          </span>
        </div>
      </Box>
    </Container>
  );
};

export default CartItem;
