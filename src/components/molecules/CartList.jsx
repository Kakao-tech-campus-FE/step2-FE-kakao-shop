import { useEffect } from "react";
import { useState } from "react";
import CartItem from "../atoms/CartItem";
import { comma } from "../../utils/convert";
import Button from "../atoms/Button";
import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useRef } from "react";
import Box from "../atoms/Box";
import Container from "../atoms/Container";
import { updateCart } from "../../services/api/cart";
import { BsCart } from "react-icons/bs";
import Loader from "../atoms/Loader";

const CartList = ({ data, isLoading }) => {
  const route = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCartEmpty, setIsCartEmpty] = useState();
  // updatePayload가 렌더링에 관여하고 있는가? => X
  // => 그렇다면 useRef로 관리하는것이 useState로 관리하는 것 보다 더 좋다.
  //const [updatePayload, setUpdatePayload] = useState([]);
  const updatePayload = useRef([]);
  const initPayload = useRef([]);

  /* 정리하자면, 
  렌더링에 관여하는 값들의 상태 관리 => useState
  렌더링에 관여하지는 않지만 연산에 사용하는 등 상태 관리가 필요한 값 => useRef
  useRef는 DOM에 접근할 때 주로 사용하지만 상태를 관리할 떄도 이용할 수 있다.
  그렇다면 let으로 변수를 두어 관리할 수는 없을까? 
  => 변수로 지정한 값은 렌더링이 될 때마다 초기화되므로 상태를 유지하는데에 이용할 수 없다. */

  const { mutate } = useMutation({
    mutationFn: updateCart,
  });

  useEffect(() => {
    // 사실 아래처럼 작성한 코드는 좋지 않은 패턴
    // => validate 또는 구조 분해 할당을 이용하는 것이 더 좋은 패턴
    data?.data?.response?.products !== undefined &&
      setCartItems(data?.data?.response?.products);
    data?.data?.response?.totalPrice !== undefined &&
      setTotalPrice(data?.data?.response?.totalPrice);
    setIsCartEmpty(getIsCartEmpty());
  }, [data]);

  useEffect(() => {
    setIsCartEmpty(getIsCartEmpty());
  }, [cartItems]);

  const getTotalCartCountIncludeOptions = useCallback(() => {
    let count = 0;
    cartItems.forEach((item) => {
      item.carts.forEach((cart) => {
        count += cart.quantity; // 개별 옵션에 해당
      });
    });
    return comma(count);
  }, [cartItems]);

  const getIsCartEmpty = useCallback(() => {
    return cartItems.every((product) => {
      return product.carts.every((option) => {
        return option.quantity === 0;
      });
    });
  }, [cartItems]);

  /**
   * 옵션의 수량 변경과 가격 변경을 관리
   * @param {number} optionId : 옵션의 아이디
   * @param {number} quantity : 옵션 수량
   * @param {number} price : 옵션 가격
   */
  const handleOnChangeCount = (optionId, quantity, price) => {
    // 이미 존재하는 값들에 대한 예외 처리
    const prev = updatePayload.current;
    const isExist = prev.find((item) => item.cartId === optionId);
    if (isExist) {
      updatePayload.current = [
        // 이미 존재하는 id인 값을 제외한 값들을 넣어주고
        ...prev.filter((item) => item.cartId !== optionId),
        // 이미 존재하는 id인 경우 새로운 quantity를 갖도록 설정
        {
          cartId: optionId,
          quantity,
        },
      ];
    }
    // 이미 존재하는 id인 값이 없는 경우
    else {
      updatePayload.current = [
        ...prev,
        {
          cartId: optionId,
          quantity,
        },
      ];
    }
    // 장바구니 update 요청
    // update cart
    // 장바구니 정보를 수정하는 api 호출(개수 변경이 있는 경우에)
    // post method
    // 방법 1. 전체 장바구니 목록의 개수를 적절히 파실하여 페이로드로 보내주기
    // 방법 2. 변경된 개수만 파싱하여 페이로드로 보내주기
    // 방법 2가 더 적은 데이터를 보내므로 더 좋은 방법이지만 개발이 어렵다면 방법 1을 이용할 수도 있다.
    // 우리는 방법 2를 이용할 예정
    /* 어떻게 변경된 부분만을 보낼 수 있을까?
          handleOnChangeCount가 일어난 값들은 수량의 변화가 있었다는 의미
          => payload로 전달될 값들을 저장하는 updatePayload를 useState를 이용하여 관리하고
          => handleOnChangeCount내에서 변경이 일어나는 값들을 updatePayload에 추가
          하지만 이 방법에도 예외는 있다. 예를 들어 초기에 quantity가 1이었다가 2로 바뀐 후 다시 1로 바뀌었다면,
          payload를 통해 전달할 필요가 없음에도 위의 로직대로라면 api로 전달되게 된다.
          이를 해결하려면 장바구니 초기 상태를 저장하는 initPayload를 useRef로 지정하여 관리하며
          요청을 보내기 전에 initPayload와 중복되는 값을 제거한 후 요청을 보내는 방식으로 해결할 수 있다.
           */
    mutate(updatePayload.current, {
      // update 요청 성공시 결과를 state에 반영
      onSuccess: (data) => {
        setTotalPrice((prev) => {
          return prev + price;
        });

        setCartItems((prev) => {
          return prev.map((item) => {
            return {
              ...item,
              carts: item.carts.map((cart) => {
                if (cart.id === optionId) {
                  return { ...cart, quantity };
                }
                return cart;
              }),
            };
          });
        });
      },
      onError: (error) => {
        alert(error.message);
      },
    });
  };

  return (
    <main className="pt-2 pb-10 bg-[#F4F4F4] bg-opacity-70">
      <Container className="w-[870px] mx-auto">
        <Box className="h-12 border rounded bg-white text-center">
          <h1 className="font-semibold text-[15px] mt-3">장바구니</h1>
        </Box>
        {isCartEmpty ? (
          <div className="text-center pt-52 pb-80 mt-2 border rounded bg-white ">
            <BsCart className="mx-auto my-4 text-5xl text-neutral-300" />
            <span className="text-xl">장바구니에 담긴 상품이 없습니다.</span>
            <div className="flex w-fit mx-auto my-4">
              <button
                className="w-[100px] mx-1 px-3 py-2 rounded border border-neutral-300 bg-white"
                onClick={() => route(-1)}
              >
                <span className="text-sm text-black">이전화면</span>
              </button>
              <button
                className="w-[100px] mx-1 px-3 py-2 rounded bg-black"
                onClick={() => route("/")}
              >
                <span className="text-sm text-white">쇼핑하기 홈</span>
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* 상품별 장바구니 */}
            {Array.isArray(cartItems) &&
              cartItems.map((item) => {
                return (
                  // 모든 옵션의 수량이 0인 경우 CartItem을 렌더링하지 않도록 한다.
                  // item.price !== 0이면 수량이 0이 아닌 경우이다.
                  item.carts.every((option) => option.quantity === 0) !==
                    true && (
                    <CartItem
                      key={item.id}
                      item={item}
                      onChange={handleOnChangeCount} // 개수 변경
                    />
                  )
                );
              })}
            <div className="h-fit border rounded bg-white mt-8 px-8 py-6">
              <span className="font-bold text-lg">주문 예상금액</span>
              <div className="float-right text-lg font-semibold text-blue-500 pr-4">
                {comma(totalPrice)}원
              </div>
            </div>
            <Button
              className="h-fit w-full border rounded bg-[#feeb00] mt-4 p-4 hover:bg-yellow-300"
              onClick={() => {
                // navigate to order page
                // 주문 페이지로 이동
                route("/order");
              }}
            >
              <span className="font-semibold text-lg">
                {getTotalCartCountIncludeOptions()}건 주문하기
              </span>
            </Button>
          </div>
        )}
      </Container>
    </main>
  );
};
export default CartList;
