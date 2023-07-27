import React, { useCallback, useState } from "react";
import Container from "../atoms/Container";
import Box from "../atoms/Box";
import Card from "../atoms/Card";
import CartItem from "../atoms/CartItem";
import { comma } from "../../utils/convert";
import Button from "../atoms/Button";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { updateCart, getCart } from "../services/cart";
import "../../styles/Molecules/CartList.css";

const CartList = () => {
    const route = useNavigate();
    const { data, isLoading } = useQuery("cart", getCart);

    const initialCartItems = data?.response?.products || []; // 수정: 초기값 설정
    const initialTotalPrice = data?.response?.totalPrice || 0; // 수정: 초기값 설정

    const [cartItems, setCartItems] = useState(initialCartItems);
    const [totalPrice, setTotalPrice] = useState(initialTotalPrice);
    const [updatePayload, setUpdatePayload] = useState([]);

    const { mutate } = useMutation({
        mutationFn: updateCart,
    });

    const getTotalCartCountIncludeOptions = useCallback(() => {
        let count = 0;
        cartItems.forEach((item) => {
            item.carts.forEach((cart) => {
                count += cart.quantity;
            });
        });
        return comma(count);
    }, [cartItems]);

    const handleOnChangeCount = (cartId, quantity, price) => {
        setUpdatePayload((prev) => {
            const isExist = prev.find((item) => item.cartId === cartId);

            if (isExist) {
                return [
                    ...prev.filter((item) => item.cartId !== cartId),
                    {
                        cartId: cartId,
                        quantity: quantity,
                    },
                ];
            }

            return [
                ...prev,
                {
                    cartId: cartId,
                    quantity: quantity,
                },
            ];
        });

        setTotalPrice((prev) => prev + price);
        setCartItems((prev) => {
            return prev.map((item) => {
                return {
                    ...item,
                    carts: item.carts.map((cart) =>
                        cart.id === cartId ? { ...cart, quantity: quantity } : cart
                    ),
                };
            });
        });
    };

    const handleOrderButtonClick = () => {
        mutate(updatePayload, {
            onSuccess: (data) => {
                route("/order");
            },
            onError: (error) => {
                // 에러 처리 로직
            },
        });
    };

    if (isLoading) {
        return <div>Loading...</div>;
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
                        );
                    })}
            </Card>
            <Card>
                <div className="row">
                    <span className="expect">주문 예상금액</span>
                    <div className="sum-price">{comma(totalPrice)}원</div>
                </div>
            </Card>
            <Button className="order-btn" onClick={handleOrderButtonClick}>
                <span>총 {getTotalCartCountIncludeOptions()}건 주문하기</span>
            </Button>
        </Container>
    );
};

export default CartList;
