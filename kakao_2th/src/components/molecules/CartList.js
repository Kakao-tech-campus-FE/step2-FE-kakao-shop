import { useCallback, useEffect, useState } from "react"
import Container from "../atoms/Container"
import Box from "../atoms/Box/index.js"
import Card from "../atoms/Card"
import CartItem from "../atoms/CartItem"
import { comma } from "../../utils/convert"
import Button from "../atoms/Button"
import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom"


const CartList = ({ data }) => {
    const route = useNavigate()
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrices] = useState(0)
    const [updatePayload, setUpdatePayload] = useState([])

    const { mutate } = useMutation({
        mutationFn: updateCart,
    })

    useEffect(() => {
        setCartItems(data?.data?.response?.products)
        setTotalPrices(data?.data?.response?.totalPrice)
    }, [data])

    const getTotalCartCountIncludeOptions = useCallback(() => {
        let count = 0
        cartItems.forEach((item) => {
            item.carts.forEach((cart) => {
                count += cart.quantity
            })
        })
        return comma(count)
    }, [cartItems])

    /**
     * 
     * @param {number} optionId : 옵션의 아이디
     * @param {number} quantity : 옵션의 수량
     * @param {number} price : 옵션 금액
     */

    const handleOnChangeCount = (optionId, quantity, price) => {

        setUpdatePayload((prev) => {
            const isExist = prev.find((item) => item.cartId === optionId)

            if (isExist) {
                return [
                    ...prev.filter((item) => item.cartId !== optionId),
                    {
                        cartId: optionId,
                        quantity
                    }
                ]
            }

            return [
                ...prev,
                {
                    cartId: optionId,
                    quantity
                }
            ]
        })

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
            <Card>
                <div className="row">
                    <span className="expect">주문 예상금액</span>
                    <div className="sum-price">{comma(totalPrice)}원</div>
                </div>
            </Card>
            <Button
                className="order-btn"
                onClick={() => {
                    mutate(updatePayload, {
                        onSuccess: (data) => {
                            route.push("/order")
                        },
                        onError: (error) => { },
                    })
                }}
            >
                <span>총 {getTotalCartCountIncludeOptions()}건 주문하기
                </span>
            </Button>
        </Container>
    )
}

export default CartList