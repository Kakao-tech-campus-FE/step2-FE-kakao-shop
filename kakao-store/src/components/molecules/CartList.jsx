import { useCallback, useEffect, useRef, useState } from "react";
import Container from "../atoms/Container";
import Card from "../atoms/Card";
import CartItem from "../atoms/CartItem";
import { comma } from "../../utils/convert";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import Box from "../atoms/Box";
import { updateCart } from "../../apis/cart";

const CartList = ({ data }) => {
    const route = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [updatePayload, setUpdatePayload] = useState([]);
    const initPayload = useRef([]);

    const { mutate } = useMutation({
        mutationFn: updateCart,
    });

    useEffect(() => {
        setCartItems(data?.data?.response?.products);
        setTotalPrice(data?.data?.response?.totalPrice);
    }, [data]);

    /**
     * 옵션의 수량 변경과 가격 변경을 관리
     * @param {number} optionId : 옵션의 아이디
     * @param {number} quantity : 옵션 수량
     * @param {number} price : 옵션 금액
     */
    const  handleOnChangeCount = (optionId, quantity, price) => {
        setUpdatePayload((prev) => {
            const isExist = prev.find((item) => item.cartId === optionId);

            if(isExist) {
                return [
                    ...prev.filter((item) => item.cartId !== optionId),
                    {
                        cartId: optionId,
                        quantity,
                    }
                ]
            }
            return [
                ...prev,
                {
                    cartId: optionId,
                    quantity,
                }
            ]
        })

        setTotalPrice((prev) => prev + price);
        setCartItems((prev) => {
            return prev.map((item) => {
                return {
                    ...item,
                    carts: item.carts.map((cart) => {
                        if(cart.id === optionId) {
                            return {...cart, quantity};
                        }
                        return cart;
                    }),
                };
            });
        });
    };

    const getTotalCartCountIncludeOptions = useCallback(() => {
        let count = 0;

        if(cartItems === undefined) return 0;

        cartItems.forEach((item) => {
            item.carts.forEach((cart) => {
                count += cart.quantity; // 개별 옵션에 해당
            });
        });
        return comma(count);
    }, [cartItems]);

    return (
        <Container className="flex flex-col items-center justify-center">
            <Box>
                <h1>장바구니</h1>
            </Box>
            <Card>
                {/* 상품별 장바구니 */}
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
                <div className="p-2 mt-2 mx-2 border w-[800px]">
                    <span className="">주문 예상금액 </span>
                    <span className="float-right">{comma(totalPrice)}원</span>
                </div>
            </Card>
            <Button
                className="p-2 mx-2 border w-[800px] bg-yellow-300"
                onClick={() => {
                    // update cart
                    // 장바구니 정보를 수정하는 api 호출(개수 변경이 있는 경우에)
                    // post method
                    
                    mutate(updatePayload, {
                        onError: (error) => {
                            console.log(error);
                            alert("주문에 실패하였습니다.");
                        },
                        onSuccess: (data) => {
                            // navigate to order page
                            route("/order");
                        }
                    })

                    // 결제 프로세스
                    // 1. 장바구니에 있는 모든 항목 그대로 결제 페이지에 담김
                    // 2. 결제 페이지에서는 수량 변경 X, 그대로 결제 진행만 가능
                }}
            >
                <span>총 {getTotalCartCountIncludeOptions()}건 주문하기</span>
            </Button>
        </Container>
    );
}

export default CartList;