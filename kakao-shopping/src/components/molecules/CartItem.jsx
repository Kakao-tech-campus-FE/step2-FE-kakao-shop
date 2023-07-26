import Box from "../atoms/Box";
import Card from "../atoms/Card";
import Counter from "../atoms/Counter";
import Label from "../atoms/Label";
import Button from "../atoms/Button";
import { comma } from "../../utils/convert";

const CartItem = ({ item, onChange }) => {
    if (item.carts?.reduce((acc, cur) => acc + cur.quantity, 0) > 0) {
        return (
            <Box className="cart-item-box">
                <Label className="fs-6 fw-bold">{item.productName}</Label>
                {item.carts?.map((cart) => {
                    if (cart.quantity > 0) {
                        return (
                            <Card key={cart.id} className="cart p-2">
                                <div className="option-name text-start ps-1">
                                    <span>{cart.option.optionName}</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex">
                                        <Button
                                            className="px-3 mx-1"
                                            onClick={() => {
                                                onChange(
                                                    cart.id,
                                                    0,
                                                    -cart.quantity *
                                                        cart.option.price
                                                );
                                            }}
                                        >
                                            삭제
                                        </Button>
                                        <Counter
                                            value={cart.quantity}
                                            onChange={(count) => {
                                                if (count > 0) {
                                                    onChange(
                                                        cart.id,
                                                        count,
                                                        (count -
                                                            cart.quantity) *
                                                            cart.option.price
                                                    );
                                                }
                                            }}
                                        ></Counter>
                                    </div>
                                    <Label className="fs-6 fw-bold">
                                        {comma(
                                            cart.quantity * cart.option.price
                                        )}
                                        원
                                    </Label>
                                </div>
                            </Card>
                        );
                    }
                })}
                <Card className="total-price mt-2">
                    <div className="d-flex justify-content-between align-items-center fs-6 fw-bold p-2">
                        <Label>주문금액</Label>
                        <div className="price">
                            {comma(
                                item.carts?.reduce((acc, cur) => {
                                    return (
                                        acc + cur.option.price * cur.quantity
                                    );
                                }, 0)
                            )}
                            원
                        </div>
                    </div>
                </Card>
            </Box>
        );
    }
};

export default CartItem;
