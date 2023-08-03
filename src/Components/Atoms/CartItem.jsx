import Box from "./Box";
import { Card } from "react-bootstrap";
import "../../Styles/CartItem.css";
import Counter from "./Counter";
import { comma } from "../../Utils/convert";
import DeleteButton from "./DeleteButton";

const CartItem = ({ item, onChange }) => {
  return (
    <Box className="cart-item-box">
      <h5 className="font-bold p-3">{item.productName}</h5>
      {item.carts.map((cart) => (
        <div key={cart.id} className="m-3 p-2 border rounded">
          <div className="text-sm mx-3">
            <span>{cart.option.optionName}</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <DeleteButton />
              <Counter
                quantity={cart.quantity}
                onIncrease={(count) => {
                  onChange(cart.id, count, cart.option.price);
                }}
                onDecrease={(count) => {
                  onChange(cart.id, count, -cart.option.price);
                }}
              />
            </div>
            <div className="font-bold">
              <span>{comma(cart.option.price * cart.quantity)}원</span>
            </div>
          </div>
        </div>
      ))}
      <div className="m-3 mb-3 bg-stone-50 p-3 border rounded">
        <div className="flex items-center justify-between font-bold">
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
      </div>
    </Box>
  );
};

export default CartItem;
