import Box from "../atoms/Box";
import CartItem from "../atoms/CartItem";
import Card from "../atoms/Card";
import { comma } from "../../utils/convert";
import Button from "../atoms/Button";
import { useCallback, useEffect, useState } from "react";
import Container from "../atoms/Container";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { updateCart } from "../../services/updateCart";

const CartList = ({ data }) => {
  const [cartItems, setCartItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [updatePayload, setUpdatePayload] = useState([]);
  const navigate = useNavigate();
  // const initPayload = useRef([]);

  const { mutate } = useMutation({
    mutationFn: updateCart,
  });

  useEffect(() => {
    setCartItem(data?.data?.response?.products);
    setTotalPrice(data?.data?.response?.totalPrice);
  }, [data]);

  const getTotalCartCountIncludeOptions = useCallback(() => {
    if (cartItems) {
      // acc : count
      // cur : item
      return cartItems.reduce((count, item) => {
        // count : item의 cart 수량 누적
        return (
          // 누적 cart item 수량  + 현재 item의 carts배열 순회(옵션 수량)
          count +
          item.carts.reduce((subCount, cart) => subCount + cart.quantity, 0)
        );
      }, 0);
    }
    //null이나 undefined의 경우
    return 0;
  }, [cartItems]);

  /** 옵션의 수량 변경과 가격 변경을 관리,
   * 수량 변경이 있을 때만 함수 실행
   * @param {number} optionId: 옵션의 아이디
   * @param {number} quantity : 옵션 수량
   * @param {number} price : 옵션 금액
   */
  const handleOnChangeCount = (optionId, quantity, price) => {
    setUpdatePayload((prev) => {
      if (prev.find((item) => item.cartId === optionId)) {
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

    setCartItem((prev) => {
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

  return (
    <Container>
      <div className=" block mx-auto  max-w-[1024px] w-[100%]">
        <div className=" border p-4 bg-white">
          <h1 className=" text-xl mb-4 flex justify-center items-center font-bold">
            장바구니
          </h1>
          <div className="border p-8">
            {/* 상품별 장바구니 */}
            {Array.isArray(cartItems) &&
              cartItems.map((item) => {
                return (
                  <CartItem
                    key={item.id}
                    item={item}
                    onChange={handleOnChangeCount} //개수변경
                  />
                );
              })}
          </div>
        </div>
        <div className="border mt-10 p-4 bg-white">
          <Card>
            <div className="row text-xl font-bold flex justify-between ">
              <span className="expect">주문 예상 금액</span>
              <div className="sum-price text-blue-500">
                {comma(totalPrice)}원
              </div>
            </div>
          </Card>
        </div>
        <Button
          className="order-btn"
          onClick={() => {
            mutate(updatePayload, {
              onSuccess: () => {
                navigate("/order");
              },
              onError: (error) => {
                alert({ error });
              },
            });
          }}
        >
          <span> {getTotalCartCountIncludeOptions()}건 주문하기</span>
        </Button>
      </div>
    </Container>
  );
};

export default CartList;
