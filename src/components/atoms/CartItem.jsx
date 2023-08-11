import { comma } from "../../utils/convert";
import Box from "./Box";
import Counter from "./Counter";

const CartItem = ({ item, onChange, onRemove, mutate }) => {
  return (
    <Box className="cart-item-box">
      <h5 className="ml-8 mt-4 text-lg font-semibold">{item.productName}</h5>
      {item.carts.map((cart) => (
        <div className="border mt-4 mx-12 p-4">
          <Box key={cart.id} className="cart">
            <div className="option-name">
              <span>{cart.option.optionName}</span>
            </div>

            <div className="flex justify-between">
              <div className="flex">
                <button
                  onClick={() => {
                    onRemove(cart.id, cart.option.price * cart.quantity);
                  }}
                  className="w-12 h-8 mt-2 mr-4 border rounded-md"
                >
                  삭제
                </button>
                <Counter
                  quantity={cart.quantity}
                  onIncrease={(count) => {
                    onChange(cart.id, count, cart.option.price);
                  }}
                  onDecrease={(count) => {
                    onChange(cart.id, count, -cart.option.price);
                  }}
                  mutate={mutate}
                />
              </div>
              <span className="mt-4 font-bold">
                {comma(cart.option.price * cart.quantity)}원
              </span>
            </div>
          </Box>
        </div>
      ))}

      <div className="border mt-2 mx-12 p-4 bg-slate-100">
        <Box className="total-price">
          <div className="flex justify-between">
            <h5>주문금액</h5>
            <span className="price">
              {comma(
                item.carts.reduce((acc, cur) => {
                  return acc + cur.option.price * cur.quantity;
                }, 0)
              )}
              원
            </span>
          </div>
        </Box>
      </div>
    </Box>
  );
};

export default CartItem;

