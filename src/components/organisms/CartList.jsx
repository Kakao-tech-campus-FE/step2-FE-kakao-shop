import {useCallback, useEffect, useState} from "react";
import CartItem from "../molecules/CartItem";
import {comma} from "../../utils/convert";
import {updateCart} from "../../services/cart";
import {useMutation} from "react-query";

const CartList = ({data}) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    console.log("data", data)
    useEffect(() => {
        setCartItems(data?.data?.response?.products);
        setTotalPrice(data?.data?.response?.totalPrice);
    }, [data])

    const {mutate} = useMutation({
        mutationFn: updateCart,
        onSuccess: () => {
            console.log("장바구니 업데이트 성공")
        },
        onError: (error) => {
            console.log("error", error)
            alert(error.response.data.error.message)
        }
    })

    const getTotalQuantity = useCallback(
        () => {
            let totalQuantity = 0;
            cartItems?.forEach((item) => {
                item.carts.forEach((cart) => {
                    totalQuantity += cart.quantity;
                })
            })
            return totalQuantity;
        }, [cartItems]
    );
    const handleOnChangeCount = (optionId, quantity, price) => {
        mutate([{
            cartId: optionId,
            quantity: quantity,
        }])
        setCartItems((prev) => {
            return prev.map((item) => {
                return {
                    ...item,
                    carts: item.carts.map((cart) => {
                        if (cart.id === optionId) {
                            return {
                                ...cart,
                                quantity: quantity,
                            }
                        } else {
                            return cart;
                        }
                    })
                }
            })
        })
        setTotalPrice((prev) => {
            return prev + price;
        });
    }


    return (
        <div className={"cart-list max-w-xl flex flex-col items-center"}>
            <div className={"h-20 flex items-center"}>
                <h1 className={"text-3xl font-bold"}>장바구니</h1>
            </div>
            <div>
                {Array.isArray(cartItems) &&
                    cartItems.map((item) => {
                        return (
                            <CartItem
                                key={item.id}
                                item={item}
                                onChange={handleOnChangeCount} // 개수 변경을 관리
                            />
                        );
                    })}
                {getTotalQuantity() === 0 && (
                    <div className={"h-40 flex items-center justify-center"}>
                        <h1 className={"text-2xl font-bold"}>장바구니가 비었습니다.</h1>
                    </div>
                )}
            </div>
            {getTotalQuantity() > 0 &&
                (<div className={"w-full flex flex-col items-center justify-center px-5"}>
                    <div className={"w-full flex flex-row justify-end text-lg pb-5"}>
                        <span className={"total-price pr-3"}>최종 금액</span>
                        <span>{comma(totalPrice)}원</span>
                    </div>
                    <button className={"w-full mx-5 py-5 text-xl box-content bg-kakao-yellow"}>{getTotalQuantity()}건 주문하기</button>
                </div>)}
        </div>
    )
}

export default CartList;