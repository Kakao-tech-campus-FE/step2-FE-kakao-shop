import { useCallback, useEffect, useState } from "react";
import Box from "../atoms/Box";
import Card from "../atoms/Card";
import CartItem from "../atoms/CartItem";
import { comma } from "../../utils/convert";
import Button from "../atoms/Button";
import { useMutation } from "react-query";
import { updateCart } from "../../apis/cart";

const staticServerUri = process.env.REACT_APP_PATH || "";

const CartList = ({ data }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [updatePayload, setUpdatePayload] = useState([]);

  const { mutate } = useMutation({
    mutationFn: updateCart,
  });

  useEffect(() => {
    setCartItems(data?.data?.response?.products);
    setTotalPrice(data?.data?.response?.totalPrice);
  }, [data]);

  useEffect(() => {
    mutate(updatePayload);
  }, [updatePayload, mutate]);

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
   * 옵션의 수량 변경과 가격 변경 관리
   * @param {number} optionId
   * @param {number} quantity
   * @param {number} price
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
              return { ...cart, quantity };
            }
            return cart;
          }),
        };
      });
    });
  };

  /**
   * 옵션 항목 삭제
   * @param {*} optionId
   * @param {*} price
   */
  const removeCartItem = (optionId, price) => {
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
              return { ...cart, quantity: 0 };
            }
            return cart;
          }),
        };
      });
    });
  };

  return (
    <div className="relative justify-center mt-24 mx-60 text-black">
      <div className=" bg-white pb-6 shadow-sm">
        <Box className="py-4 text-center border-b">
          <h1 className="text-lg font-bold">장바구니</h1>
        </Box>

        <Card>
          {/* 상품별 장바구니 */}
          {Array.isArray(cartItems) &&
            cartItems.map((item) => {
              const nonZeroQuantityCarts = item.carts.filter(
                (cart) => cart.quantity !== 0
              );

              if (nonZeroQuantityCarts.length > 0) {
                return (
                  <div key={item.id}>
                    <CartItem
                      key={item.id}
                      item={{ ...item, carts: nonZeroQuantityCarts }}
                      onChange={handleOnChangeCount}
                      onRemove={removeCartItem}
                      mutate={mutate}
                    />
                  </div>
                );
              }
            })}
        </Card>
      </div>
      <div className="mt-10 shadow-sm">
        <Card>
          <div className="flex justify-between mb-4 px-4">
            <span className="text-xl font-bold">주문 예상금액</span>
            <div className="text-lg font-bold text-sky-600">
              {comma(totalPrice)}원
            </div>
          </div>
        </Card>
        <Button
          className="w-full h-10 mb-40 rounded-md bg-yellow-300"
          onClick={() => {
            mutate(updatePayload, {
              onSuccess: (data) => {
                window.location.href = staticServerUri + "/order";
              },
              onError: (error) => {
                window.location.href = staticServerUri + "/error";
              },
            });
          }}
        >
          <span>
            총 {cartItems ? getTotalCartCountIncludeOptions() : 0}건 주문하기
          </span>
        </Button>
      </div>
    </div>
  );
};

export default CartList;
