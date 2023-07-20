import Card from "../atoms/Card";
import Counter from "../atoms/Counter";
import {comma} from "../../utils/convert";

const CartItem = ({item, onChange}) => {
    return (
        <div className={"cart-item m-5 p-5 text-left bg-light-gray-900"}>
            <h5 className={"text-lg"}>{item.productName}</h5>
            {item.carts.map((cart) =>
                (
                    <div
                        key={cart.id}
                        className={"cart-item p-3 my-3 border-s-4 border-light-gray-700"}>
                        <div className="option-name flex flex-row justify-between my-2">
                            <span>{cart.option.optionName}</span>
                            <span>{comma(cart.option.price)}원</span>
                        </div>

                        <div className={"row flex flex-row"}>
                            <div className="option-count w-32">
                            <Counter
                                value={cart.quantity}
                                handleOnChange={(value) => {
                                    return onChange(cart.id, value, cart.price)
                                }}
                            />
                            </div>
                            <div className="option-price w-full text-right">
                                <span>{comma(cart.option.price * cart.quantity)}원</span>
                            </div>
                        </div>
                    </div>
                )
            )}
            <div className={"cart-price text-right"}>
                <div className="row">
                    <h5>주문금액</h5>
                    <div className={"price font-medium"}>
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