import Counter from "../atoms/Counter";
import {comma} from "../../utils/convert";
import {RxCross2} from "react-icons/rx";

const CartItem = ({item, onChange}) => {
    console.log("item", item)

    const getItemAmount = () => {
        let amount = 0;
        item?.carts.forEach((cart) => {
            amount += cart.quantity
        })
        return amount;
    }

    return getItemAmount() !== 0 && (
        <div className={"cart-item m-5 p-5 text-left bg-light-gray-900"}>
            <h5 className={"text-lg"}>{item.productName}</h5>
            {item.carts.map((cart) =>
                 cart.quantity !== 0 && (
                    <div
                        key={cart.id}
                        className={"cart-item pb-5 px-5 m-3 border-s-4 border-light-gray-700"}>
                        <button className={"del-button flex  w-full justify-end items-end"}
                                onClick={ () => onChange(cart.id, 0, -cart.quantity*cart.option.price)}
                            >
                            <RxCross2 className={"text-right"}/>
                        </button>
                        <div className="option-name flex flex-row justify-between my-2">
                            <span>{cart.option.optionName}</span>
                            <span>{comma(cart.option.price)}원</span>
                        </div>

                        <div className={"row flex flex-row"}>
                            <div className="option-count w-32">
                                <Counter
                                    value={cart.quantity}
                                    handleOnChange={(value) => {
                                        return onChange(cart.id, value, (value - cart.quantity) * cart.option.price)
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