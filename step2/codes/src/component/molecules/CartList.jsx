import { useCallback, useEffect, useRef, useState } from "react";
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
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const updatePayload = useRef([]);

    const { mutate } = useMutation({
        mutationFn: updateCart,
    });

    useEffect(() => {
        //validate 또는 구조분해할당 하면 더 좋음
        data?.data?.response?.products !== undefined &&
           setCartItems(data?.data?.response?.products);
        data?.data?.response?.totalPrice !== undefined &&
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
     * @param {number} quantity : 옵션 수량
     * @param {number} option : 클릭한 옵션의 내용
     */
    //전달 인자는 option! 즉 cart에 담긴 상품 목록 하나의 정보와 개수 count
    const handleOnChangeCount = ( quantity, option ) => {
        const prev = updatePayload.current;
        const isExist =  prev.find((item) => item.cartId===option.id);
        
        if (isExist) {
            updatePayload.current = [
                ...prev.filter((item) => item.cartId !== option.id),
              {
                  cartId: option.id,
                  quantity,
              },
            ];
        }
          else {
            updatePayload.current = [
                ...prev,
                {
                cartId: option.id,
                quantity,   
            },
        ];
        } 

    //수량이 변경될 때마다 mutate 로 cart 내용 업데이트
    // updateCartReq(updatePayload.current, quantity, option);

        mutate(updatePayload.current, {
            onSuccess: (data) => {
                setTotalPrice(quantity * option.option.price);
                setCartItems((prev) => {
                    return prev.map((item) => {
                        return {
                            ...item,
                            carts: item.carts.map((cart) =>{
                                if (cart.id === option.id) {
                                    return {...cart, quantity};
                                }
                                return cart;
                            })
                        }
                    })
                })        
            },
            onError: (error) => {
                alert(error.message);
                console.log("error")
            }
        });
    };

    return (
        <Container className="w-1/2 mx-auto mb-20">
            <Box className="text-lg font-bold border flex items-center justify-center h-18 my-1">장바구니</Box>
            <Card className="mb-4">
                {/* 상품별 장바구니 */}
                {Array.isArray(cartItems) &&
                    cartItems.map((item) => {
                        return (
                            <CartItem 
                                key={item.id}
                                item = {item}
                                onChange = {handleOnChangeCount}
                                //onIncrease 와 onDecrease가 동시에 구현되어야함
                            />
                        )
                    })}
            </Card>
            <Card className="border">
                <div className="flex place-content-between p-4">
                    <span className="text-xl font-bold">주문 예상금액</span>
                    <div className="text-xl font-bold text-sky-600">{comma(totalPrice)}원</div>
                </div>
            </Card>

            <Button className="order-btn w-full h-14 bg-#ffeb00"
                onClick={() => {
                    //update cart api 장바구니 정보 수정 api
                    navigate("/order");
                }}    
            >
                <div className=" text-center">총 {cartItems ? getTotalCartCountIncludeOptions() : 0} 건 주문하기</div>
            </Button>
        </Container>
    )

            }

export default CartList;