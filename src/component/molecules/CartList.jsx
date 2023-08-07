import Container from "../atoms/Container";
import Button from "../atoms/Button";
import { useCallback, useEffect, useState,useRef } from "react";
import Box from "../atoms/Box";
import Card from "../atoms/Card";
import CartItems from "../atoms/CartItem";
// import { comma } from "../../utils/convert";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { updateCart } from "../../services/addCart";
const staticServerUrl = process.env.REACT_APP_PATH || "";

const CartList = ({data}) => {
   
    const route=useNavigate();
    const [cartItems,setCartItems]=useState([]);
    const [totalPrice,setTotalPrice]=useState(0);
    const [updatePayload,setUpdatePayload]=useState([]);
    const initPayload = useRef([]);
      //useRef 는 상태를 담아둘때도 사용함.

    const {mutate} = useMutation({
        mutationFn:updateCart,
    })

    useEffect(()=>{
        // console.log(data?.data?.response?.products)
        setCartItems(data?.data?.response?.products);
        let item=data?.data?.response?.products;
        console.log(item)
        // let items=item.carts.reduce((hap)=>{
        //     hap=
        // })
        // setTotalPrice(items);
        //안좋은 패턴
    },[data])

    /**
     * 옵션의 수량 변경과 가격 변경 관리
     * @param {number} optionId  :옵션 아이디
     * @param {number} quantity  :옵션 수량
     * @param {number} price :옵션 가격
     */
    const handleOnChangeCount =(optionId,quantity,price)=>{
        setCartItems((prev) =>
        prev.map((item) => {
          return {
            ...item,
            carts: item.carts.map((cart) => {
              if (cart.id === optionId) {
                return { ...cart, quantity };
              }
              return cart;
            }),
          };
        })
      );
      setTotalPrice((prev) => prev + price);}
        // setUpdatePayload((prev)=>{
        //     const isExist = prev.find((item)=>item.cartId === optionId);
        //     if(isExist){
        //         return [
        //             ...prev.filter((item)=>item.cartId !== optionId),{
        //                 cartId:optionId,
        //                 quantity,
        //             }
        //         ]
        //     }
        //     return [
        //         ...prev,
        //         {
        //             cartId:optionId,
        //             quantity,
        //         },
        //     ]
        // })
        // setTotalPrice((prev)=>{
        //     console.log(prev)
        //     prev=prev+price
        // })
    //     setCartItems((prev)=>{
    //         return prev.map((item)=>{
    //             return{
    //                 ...item,
    //                 carts: item.carts.map((cart)=>{
    //                     if(cart.id===optionId){
    //                         return {...cart,quantity}
    //                     }
    //                     return cart;
    //                 })
    //             }
    //         })
    //     })
    // }
    const getPayload = useCallback(() => {
        const payload = cartItems.flatMap((item) => {
          return item.carts.map((cart) => {
            return { cartId: cart.id, quantity: cart.quantity };
          });
        });
        return payload;
      }, [cartItems]);

    const getTotalCartCountIncludeOptions= useCallback(()=>{
        let count =0;
        cartItems.forEach((item)=>{
            // console.log(item)
            item.carts.forEach((cart)=>{
                count+=cart.quantity;
            });      
        });
        return count;
    },[cartItems])
    
    return (
        <Container>
            <Box>
                <p>장바구니</p>
            </Box>
            <Card>
                {/* 상품 별 장바구니 */}
                {Array.isArray(cartItems)&&
                 cartItems.map((item)=>{
                    return(
                        <CartItems
                        key={item.id}
                        item={item}
                        onChange={handleOnChangeCount} //개수 변경 관리
                        />
                    )
                 })
                }

            </Card>
            <Card>
                <div>
                    <span>주문 예상금액</span>
                    <div>{totalPrice}원</div>
                </div>
            </Card>
            <Button
            onClick={()=>{
                //update cart
                //navigate to order page
                console.log(getPayload())
                mutate(getPayload(),{
                    onSuccess:(data)=>{
                        route(`${staticServerUrl}/order`)
                    },
                    onError:(error)=>{

                    },
                })
                
            }}>주문하기</Button>
            <span>총 {getTotalCartCountIncludeOptions()}건 주문하기</span>
        </Container>
    );
};

export default CartList;