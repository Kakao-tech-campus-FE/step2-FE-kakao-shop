import { useState, useEffect, useCallback } from "react";
import Box from "../atoms/Box";
import CartItem from "../atoms/CartItem";
import { comma } from "../../utils/convert";
import { useNavigate } from "react-router-dom";
import {useMutation, useQuery} from "@tanstack/react-query";
import { getCart, updateCart } from "../services/cart";

const staticServerUri = process.env.REACT_APP_PATH||"";

const CartList = () => {
  const {data} = useQuery(["cart"], getCart, {
    suspense: true,
  });
  
  const route = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [updatePayload, setUpdatePayload] = useState([]);
  // const initPayload = useRef([]); // 렌더링에 관여하지 않는 상태에 대한 관리 -> useRef

  const {mutate} = useMutation({
    mutationFn: updateCart,
  });

  useEffect(()=> {
    setCartItems(data?.data?.response?.products);
    setTotalPrice(data?.data?.response?.totalPrice);
  }, [data]);

  useEffect(() => {
    mutate(updatePayload);
  },[updatePayload, mutate]);

  const getTotalCartCountIncludeOptions = useCallback(() => {
    let count = 0;
    cartItems.forEach((item) => {
      item.carts.forEach((cart) => {
        count += cart.quantity;
      });
    });
    return count;
  }, [cartItems]);

  

  /**
   * 옵션의 수량 변경과 가격 변경을 관리
   * @param {number} optionId : 옵션 아이디
   * @param {number} quantity : 옵션 수량
   * @param {number} price : 옵션 가격
   */
  const handleOnChangeCount = (optionId, quantity, price) => {
    setUpdatePayload((prev) => {
      const isExist = prev.find((item) => item.cartId === optionId);
      
      if (isExist) {
        return [
          ...prev.filter((item) => item.cartId !== optionId),
          {
            cartId: optionId,
            quantity,
          },
        ];
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
              return {...cart, quantity};
            }
            return cart;
          }),
        };
      });
    });
  }

  const removeItem = (optionId, price) => {
    setUpdatePayload((prev) => {
      return [
        ...prev.filter((item) => item.cartId !== optionId),
        {
          cartId: optionId,
          quantity: 0,
        },
      ];
    });

    setTotalPrice((prev) => prev - price);
    setCartItems((prev) => {
      return prev.map((item) => {
        return {
          ...item,
          carts: item.carts.map((cart) => {
            if (cart.id === optionId) {
              return {...cart, quantity: 0};
            }
            return cart;
          }),
        };
      });
    });
  };

  return (
    <div className="justify-center mt-24 mx-60">
    <div className="cart-list bg-white pb-4">
      <Box className=" py-4 text-center border-b">
        <h1 className=" text-lg">장바구니</h1>
      </Box>
      <Box>
        {Array.isArray(cartItems) &&
          cartItems.map((item) => {
            const zeroQuantity = item.carts.filter(
              (cart) => cart.quantity !== 0
            );
            if (zeroQuantity.length > 0) {
              return (
                <CartItem
                  key={item.id}
                  item={{...item, carts: zeroQuantity}}
                  onChange={handleOnChangeCount}
                  onRemove={removeItem}
                  mutate={mutate}
                />
              );
            }
          })}
      </Box>
    </div>
    <div className=" mt-10 ">
      <Box>
        <div className="flex justify-between mb-4 px-4">
          <span className="text-xl">주문 예상금액</span>
          <div className="sum-price text-sky-600">{comma(totalPrice)}원</div>
        </div>
      </Box>
      <button
        className="order-btn w-full h-10 mb-40 rounded-sm bg-yellow-300"
        onClick={() =>{
          //update cart api
          // 장바구니 정보를 수정하는  api 호출(개수 변경이 있을 경우에)
          
          mutate(updatePayload, { 
            onSuccess: (data) => {
              //navigate to order page
              route(staticServerUri + "/order");
            },
            onError: (error) => {
              route(staticServerUri + "/error");
            },
          })
  
        }}
      >
        <span>총 {getTotalCartCountIncludeOptions()}건 주문하기</span>
      </button>
      </div>
    </div>
  );
}

export default CartList;
