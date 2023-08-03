/*eslint-disable react/prop-types */
import { Card } from "react-bootstrap";
import Box from "./Box";
import Counter from "./Counter";
import "../../styles/atoms/CartItem.css";
import { comma } from "../../utils/convert";

const CartItem = ({ item, onChange }) => {
  return (
    <Box className="cart-item-box p-4 ">
      <div className="block text-base break-all font-semibold h-14">
        <span className="align-middle">{item.productName}</span>
      </div>
      {item.carts.map((cart) => (
        <Card
          key={cart.id}
          className="flex-col border-2 border-gray rounded p-3 mb-3 h-24"
        >
          <div className="option-name pb-3">
            <span>{cart?.option?.optionName}</span>
          </div>
          <div className="row">
            <Counter
              quantity={cart.quantity}
              onIncrease={(count) => {
                // onChange(아이디, 변경된 수량, 해당 상품의 가격)
                onChange(cart.id, count, cart.option.price);
              }}
              onDecrease={(count) => {
                onChange(cart.id, count, cart.option.price);
              }}
            />
            <div className="price float-right">
              <span>{comma(cart?.option?.price * cart?.quantity)}원</span>
            </div>
          </div>
        </Card>
      ))}
      <Card className="total-price">
        <div className="row border-2 border-gray-light p-3 h-12 font-bold">
          <h5 className="inline-block float-left">주문금액</h5>
          <div className="inline-block price float-right">
            {/* {item.carts= 옵션들이 저장된 배열} */}
            {comma(
              item.carts.reduce((acc, cur) => {
                return acc + cur.option?.price * cur?.quantity;
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
