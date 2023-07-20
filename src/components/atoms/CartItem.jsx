import Box from "./Box";
import Counter from "./Counter";

// 각 상품별 장바구니 항목
// 여러 옵션이 저장될 수 있음
const CartItem = ({ item, onChange }) => {
  return (
    <Box className="cart-item-box">
      <h5>{item.productName}</h5>
      {item.carts.map((cart) => (
        <div
          //옵션 아이디
          key={cart.id}
          className="cart"
        >
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
          </div>
        </div>
      ))}
    </Box>
  );
};
export default CartItem;
