import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../atoms/Container";
import CartItem from "../atoms/CartItem";
import Button from "../atoms/Button";
import ErrorPage from "../../pages/Error/ErrorPage";

import { updateCart } from "../../apis/cart";
import { comma } from "../../utils/convert";
import { useMutation } from "@tanstack/react-query";
import { BsCart2 } from "react-icons/bs";
import { simpleAlert } from "../../utils/swal";

/**
 * 장바구니에 담긴 상품 리스트
 * @param {Object} data
 * @todo data 전체를 받아오지 않고 필요한 데이터만 받아오도록 수정
 */
const CartList = ({ data }) => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [updatePayload, setUpdatepayload] = useState([]);

  // const initPayload = useRef([]);
  const { mutate } = useMutation({
    mutationFn: updateCart,
    refetchQueries: ["cart", "cartNum"],
  });

  useEffect(() => {
    console.log("data", data?.data?.response?.products);
    setCartItems(data?.data?.response?.products);
    setTotalPrice(data?.data?.response?.totalPrice);
  }, [data]);

  // payload가 변경될 때 마다 mutate 실행
  useEffect(() => {
    mutate(updatePayload);
  }, [updatePayload, mutate]);

  // cartItems가 변경될 때마다 전체 상품 개수 변경
  const getTotalCartCountIncludingOptions = useCallback(() => {
    let count = 0;
    cartItems &&
      cartItems.forEach((item) => {
        item.carts.forEach((cart) => {
          count += cart.quantity; // 개별 옵션 수량을 모두 더해준다
        });
      });
    return count;
  }, [cartItems]);

  const handleOnChangeCount = (optionId, quantity, price) => {
    // 수량 변경
    setUpdatepayload((prev) => {
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
              return {
                ...cart,
                quantity,
              };
            }
            return cart;
          }),
        };
      });
    });
  };

  const handleOnDelete = (optionId) => {
    setUpdatepayload((prev) => {
      return [
        ...prev.filter((item) => item.cartId !== optionId),
        {
          cartId: optionId,
          quantity: 0,
        },
      ];
    });
    navigate(0);
  };

  const handleOnOrder = () => {
    return () => {
      mutate(updatePayload, {
        onSuccess: () => {
          navigate("/order");
        },
        onError: (error) => {
          if (error?.response?.status === 401) {
            // 로그인 만료된 상태에서 요청 시
            simpleAlert(
              "로그인이 만료되었습니다. 재로그인 후 다시 시도해주세요."
            );
            navigate("/login");
          }
          return <ErrorPage message="주문처리 중 에러가 발생했습니다." />;
        },
      });
    };
  };

  return (
    <Container className="cart">
      <div className="title text-center font-bold py-4 border border-solid border-gray-200 bg-white">
        <h1>장바구니</h1>
      </div>
      {totalPrice === 0 ? (
        <div className="cart-empty h-full py-40 text-center bg-white">
          <BsCart2 size="50" color="gray" className="mx-auto" />
          <div className="text-lg mt-4">장바구니에 담긴 상품이 없습니다.</div>
          <button
            className="mt-5 bg-gray-50 px-5 py-2 rounded-sm border mr-3"
            onClick={() => navigate(-1)}
          >
            이전 화면
          </button>
          <button
            className="mt-5 bg-black text-white px-5 py-2 rounded-sm border"
            onClick={() => navigate("/")}
          >
            쇼핑하기 홈
          </button>
        </div>
      ) : (
        <div className="cart-list">
          <div className="cart-item-list">
            {/* 상품별 장바구니 */}
            {Array.isArray(cartItems) &&
              cartItems.map((item) => {
                if (item.carts.length === 0) return null;
                return (
                  <CartItem
                    key={item.id}
                    item={item}
                    onChange={handleOnChangeCount}
                    onDelete={handleOnDelete}
                  />
                );
              })}
          </div>
          <div className="flex justify-between font-bold text-lg bg-white p-4 mb-1 border border-solid border-gray-200">
            <span>주문 예상금액</span>
            <span className=" text-kakao-blue text-xl">
              {`${comma(totalPrice)}원`}{" "}
            </span>
          </div>
          <Button color="kakao" className="order-btn" onClick={handleOnOrder()}>
            <span>총 {getTotalCartCountIncludingOptions()}건 주문하기</span>
          </Button>
        </div>
      )}
    </Container>
  );
};

export default CartList;
