import {useEffect, useState} from "react";
import Container from "../atoms/Container";
import Box from "../atoms/Box";
import Card from "../atoms/Card";
import CartItem from "../molecules/CartItem";

const CartList = ({data}) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setCartItems(data?.data?.response?.products);
        setTotalPrice(data?.data?.response?.totalPrice);
    }, [data])

    const handleOnChangeCount = (optionId, quantity, price) => {
        setTotalPrice((prev) => prev + price);
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
        <Container className={"cart-list"}>
                <h1>장바구니</h1>
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
        </Container>
    )
}

export default CartList;