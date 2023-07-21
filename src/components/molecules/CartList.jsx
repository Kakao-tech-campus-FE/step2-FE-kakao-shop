import Container from './../atoms/Container';
import Box from './../atoms/Box';
import Button from './../atoms/Button';
import CartItem from '../atoms/CartItem';
import { comma } from './../../utils/comma';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { useMutation } from '@tanstack/react-query';
import { updateCart } from '../services/cart';

const CartList = ({ data }) => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [updatePayload, setUpdatePayload] = useState([]);
    
    const { mutate } = useMutation({
        mutationFn: updateCart,
    })

    useEffect(() => {
        setCartItems(data?.data?.response?.products);
        setTotalPrice(data?.data?.response?.totalPrice);
    }, [data])

    // 옵션 수량 변경 & 가격 변경 관리 함수
    // 옵션의 아이디 / 옵션 수량 / 옵션 가격
    const handleOnChangeCount = (optionId, quantity, price) => {
        // 옵션이 변경된 경우에는 payload가 변경된 것이므로 이 부분을 활용
        setUpdatePayload((prev) => {
            const isExist = prev.find((item) => item.cartId === optionId);

            if (isExist) {
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
                        // 우리가 선택한 옵션 id와 같을때만 해당 로직 작동(옵션 수정)
                        if (cart.id === optionId) {
                            return { ...cart, quantity }
                        }
                        return cart;
                    })
                }
            })
        })
    }

    const getTotalCartCount =  useCallback(() => {
        // console.log(cartItems);
        // 초기 렌더링 시 중간에 undefined가 되는 순간이 있어 cartItems이 존재할때만 실행
        let count = 0;
        if (cartItems) {
            cartItems.forEach((item) => {
                item.carts.forEach((cart) => {
                    count += cart.quantity;
                })
            })
        }
        return comma(count);
    }, [cartItems])

    return (
        <Container className="cart-list">
            <Box>
                <h1>장바구니</h1>
            </Box>
            <Box>
                {Array.isArray(cartItems) && cartItems.map((item) => {
                    return (
                        <CartItem 
                            key={item.id}
                            item={item}
                            onChange={handleOnChangeCount}
                        />
                    )
                })}
            </Box>
            <Box>
                <div className="row">
                    <span className="expect">주문 예상금액</span>
                    <div className="sum-price">{comma(totalPrice)}원</div>
                </div>
            </Box>
            <Button 
                className="order-btn"
                onClick={() => {
                    // cart 업데이트(update cart API) 
                    // 주문 페이지 이동(navigate)
                    // post 요청
                    mutate(updatePayload, {
                        onSuccess: (data) => {
                            navigate("/order");
                        },
                        onError: (error) => {
                            alert(error);
                        }
                    })
                }}
            >
            <span>총 {getTotalCartCount()}건 주문하기(결제하기)</span>
            </Button>
        </Container>
    );
};

export default CartList;

// 결제 프로세스
// 1. 장바구니에 있는 모든 항목을 그대로 결제 페이지에 담는다
// 2. 결제 페이지에서는 수량 변경이 불가능 하며, 그대로 결제 진행만 가능하다.