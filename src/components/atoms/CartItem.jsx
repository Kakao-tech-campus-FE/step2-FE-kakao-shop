import Card from "./Card";
import Box from "./Box";
import Counter from "./Counter";
// import "../../styles/atoms/CartItem.css";
import { comma } from "../../utils/convert";

const CartItem = ({item, onChange, onRemove, mutate}) => {
  return (
    <Box className="cart-item-box">
      <h5 className=" ml-8 mt-4 text-lg font-semibold">{item.productName}</h5>
      {item.carts.map((cart) => (
        <Card key={cart.id} className="cart">
          <div className="option-name">
            <span>{cart.option.optionName}</span>
          </div>
          <div className=" flex justify-between">
            <div className="row flex">
              <button
                onClick={() => {
                  onRemove(cart.id, cart.option.price * cart.quantity);
                }}
                className=" w-10 h-8 mt-2 mr-4 border rounded-sm"
              >
                X
              </button>
              <Counter
                onIncrease={(count) => {
                  onChange(cart.id, count,  cart.option.price);
                }}
                onDecrease={(count) => {
                  onChange(cart.id, count, -cart.option.price);
                }}
              />
              </div>
              <div className="price mt-2">
                <span>{comma(cart.option.price * cart.quantity)}원</span>
              </div>
          </div>
        </Card>
      ))}
      <div className=" border p-4 mt-2 mx-12">
        <Card className="total-price">
          <div className="row flex justify-between">
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
        </Card>
      </div>
    </Box>
  );
}

export default CartItem;