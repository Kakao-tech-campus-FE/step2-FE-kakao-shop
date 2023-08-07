import { useCallback, useEffect, useRef, useState } from "react"
import { useMutation } from "react-query";
import { useNavigation } from "react-router-dom";
import CartItem from "../atoms/CartItem";
import Card from "../atoms/Card";
import Button from "../atoms/Button";
import Box from "../atoms/Box";
import { comma } from "../../utils/convert";
import {updateCart} from "../../services/addCart";
import Container from "../atoms/Container";


const CartList=({data})=>{
const route=useNavigation();
const [cartItems, setCartItems]=useState([]);
const [totalPrice, setTotalPrice]=useState(0);
const [updatePayload, setUpdatePayload]=useState([]);//렌더링에 관여x

//const updatePayload=useRef([]);
const initPayload=useRef([]);//렌더링에 관여하지 않는다.
	
const staticServerUrl = "https://user-app.krampoline.com/k9d43d0d3ffc5a/"

const {mutate}=useMutation({
    mutationFn: updateCart,
});
/**
 * 옵션의 수량 변경과 가격 변경을 관리
 * @param {number} optionId 
 */

useEffect(()=>{
    //validate 또는 구조분해할당하는게 좋음
    setCartItems(data?.data?.response?.products);
    initPayload(data?.data?.response?.products);
    setTotalPrice(data?.data?.response?.totalPrice);
}, [data]);

useEffect(() => {
    mutate(updatePayload);
  }, [updatePayload, mutate]);



const getTotalCartCountIncludeOptions=useCallback(()=>{
    let count=0;
    cartItems.forEach((item) => {
        item.carts.forEach((cart)=>{
            count+=cart.quantity;
        });
    });
    return comma(count);
}, [cartItems]);


const handleOnChangeCount=(optionId, quantity, price, )=>{
    setUpdatePayload((prev)=>{
        const isExist=prev.find((item)=>item.cartId===optionId);
        
        if (isExist){
            return[
                ...prev.filter((item)=> item.cartId !== optionId),{
                    cartId:optionId,
                    quantity,
                }
            ]
        }

        return[
            ...prev,
            {
                cartId:optionId,
                quantity,
            },
        ];
    });

    setTotalPrice((prev)=>prev+price);
    setCartItems((prev)=> {
        return prev.map((item)=>{
            return{
                ...item,
                carts:item.carts.map((cart)=>{
                    if (cart.id === optionId){
                        return{...cart, quantity};
                    }
                    return cart;
                })
            };
        });
    });
};

return(
    <Container className="cart-List">
        <Box>
            <h1>장바구니</h1>
            </Box>
            <Card className="cart-item">
                {/* 상품별 장바구니 */}
                {Array.isArray(cartItems) && cartItems.map((item) =>{
            return(
                <CartItem
                key={item.id}
                item={item}
                onChange={handleOnChangeCount}
                mutate={mutate}
                />
            );
        })
        }
    </Card>
    <Card>
        <div className="row">
            <span className="expect">주문 예상금액</span>
            <div className="sum-price">{comma(totalPrice)}원</div>
                </div>
            </Card>
            <button className="order-btn"
                onClick={() => {//update cart api
                    //장바구니 정보를 수정하는 api호출(개수 변경이 있다면)
                    mutate(updatePayload,{
                        onSuccess:(data)=>{
                            route.push(staticServerUrl + "/order")
                        },
                        onError:(error)=>{
            
                        },
                    })
                }}
                >
                    <span className='font-bold text-xl'>총 {getTotalCartCountIncludeOptions}건 주문하기</span>
                </button>  
    </Container>
    )
            }
export default CartList;