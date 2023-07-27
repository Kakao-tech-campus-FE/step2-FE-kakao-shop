import React, { useCallback } from "react"
import { useState, useEffect } from "react"
import Card from "../atoms/Card"
import { comma } from "../../utils/convert"
import Button from "../atoms/Button"
import Container from "../atoms/Container"
import Box from "../atoms/Box"

const CartList = ({data}) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setCartItems(data?.data?.response?.products);
        setTotalPrice(data?.data?.response?.totalPrice);
    }, [data])

    const getTotalCartCountIncludeOptions = useCallback(() => {
        let count = 0;
        cartItems.forEach((item) => {
            item.carts.forEach((cart) => {
                count += cart.quantity
            })
        })
        return count
    }, [cartItems])
    const handleOnChangeCount = (optionId, quantity, price) => {
        setTotalPrice((prev) => prev+price);
        setCartItems((prev) => {
            return prev.map((item) => {
                return {
                    ...item,
                    carts: item.carts.map((cart) => { 
                        if (cart.id === optionId){
                            return { ...cart, quantity };
                        }
                        return cart;
                    })
                }
            })
        })
        return(
            <Container className="cart-list">
                <Box>
                    <h1>장바구니</h1>
                </Box>
                <Card>
                </Card>
                <div className="row">
                    <span className="expect">주문 예상금액</span>
                    <div className="sum-price">{comma(totalPrice)}원</div>
                </div>
                <Button className="order-btn"/>
                <span>총 {getTotalCartCountIncludeOptions}건 주문하기</span>
            </Container>
        )    
    }

}

export default CartList