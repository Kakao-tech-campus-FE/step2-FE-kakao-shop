import { useCallback, useEffect, useState } from "react";
import CartItem from "../molecules/CartItem";
import { comma } from "../../utils/convert";
import { updateCart } from "../../services/cart";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const CartList = ({ data }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    setCartItems(data?.data?.response?.products);
    setTotalPrice(data?.data?.response?.totalPrice);
  }, [data]);

  const { mutate } = useMutation({
    mutationFn: updateCart,
    onSuccess: () => {
      console.log("장바구니 업데이트 성공");
    },
    onError: (error) => {
      console.log("error", error);
      alert(error.response.data.error.message);
    },
  });

  const getTotalQuantity = useCallback(() => {
    let totalQuantity = 0;
    cartItems?.forEach((item) => {
      item.carts.forEach((cart) => {
        totalQuantity += cart.quantity;
      });
    });
    return totalQuantity;
  }, [cartItems]);
  const handleOnChangeCount = (optionId, quantity, price) => {
    mutate([
      {
        cartId: optionId,
        quantity: quantity,
      },
    ]);
    setCartItems((prev) => {
      return prev.map((item) => {
        return {
          ...item,
          carts: item.carts.map((cart) => {
            if (cart.id === optionId) {
              return {
                ...cart,
                quantity: quantity,
              };
            } else {
              return cart;
            }
          }),
        };
      });
    });
    setTotalPrice((prev) => {
      return prev + price;
    });
  };

  return (
    <div className={"m-auto flex w-full max-w-4xl flex-col gap-2"}>
      <div className={"flex h-20 items-center justify-center"}>
        <h1 className={"text-4xl font-bold"}>장바구니</h1>
      </div>
      <div
        className={
          "cart-items flex w-full flex-col items-center justify-center gap-10"
        }
      >
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
          <div className={"flex h-40 items-center justify-center"}>
            <h1 className={"text-2xl font-bold"}>장바구니가 비었습니다.</h1>
          </div>
        )}
      </div>
      {getTotalQuantity() > 0 && (
        <div className={"flex w-full flex-col items-center justify-center"}>
          <div
            className={
              "flex w-full flex-row justify-end py-5 text-xl font-bold text-indigo-500"
            }
          >
            <span className={"total-price pr-3"}>최종 금액</span>
            <span>{comma(totalPrice)}원</span>
          </div>
          <button
            className={"mx-5 box-content w-full bg-kakao-yellow py-5 text-xl"}
            onClick={() => {
              navigate("/order");
            }}
          >
            {getTotalQuantity()}건 주문하기
          </button>
        </div>
      )}
    </div>
  );
};

export default CartList;
