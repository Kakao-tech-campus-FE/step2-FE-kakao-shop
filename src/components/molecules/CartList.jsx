import Box from './../atoms/Box';
import CartItem from '../atoms/CartItem';
import { comma } from './../../utils/comma';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { useMutation } from '@tanstack/react-query';
import { updateCart } from '../services/cart';
import { styled } from 'styled-components';
import { getCart } from '../services/cart';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { cartNoItemMessage } from '../../utils/constants';

const CartList = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [updatePayload, setUpdatePayload] = useState([]);
    const { data } = useQuery(["/cart"], getCart);

    const { mutate } = useMutation({
        mutationFn: updateCart,
        onSuccess: () => {
            // 업데이트된 사항이 바로 적용되지 않아서 고의로 window.location.href 사용
            // CartItem 내부 함수 분리 후 업데이트 내용이 잘 적용되어 navigate로 복귀
            // console.log("업데이트 내역", updatePayload);
            // console.log("최종 카트 아이템 내역", cartItems);
            navigate("/order");
        },
        onError: (error) => {
            // console.log(error.status);
            // 만약 에러가 발생할 경우 대부분 interceptor 단에서 처리하도록 함(에러 메시지 출력)
            // 401 에러(인증 에러)의 경우 : 로그인 페이지로의 리다이렉트 발생
            // 401 에러일 경우에는 error 페이지 리다이렉트가 아닌 interceptor에서 로그인페이지로 리다이렉트
            // 404 에러 : 에러 메세지 확인 + 에러 페이지로 이동
            // 그 외 에러 : 에러 메세지 확인 + 에러 페이지로 이동
            if (error.status !== 401) {
                navigate("/error");
            }
        }
    })

    useEffect(() => {
        setCartItems(data?.data?.response?.products);
        setTotalPrice(data?.data?.response?.totalPrice);
    }, [data])

    // 옵션 수량 변경 & 가격 변경 관리 함수
    // 옵션의 아이디 / 옵션 수량 / 옵션 가격
    const handleOnChangeCount = (optionId, quantity, price) => {
        // console.log("handleOnChangeCount", optionId, quantity, price);
        // 옵션이 변경된 경우에는 payload가 변경된 것이므로 이 부분을 활용
        setUpdatePayload((prev) => {
            return prev.filter(item => item.cartId !== optionId).concat({ cartId: optionId, quantity });
        });
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

    const handleOnDeleteCount = (optionId, quantity, price) => {
        // console.log("handleOnDeleteCount", optionId, quantity, price);
        setUpdatePayload((prev) => {
            return prev.filter(item => item.cartId !== optionId).concat({ cartId: optionId, quantity });
        });
        setTotalPrice((prev) => prev - price);
        setCartItems((prev) => {
            return prev.map((item) => {
                return {
                    ...item,
                    carts: item.carts.map((cart) => {
                        if (cart.id === optionId) {
                            return { ...cart, quantity:quantity }
                        }
                        return cart;
                    })
                }
            })
        })
    }

    const getTotalCartCount = useCallback(() => {
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
        <CartContainer>
            <TitleBox>
                <h1>장바구니</h1>
            </TitleBox>
            <ContentBox>
                <Box>
                    {Array.isArray(cartItems) && cartItems.map((item) => {
                        return (
                            <CartItem 
                                key={item.id}
                                item={item}
                                onChange={handleOnChangeCount}
                                onDelete={handleOnDeleteCount}
                            />
                        )
                    })}
                </Box>
                <CartTotalPriceBox>
                    <div className="row">
                        <span className="expect">총 주문 예상금액(총 {getTotalCartCount()}건)</span>
                        <div className="sum-price">{comma(totalPrice)}원</div>
                    </div>
                </CartTotalPriceBox>
                <PayButton 
                    className="order-btn"
                    onClick={() => {
                        // cart 업데이트(update cart API) 
                        // 주문 페이지 이동(navigate)
                        // post 요청
                        if(totalPrice === 0) {
                            Swal.fire(cartNoItemMessage);
                            navigate("/")
                        } else {
                            mutate(updatePayload)
                        }
                    }}
                >
                총 {getTotalCartCount()}건 주문하기(결제하기)
                </PayButton>
            </ContentBox>
        </CartContainer>
    );
};

export default CartList;

const CartContainer = styled.div`
    border: 1px solid #ddd;
    width: 70%;
    margin: 50px 0 50px 0;
    box-sizing: border-box;
`

const TitleBox = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #ddd;
    & > h1 {
        font-size: 2rem;
    }
`

const ContentBox = styled.div`
    padding: 20px;
    background-color: #00000014;
`

const PayButton = styled.div`
    width: 100%;
    padding: 8px 0 8px 0;
    background-color: #ffe100;
    text-align: center;
    cursor: pointer;
`
const CartTotalPriceBox = styled.div`
    background-color: #fff;
    padding: 8px 5px 8px 5px;
`

// 결제 프로세스
// 1. 장바구니에 있는 모든 항목을 그대로 결제 페이지에 담는다
// 2. 결제 페이지에서는 수량 변경이 불가능 하며, 그대로 결제 진행만 가능하다.