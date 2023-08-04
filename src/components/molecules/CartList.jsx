import { useCallback, useEffect, useRef, useState } from 'react';
import Container from '../atoms/Container';
import Box from '../atoms/Box';
import Button from '../atoms/Button';
import CartItem from '../atoms/CartItem';
import { comma } from '../../utils/convert';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { updateCart } from '../../services/cart';
import URL from '../../constants/URL';
import Title from '../atoms/Title';

const CartList = ({ data }) => {
    const navigate = useNavigate();
    // 장바구니에서 수량 변경이 가능
    // 장바구니 수량 변경 api 요청 > 변경된 후에
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    // 렌더링에 관여하지 않은 상태값은 useRef()를 사용할 수 있음
    const updatePayload = useRef([]);
    const initCartItems = useRef([]);

    const setUpdatePayload = (updater) => {
        updatePayload.current = updater(updatePayload.current);
    };

    const { mutate } = useMutation({
        mutationFn: updateCart,
    });

    useEffect(() => {
        const { products, totalPrice } = data?.data?.response || {};

        setCartItems(products);
        initCartItems.current = products;
        setTotalPrice(totalPrice);
    }, [data]);

    const getTotalCartCountIncludeOptions = useCallback(() => {
        let count = 0;
        cartItems.forEach((item) => {
            item.carts.forEach((cart) => {
                count += cart.quantity; // 개별 옵션에 해당
            });
        });
        return comma(count);
    }, [cartItems]);

    /**
     * 옵션의 수량 변경과 가격 변경을 관리하는 함수
     * @param {number} optionId : 옵션 아이디
     * @param {number} quantity : 옵션 수량
     * @param {number} price : 옵션 가격
     */
    const handleOnChangeCount = (cartId, quantity, price) => {
        // 이 함수가 실행된 부분만 수량 변경이 생김
        setUpdatePayload((prev) => {
            // 바뀐 수량이 initPayload와 동일할 때 예외처리
            const initQuantity = initCartItems.current.map((carts) => {
                carts.carts.map((cart) => {
                    if (cart.id === cartId) return cart.quantity;
                });
            });
            if (initQuantity === quantity) {
                return prev.filter((item) => item !== cartId);
            }

            // 원래 선택된 옵션일 때 예외처리
            const isExist = prev.find((item) => item.cartId === cartId);
            if (isExist) {
                return [...prev.filter((item) => item.cartId !== cartId), { cartId, quantity }];
            }

            return [...prev, { cartId, quantity }];
        });

        setTotalPrice((prev) => prev + price);
        setCartItems((prev) => {
            return prev.map((item) => {
                return {
                    ...item,
                    carts: item.carts.map((cart) => {
                        if (cart.id === cartId) {
                            return { ...cart, quantity };
                        }
                        return cart;
                    }),
                };
            });
        });
    };

    return (
        <Container className="cart-list" direction="column" gap={'1rem'}>
            <div>
                <Title>장바구니</Title>
            </div>
            <Box width="80%" direction="column" gap="1rem" className="min-h-[4rem]">
                {/* 상품별 장바구니 */}
                {Array.isArray(cartItems) &&
                    cartItems.map((item) => {
                        return (
                            <CartItem key={item.id} item={item} onChange={handleOnChangeCount} />
                        );
                    })}
            </Box>
            <Box width="80%">
                <div className="row">
                    <span className="expect">주문 예상금액</span>
                    <div className="sum-price">{comma(totalPrice)}원</div>
                </div>
            </Box>
            <Button
                onClick={() => {
                    // 장바구니 정보를 수정하는 api 호출 (개수 변경이 있는 경우)
                    mutate(updatePayload.current, {
                        onSuccess: () => {
                            // 주문 페이지로 이동
                            navigate(URL.ORDER);
                        },
                        onError: () => {},
                    });
                }}
            >
                총 {getTotalCartCountIncludeOptions()}건 주문하기
            </Button>
        </Container>
    );
};

export default CartList;
