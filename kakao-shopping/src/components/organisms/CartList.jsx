import { useCallback, useEffect, useRef, useState } from "react";
import Container from "../atoms/Container";
import Box from "../atoms/Box";
import Card from "../atoms/Card";
import Button from "../atoms/Button";
import CartItem from "../molecules/CartItem";
import Label from "../atoms/Label";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { comma } from "../../utils/convert";
import { updateCart } from "../../services/cart";

const CartList = ({ data }) => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    // 렌더링 관여 X
    const updatePayload = useRef([]);

    const { mutate } = useMutation({
        mutationFn: updateCart,
    });

    useEffect(() => {
        setCartItems(data?.data?.response?.products);
        setTotalPrice(data?.data?.response?.totalPrice);
    }, [data]);

    const handleOnChangeCount = (optionId, quantity, price) => {
        const isExist = updatePayload.current.find((item) => {
            return item.cartId === optionId;
        });

        console.log(isExist);

        if (isExist) {
            updatePayload.current = [
                ...updatePayload.current.filter(
                    (item) => item.cartId !== optionId
                ),
                {
                    cartId: optionId,
                    quantity,
                },
            ];
        } else {
            updatePayload.current = [
                ...updatePayload.current,
                {
                    cartId: optionId,
                    quantity,
                },
            ];
        }

        setTotalPrice((prev) => prev + price);
        setCartItems((prev) => {
            return prev.map((item) => {
                return {
                    ...item,
                    carts: item.carts.map((cart) => {
                        if (cart.id === optionId) {
                            return { ...cart, quantity };
                        }
                        return cart;
                    }),
                };
            });
        });
    };

    const getTotalCartCountIncludeOptions = useCallback(() => {
        let count = 0;
        cartItems?.forEach((item) => {
            item?.carts.forEach((cart) => {
                count += cart.quantity;
            });
        });
        return comma(count);
    }, [cartItems]);

    return (
        <main className="cart-container d-flex flex-column h-100 mx-auto">
            <Box>
                <Label className="fs-5 fw-bold">장바구니</Label>
            </Box>
            <Container>
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
            </Container>
            <Card>
                <div className="d-flex justify-content-between m-2  fw-bold">
                    <span className="expect">주문 예상금액</span>
                    <div className="sum-price text-primary">
                        {comma(totalPrice)}원
                    </div>
                </div>
            </Card>
            <Button
                className="order-btn bg-kakao p-2"
                onClick={() => {
                    mutate(updatePayload.current, {
                        onSuccess: (data) => {
                            console.log(data);
                            navigate("/order");
                        },
                        onError: (error) => {
                            console.log(error);
                        },
                    });
                }}
            >
                <span>총 {getTotalCartCountIncludeOptions()}건 주문하기</span>
            </Button>
        </main>
    );
};

export default CartList;
