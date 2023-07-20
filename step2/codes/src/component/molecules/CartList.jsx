import { useCallback, useEffect, useState } from "react";
import CartItem from "../atoms/CartItem";
import Container from "../atoms/Container";
import Button from "../atoms/Button";
import Box from "../atoms/Box";
import Card from "../atoms/Card";
import { comma } from "../../utils/convert"; 
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { updateCart } from "../../services/Cart";


const CartList = ({ data }) => {
    const route = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice ] = useState(0);
    const [updatePayload, setUpdatePayload ] = useState([]);
    // const initPayload = useRef([]);

    const { mutate } = useMutation({
        mutationFn: updateCart,
    });

    useEffect(() => {
        //validate 또는 구조분해할당 하면 더 좋음 
        setCartItems(data?.data?.response?.products);
        setTotalPrice(data?.data?.response?.totalPrice);
    }, [data])


    const getTotalCartCountIncludeOptions = useCallback(() => {
        let count = 0;
        cartItems.forEach((item) => {
            item.carts.forEach((cart) => {
                count += cart.quantity;
            });
        });
        return comma(count);
    }, [cartItems]); 

    /**
     * 옵션의 수량 변경과 가격 변경을 관리
     * @param {number} optionId : 옵션 아이디
     * @param {number} quantity : 옵션 수량
     * @param {number} price : 옵션 가격
     */
    const handleOnChangeCount = (optionId, quantity, price ) => {

        setUpdatePayload((prev) => {
            const isExist = prev.find((item) => item.cartID===optionId);
            if (isExist) {
                return [
                    ...prev.filter((item) => item.cartID !== optionId),
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
                    carts: item.carts.map((cart) =>{
                        if (cart.id === optionId) {
                            return {...cart, quantity};
                        }
                        return cart;
                    })
                }
            })
        })
    };

    return (
        <Container className="cart-list">
            <Box><h1>장바구니</h1></Box>
            <Card>
                {/* 상품별 장바구니 */}
                {Array.isArray(cartItems) &&
                    cartItems.map((item) => {
                        return (
                            <CartItem 
                                key={item.id}
                                item = {item}
                                onChange = {handleOnChangeCount}
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
            <Button className="order-btn"
                onClick={() => {
                    //update cart api 장바구니 정보 수정 api
                    //post
                    //1. ㅈㄴ체 장가

                    mutate(updatePayload, {
                        onSuccess: (data) => {
                            //navicate to order page 주문 페이지이동
                            route.push("order");
                        },
                        onError: (error) => {
                             
                        }
                    });

                }}    
            >
                <span>총 {cartItems ? getTotalCartCountIncludeOptions() : 0} 건 주문하기</span>
            </Button>
        </Container>
    )

}

export default CartList;