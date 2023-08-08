import { Card } from "react-bootstrap";
import Box from "./Box";
import Counter from "./Counter";
import { comma } from "../../utils/convert";

// 각 상품 별 장바구니 항목
//여러 옵션이 저장될 수 있음
const CartItem = ({ item, onChange }) => {

    return (
        <Box className="border p-12 mb-4">
            <span className="text-lg font-bold">{item.productName}</span>
            {item.carts.map((cart) => (
                <Card key = {cart.id} className="p-4 border my-1">
                    <div className="mb-2">
                        <span>{cart.option.optionName}</span>
                    </div>
                    <div className="flex place-content-between">
                        <Counter
                            option={cart}
                            onIncrease={onChange}
                            onDecrease={onChange}
                        />
                        <div className="flex">
                            <span className="text-center leading-8"><span className="font-bold">{comma(cart.option.price * cart.quantity)}</span>원</span>
                        </div>
                    </div>
                </Card>
            ))}
            <Card className="total-price">
                <div className="flex place-content-between mt-4 p-4 border bg-neutral-100">
                    <h5 className="font-bold text-lg">주문금액</h5> 
                    <div className="font-bold text-lg">
                        {comma(
                            item.carts.reduce((acc, cur) => {
                                return acc + cur.option.price * cur.quantity;
                            }, 0)
                        )}원
                    </div>
                </div>
            </Card>
        </Box>
    )
}

export default CartItem;