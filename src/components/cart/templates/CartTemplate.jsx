import React, { useEffect, useState } from "react";
import Container from "../../common/atoms/Container";
import Box from "../../common/atoms/Box";
import Button from "../../common/atoms/Button";
import { comma } from "../../../utils/convert";
import CartItem from "../organisms/CartItem";
import { useNavigate } from "react-router-dom";
import Text from "../../common/atoms/Text";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../../../store/slices/cartSlice";

export default function CartTemplate({ data }) {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.cartCount);
  useEffect(() => {
    // validataion 필요
    setCartItems(data?.response?.products);
    setTotalPrice(data?.response?.totalPrice);
  }, [data]);

  // 장바구니에 담긴 상품의 수량이 변경되면 장바구니 아이콘의 숫자를 체크
  useEffect(() => {
    if (cartCount === 0) {
      return;
    }
    data?.response?.products.forEach((product) => {
      const isExist = product.carts.some((cart) => cart.quantity > 0);
      if (isExist) {
        dispatch(addProduct(product.id));
      } else {
        dispatch(removeProduct(product.id));
      }
    });
  }, [cartItems, data?.response?.products, dispatch]);

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
    <Container className=" flex w-full min-w-[1280px] justify-center bg-zinc-100 ">
      <Container className="w-[870px]">
        <Text className=" bg-white py-3 text-center font-bold">장바구니</Text>
        {/* 장바구니가 비어있는 경우 */}
        {cartCount === 0 ? (
          <Box className="mb-5 flex h-[550px] flex-col items-center justify-center border-0 border-t-[1px] border-solid border-zinc-300 bg-white text-xl font-semibold tracking-tight">
            <p>장바구니에 담긴 상품이 없습니다.</p>
            <Button
              className="m-3 cursor-pointer border-solid border-black bg-black p-2 px-4 font-bold text-white"
              onClick={() => {
                navigate("/");
              }}
            >
              쇼핑하기 홈
            </Button>
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
            <Box className="mt-5 flex h-14 items-center justify-between bg-white px-3 font-bold">
              <span>주문 예상금액</span>
              <span className=" text-blue-500">{comma(totalPrice)}원</span>
            </Box>
            <Button
              className="mb-4 h-14 w-full cursor-pointer border-0 bg-[#feeb00] text-base font-bold"
              onClick={() => {
                // 결제 프로세스
                // 1. 장바구니에 있는 모든 항목 그대로 결제 페이지에 담김
                // 2. 결제 페이지에서는 수량 변경X, 그대로 결제 진행만 수행
                navigate("/order");
              }}
            >
              {/* 장바구니 수량: 전역 State */}
              <span>{cartCount}</span>건 주문하기
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
