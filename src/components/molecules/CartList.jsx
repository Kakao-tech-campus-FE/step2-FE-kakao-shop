import Container from "../atoms/Container";
import Button from "../atoms/Button";
import Box from "../atoms/Box";
import CartItem from "../atoms/CartItem";
import { useEffect, useState } from "react";
import styles from "./CartList.module.css";
import { comma } from "../../utils/convert";
import { useMutation } from "react-query";
import { updateCart } from "../../services/cart";
import { useNavigate } from "react-router";
import cart from "../../assets/cart.png";

const staticServerUri = process.env.REACT_APP_PATH || "";

const CartList = ({ data }) => {
    const [cartItems, setCartItems] = useState(data?.products);
    const [updatedItems, setUpdatedItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(data?.totalPrice);
    const navigate = useNavigate();

    console.log('cart list data', data);
    const cartUpdataMutation = useMutation({
        mutationFn: updateCart,
        onSuccess: () => {
            window.location.href=staticServerUri + "/order";
        },
        onError: () => {
            alert("문제가 발생하였습니다.");
            navigate("/cart");
        }
    })
    const optionDeleteMutation = useMutation({
        mutationFn: updateCart,
        onSuccess: () => {
            // window.location.href= staticServerUri + "/cart";
        },
        onError: () => {
            alert("문제가 발생하였습니다.");
            navigate("/cart");
        }
    })

    useEffect(() => {
        console.log('changed', data);
        setCartItems(data?.products);
        setTotalPrice(data?.totalPrice);
    }, [data]);
    
    useEffect(() => {
        console.log('cartItems changed', cartItems);
    }, [cartItems]);

    /**
     * 옵션의 수량과 가격을 변경을 관리
     * @param {number} optionId 
     * @param {number} quantity 
     * @param {number} price 
     */
    const handleOnChangeCount = (optionId, quantity) => {
        setCartItems(prev => {
            return prev.map(item => {
                return {
                    ...item,
                    carts: item.carts.map(option => {
                        if(option.id === optionId){
                            setTotalPrice(prev => prev + (option.option.price * (quantity - option.quantity)));
    
                            return {
                                ...option,
                                quantity: quantity,
                            };
                        }
                        return option;
                    })
                }
                
            })
        })

        if(quantity === 0){
            const payload = getUpdatePayload();
            console.log('payload', payload);
            optionDeleteMutation.mutate(payload); 
        }
    }

    const getUpdatePayload = () => {
        const payload = [];
        cartItems.map(item => {
            item.carts.map(option => {
                payload.push({
                    cartId: option.id,
                    quantity: option.quantity,
                });
            });
        });

        return JSON.stringify(payload);
    }

    if(data.products.length === 0){
        return (
            <Container className="w-[870px] overflow-hidden">
                <Box className="title_wrap text-center leading-[44px] bg-white border border-border_gray border-b-0 mt-[11px]">
                    <h1 className="font-semibold">장바구니</h1>
                </Box> 
                <Box className="text-center bg-white border border-border_gray py-[200px]">
                    <img className="mx-auto" src={cart}/>
                    <span className="block py-[14px] leading-5 text-lg">
                        장바구니에 담긴 상품이 없습니다.
                    </span>
                    <div className="w-[200px] mx-auto">
                        <Button onClick={() => {
                            navigate("/");
                        }}><strong>홈으로 이동</strong></Button>
                    </div>
                </Box>
            </Container>
        );
    }

    return (
        <Container className="cart_list w-[870px] overflow-hidden">
            <Box className="title_wrap text-center leading-[44px] bg-white border border-border_gray border-b-0 mt-[11px]">
                <h1 className="font-semibold">장바구니</h1>
            </Box>
            <Box className={styles.product_list}>
                {Array.isArray(cartItems) &&
                    cartItems.map((item) => {
                        return (
                            <CartItem 
                                key={item.id}
                                item={item}
                                onChange={handleOnChangeCount}
                            />
                        );
                    })
                }
            </Box>
            <Box className="order_data_wrap bg-white border border-border_gray">
                <div className={styles.row}>
                    <span className="price_title float-left text-[18px] font-semibold leading-[21px] p-[20px] pr-[24px] pl-[16px]">
                        주문 예상금액
                    </span>
                    <span className="total_price block text-right text-[18px] text-blue font-semibold leading-[21px] text-blue-500 p-[20px] pl-0">
                        {comma(totalPrice)}원
                    </span>
                </div>
                <Button
                    className={styles.order_btn}
                    onClick={() => {
                        if(cartItems.length === 0) {
                            alert("주문할 상품이 존재하지 않습니다.");
                            return;
                        }

                        const payload = getUpdatePayload();
                        console.log('payload', payload);
                        cartUpdataMutation.mutate(payload);
                        
                    }}
                ><strong>{`${cartItems.length}건 주문하기`}</strong></Button>
            </Box>
            
        </Container>
    );
}

export default CartList;