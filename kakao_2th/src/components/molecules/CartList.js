import { useEffect, useState } from "react"
import Container from "../atoms/Container"
import Box from "../atoms/Box/index.js"
import Card from "../atoms/Card"
import CartItem from "../atoms/CartItem"


const CartList = ({ data }) => {
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrices] = useState(0)

    useEffect(() => {
        setCartItems(data?.data?.response?.products)
        setTotalPrices(data?.data?.response?.totalPrice)
    }, [data])

    /**
     * 
     * @param {number} optionId : 옵션의 아이디
     * @param {number} quantity : 옵션의 수량
     * @param {number} price : 옵션 금액
     */

    const handleOnChangeCount = (optionId, quantity, price) => {
        setTotalPrices((prev) => prev + price)
        setCartItems((prev) => {
            return prev.map((item) => {
                return {
                    ...item,
                    carts: item.cart.map((cart) => {
                        if (cart.id === optionId) {
                            return { ...cart, quantity }
                        }
                    })
                }
            })
        })
    }
    return (
        <Container className="cart-list">
            <Box>
                <h1>장바구니</h1>
            </Box>
            <Card>
                {Array.isArray(cartItems) &&
                    cartItems.map((item) => {
                        return (
                            <CartItem
                                key={item.id}
                                item={item}
                                onChange={handleOnChangeCount}
                            />
                        )
                    })}
            </Card>
        </Container>
    )
}