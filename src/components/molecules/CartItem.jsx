import Card from "../atoms/Card";
import Counter from "../atoms/Counter";
import {comma} from "../../utils/convert";

const CartItem = ({item, onChange}) => {
    return (
        <div>
            <button onClick={() => {
                console.log("item", item)
            }}>
                info
            </button>
            <h5>{item.productName}</h5>
            {item.carts.map((cart) =>
                (
                    <div
                        key={cart.id}
                        className={"cart-item"}>
                        <div className="option-name">
                            <span>{cart.option.optionName}</span>
                            <span>{comma(cart.option.price)}원</span>
                        </div>

                        <div className={"row"}>
                            <Counter
                                value={cart.quantity}
                            />
                            <div className="option-price">
                                <span>{comma(cart.option.price * cart.quantity)}원</span>
                            </div>
                        </div>
                    </div>
                )
            )}
            <div className={"cart-price"}>
                <div className="row">
                    <h5>주문금액</h5>
                    <div className={"price"}>
                        {comma(
                            item.carts.reduce((acc, cur) => {
                                return acc + cur.option.price * cur.quantity;
                            }, 0)
                        )}원
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;