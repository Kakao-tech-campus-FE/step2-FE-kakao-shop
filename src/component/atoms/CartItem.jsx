import { Card } from "react-bootstrap";
import Box from "./Box";
import Counter from "./Counter";
// import "../../styles/atoms/CartItem.css";
import { comma } from "../../utils/convert";
import '../../styles/atoms/CartItem.css';

/** cartList에 들어갈 cartItem들 */
// item : 상품 정보들을 props로 넘겨줍니다
export const CartItem = ({ item, onChange }) => {
    return ( 
        <Box className="cart-item-box">
            <h5>{item.productName}</h5>
            {item.carts.map((cart) => (
                <Card key={cart.id} className="cart">
                    <div className="option-name">
                        <span>{cart.option.optionName}</span>
                    </div>
                <div className="row">
                    <Counter className="counter"
                        onIncrease={( count ) => {
                            onChange(cart.id, count, cart.option.price);
                        }}
                        onDecrease={( count ) => {
                            onChange(cart.id, count, -cart.option.price);
                        }}
                        quantity={( cart.quantity )}
                    />
                    <div className="price">
                        <span>{comma(cart.option.price * cart.quantity)}원</span>
                    </div>
                </div>
                </Card>
            ))}
            <div className="horizontal-line"></div>
            <Card className="total-price">
                <div className="row">
                    <h5>주문 예상 금액</h5>
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
    )
}

export default CartItem;