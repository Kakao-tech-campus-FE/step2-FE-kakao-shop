import { useState, useEffect, useCallback, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Container from "../atoms/Container";
import Box from "../atoms/Box";
import CartItem from "../atoms/CartItem";
import "../../styles/molecules/CartList.css";
import Card from "../atoms/Card";
import { comma } from "../../utils/convert";
import Button from "../atoms/Button";
import { updateCart } from "../../services/cart";
import { useMutation } from "react-query";

const CartList = ({ data }) => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setCartItems(data?.data?.response?.products);
    setTotalPrice(data?.data?.response?.totalPrice);
  }, [data]);

  const getTotalCartCountIncludeOptions = useCallback(() => {
    let count = 0;
    cartItems.forEach((item) => {
      item.carts.forEach((cart) => {
        count += cart.quantity; // 개별 옵션에 해당
      });
    });
    return count;
  }, [cartItems]);

  const [updatePayload, setUpdatePayload] = useState([]);
  const initPayload = useRef([]); // DOM 에 접근할 때
  /**
   * 옵션의 수량 변경과 가격 변경을 관리
   * @param {number} optionId : 옵션의 아이디
   * @param {number} quantity : 옵션의 수량
   * @param {number} price : 옵션 금액
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

  const { mutate } = useMutation({
    mutationFn: updateCart,
  });

  return (
    <Container className="cart-list flex flex-col">
      <Box className="text-center h-11">
        <h1 className=" text-sm align-middle mt-3">장바구니</h1>
      </Box>
      <Card>
        {/* {상품별 장바구니} */}
        {Array.isArray(cartItems) &&
          cartItems.map((item) => {
            return (
              <CartItem
                key={item.id}
                item={item}
                onChange={handleOnChangeCount}
              />
            );
          })}
      </Card>
      <Card>
        <div className="row block h-16 font-bold">
          <span className="expect inline-block float-left p-6">
            주문 예상금액
          </span>
          <div className="sum-price inline-block float-right p-6 col text-blue">
            {comma(totalPrice)}원
          </div>
        </div>
      </Card>
      <Button
        className="order-btn block width-full h-14 bg-yellow"
        onClick={() => {
          console.log("imhere");

          // 변경된 개수만 파싱해서 페이로드로 보내주기.
          // payload 더 작게 할 수 있으니
          mutate(updatePayload, {
            onSuccess: (data) => {
              console.log("success");
              // navigate to order page
              navigate("/order");
            },
            onError: (error) => {
              console.log("error");
            },
          });

          // navigate to order page
          // 결제 프로세스
          // 1. 장바구니에 있는 모든 항목 그대로 결제 페이지에 담김
          // 2. 결제 페이지에서는 수량 변경 x ,
        }}
      >
        <span className="font-bold">
          총 {getTotalCartCountIncludeOptions()}건 주문하기
        </span>
      </Button>
    </Container>
  );
};

export default CartList;
