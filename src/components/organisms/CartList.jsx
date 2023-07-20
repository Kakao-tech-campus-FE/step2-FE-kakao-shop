import {useEffect, useState} from "react";
import Container from "../atoms/Container";
import Box from "../atoms/Box";
import Card from "../atoms/Card";
import CartItem from "../molecules/CartItem";
import {comma} from "../../utils/convert";

const CartList = ({data}) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        setCartItems(data?.data?.response?.products);
        setTotalPrice(data?.data?.response?.totalPrice);
    }, [data])

    const handleTotalPrice = () => {
        console.log("cartItem", cartItems)
        let totalPrice = 0;
        cartItems.forEach((item) => {
            item.carts.forEach((cart) => {
                totalPrice += cart.option.price * cart.quantity;
            })
        })
        return totalPrice;
    }
    const handleOnChangeCount = (optionId, quantity, price) => {
        setTotalPrice(handleTotalPrice());
        setCartItems((prev) => {
            return prev.map((item) => {
                return {
                    ...item,
                    carts: item.carts.map((cart) => {
                        if (cart.id === optionId) {
                            return {
                                ...cart,
                                quantity: quantity,
                            }
                        } else {
                            return cart;
                        }
                    })
                }
            })
        })
    }
    return (
        <div className={"cart-list max-w-xl flex flex-col items-center"}>
            <div className={"h-20 flex items-center"}>
                <h1 className={"text-3xl font-bold"}>장바구니</h1>
            </div>
            <div>
                {Array.isArray(cartItems) &&
                    cartItems.map((item) => {
                        return (
                            <CartItem
                                key={item.id}
                                item={item}
                                onChange={handleOnChangeCount} // 개수 변경을 관리
                            />
                        );
                    })}
            </div>
            <div>
                <span>최종 금액</span>
                <span>{comma(totalPrice)}원</span>
            </div>
        </div>
    )
}

export default CartList;