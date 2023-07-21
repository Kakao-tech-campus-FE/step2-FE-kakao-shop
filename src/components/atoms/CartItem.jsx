import Box from "./Box";
import Counter from './Counter';
import { comma } from "../../utils/comma";

const CartItem = ({ item, onChange }) => {
    return (
        <Box className="cart-item-box">
            <h5>{item.productName}</h5>
            {/* item의 carts에 담긴 장바구니 목록을 빼와서 사용 */}
            {item.carts.map((cart) => (
                <Box key={cart.id} className="cart">
                    <div className="option-name">
                        <span>{cart.option.optionName}</span>
                    </div>
                    <div className="row">
                        <Counter 
                            initialCount={cart.quantity}
                            onIncrease={(count) => {
                                // onChange - 아이디 / 변경 수량 / 해당 옵션 상품의 가격
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
                </Box>
            ))}
            <Box className="total-price">
                <div className="row">
                    <h5>주문금액</h5>
                    <div className="price">
                        {/* 여기서 item.carts는 옵션들이 저장된 배열이다! */}
                        {comma(
                            item.carts.reduce((acc, cur) => {
                                return acc + cur.option.price * cur.quantity;
                            }, 0)
                        )}원
                    </div>
                </div>
            </Box>
        </Box>
    );
};

export default CartItem;