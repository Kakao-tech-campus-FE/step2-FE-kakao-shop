import React, { useEffect, useState, useRef } from "react";
import Container from "../atoms/Container";
import Box from "../atoms/Box";
import Button from "../atoms/Button";
import { comma } from "../../utils/convert";
import CartItem from "../organisms/CartItem";
import { useMutation } from "react-query";
import { updateCart } from "../../apis/cart";
import { useNavigate } from "react-router-dom";
import Text from "../atoms/Text";
import { useDispatch, useSelector } from "react-redux";
import { updateCartNum } from "../../store/slices/cartSlice";

export default function CartTemplate({ data }) {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const updateCartItems = useRef([]);
  const navigate = useNavigate();
  const { mutate } = useMutation(updateCart);
  const dispatch = useDispatch();
  const cartNum = useSelector((state) => state.cart.cartNum);

  useEffect(() => {
    // validataion 필요
    setCartItems(data?.response?.products);
    setTotalPrice(data?.response?.totalPrice);
  }, [data]);

  // 장바구니에 담긴 상품의 수량이 변경되면 장바구니 아이콘의 숫자를 체크
  useEffect(() => {
    const count = data?.response?.products.reduce((total, item) => {
      const isExist = item.carts.some((cart) => cart.quantity > 0);
      return total + (isExist ? 1 : 0);
    }, 0);
    dispatch(updateCartNum(count));
  }, [cartItems]);

  /**
   * 옵션의 아이디와 일치하는 옵션의 수량을 매개변수 값으로 변경하는 함수
   * @ cartItems: 장바구니에 담긴 상품의 배열
   * @ updateCartItems: 변경된 옵션의 정보를 담는 배열
   * @ cartItems과 updateCartItems 둘 다 변경된 옵션의 정보로 변경
   * @param {number} optionId 옵션의 아이디
   * @param {number} quantity 옵션의 수량
   * @param {number} price 옵션의 가격
   */
  const handleOnChnageCount = (optionId, quantity, price) => {
    const isExist = updateCartItems.current.find(
      (item) => item.cartId === optionId
    );
    if (isExist) {
      updateCartItems.current = updateCartItems.current.map((item) => {
        if (item.cartId === optionId) {
          return { ...item, quantity };
        }
        return item;
      });
    } else {
      updateCartItems.current.push({ cartId: optionId, quantity });
    }

    setTotalPrice((prev) => prev + price);
    setCartItems((prev) => {
      return prev.map((item) => {
        return {
          ...item,
          // carts라는 key의 value를 변경(option 배열의 수량 변경)
          carts: item.carts.map((cart) => {
            if (cart.id === optionId) {
              return { ...cart, quantity };
            }
            return cart;
          }),
        };
      });
    });
  };

  return (
    <Container className=" bg-zinc-100 flex justify-center w-full min-w-[1280px] ">
      <Container className="w-[870px]">
        <Text className=" bg-white text-center font-bold py-3">장바구니</Text>
        {/* 장바구니가 비어있는 경우 */}
        {cartNum === 0 ? (
          <Box className="flex bg-white h-[550px] mb-5 border-solid border-0 border-t-[1px] border-zinc-300 items-center justify-center font-semibold tracking-tight text-xl">
            장바구니에 담긴 상품이 없습니다.
          </Box>
        ) : (
          <div>
            {/* 상품별 장바구니 */}
            {Array.isArray(cartItems) &&
              cartItems.map((item) => {
                return (
                  <CartItem
                    key={item.id}
                    item={item}
                    onChange={handleOnChnageCount} // 개수 변경을 관리하는 props
                  />
                );
              })}
            {/* 최하단 영역: 총 금액, 결제 버튼 */}
            <Box className="flex justify-between bg-white mt-5 px-3 items-center h-14 font-bold">
              <span>주문 예상금액</span>
              <span className=" text-blue-500">{comma(totalPrice)}원</span>
            </Box>
            <Button
              className="w-full h-14 bg-[#feeb00] border-0 font-bold text-base mb-4"
              onClick={() => {
                // navigate("/order");
                // 장바구니 정보를 수정하는 api 호출
                // 결제 프로세스
                // 1. 장바구니에 있는 모든 항목 그대로 결제 페이지에 담김
                // 2. 결제 페이지에서는 수량 변경X, 그대로 결제 진행만 수행
                mutate(updateCartItems, {
                  onSuccess: (data) => {
                    navigate("/order");
                  },
                  onError: (error) => {},
                });
              }}
            >
              {/* 장바구니 수량: 전역 State */}
              <span>{cartNum}</span>건 주문하기
            </Button>
          </div>
        )}
      </Container>
    </Container>
  );
}

// ⭐️ 개념
// - 렌더링에 관여하지 않는 데이터는 state로 관리하지 않고 useRef로 관리한다.

// 렌더링 과정
// 1. 최초의 return 렌더링
// 2. 데이터가 변경되면 리렌더링
// 3. 리마운트: 컴포넌트의 최상단부터 다시 실행(hook은 초기화되지 않는다)
