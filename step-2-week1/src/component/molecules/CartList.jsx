import { useState, useEffect, useCallback, useRef } from "react";
import { Router, useNavigate } from "react-router-dom";
import Container from "../atoms/Container";
import Box from "../atoms/Box";
import CartItem from "../atoms/CartItem";
// import "../../styles/molcules/CartList.css";
import Card from "../atoms/Card";
import { comma } from "../../utils/convert";
import Button from "../atoms/Button";
import { useMutation } from "react-query";
import { updateCart, getCart } from "../../services/cart";


const CartList = () => {
    const route = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [updatePayload, setUpdatePayload] = useState([]);

    const initPayload = useRef([]);

    const { mutate } = useMutation({
        mutationFn: updateCart,
    });

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await getCart();
            const jsonData = await response.data.response;


    
            setCartItems(jsonData.products);
            setTotalPrice(jsonData.totalPrice);
          } catch (error) {
            console.log(`Error fetching data:`, error);
          }
        };
        fetchData();
      }, []);

    

    const getTotalCartCountIncludeOptions = useCallback(() => {
        let count = 0;
        cartItems.forEach((item) => {
            item.carts.forEach((cart) => {
                count += cart.quantity; // 개별 옵션에 해당
            });
        });
        return comma(count);
    }, [cartItems]);


    const handleOnChangeCount = (optionId, quantity, price) => {
        // 이 함수가 실행된 부분만 수량 변경이 생긴 것

        setUpdatePayload((prev) => {
            const isExist = prev.find((item) => item.cartId === optionId);

            if (isExist) {
                return [
                    ...prev.filter((item) => item.cartId !== optionId ),
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
                },
            ];
        });

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
    return (
        <Container className="cart-list">
            <Box>
                <h1>장바구니</h1>
            </Box>
            <Card>
                {/* 상품별 장바구니 */}
                {Array.isArray(cartItems) && cartItems.map((item) => {
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
            <Button
                className="order-btn"
                onClick={() => {
                    // update cart api
                    // 장바구니 정보를 수정하는 api 호출 (개수 변경이 있는 경우)
                    // post method


                    mutate(updatePayload, {
                        onSuccess: (data) => {
                        // navigate to order page
                        route.push("/order");


                        },
                        onError: (error) => {

                        },
                    });


                }}
            >
                <span>
                    총 {getTotalCartCountIncludeOptions()}건 주문하기
                </span>
            </Button>
        </Container>
    )
}

export default CartList;