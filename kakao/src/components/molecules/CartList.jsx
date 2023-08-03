import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../atoms/Conatiner";
import Card from "../atoms/Card";
import CartItem from "../atoms/CartItem";
import Button from "../atoms/Button";
import { comma } from "../../utils/convert";
import { useMutation } from "react-query";
import { updateCart } from "../../services/cart";

const staticServerUrl = process.env.REACT_APP_PATH || "";

const CartList = ({ data }) => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [updatePayload, setUpdatePayload] = useState([]);

  const { mutate } = useMutation({
    mutationFn: updateCart,
  });

  useEffect(() => {
    // validate 또는 구조분해 해주는게 좋음 아래보다
    setCartItems(data?.data?.response?.products);
    setTotalPrice(data?.data?.response?.totalPrice);
  }, [data]);

  // 마지막 버튼에 총 몇건 주문하기에 들어갈 옵션포함 총 주문건수 구하는 함수
  const getTotalCartCount = useCallback(() => {
    let count = 0;
    cartItems.forEach((item) => {
      item.carts.forEach((cart) => {
        count += cart.quantity; //개별 옵션에 해당
      });
    });
    return count;
  }, [cartItems]);

  /**
   * 옵션의 수량 변경과 가격 변경을 관리하는 함수
   * @param {number} optionId : 옵션의 아이디
   * @param {number} quantity : 옵션 수량
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

  return (
    <Container className="cart-list">
      <h1>장바구니</h1>
      <div>
        {/* 상품별 장바구니 */}
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
      </div>

      <Card>
        <div className="row">
          <span className="expect">주문 예상금액</span>
          <div className="total-expect-price">{comma(totalPrice)}원</div>
        </div>
      </Card>

      <Button
        className="order-button"
        onClick={() => {
          //장바구니 정보 수정하는 api호출(개수 변경 있을 경우)
          mutate(updatePayload, {
            onSuccess: (data) => {
              //주문 페이지로 이동
              navigate(staticServerUrl + "/order");
            },
            onError: (error) => {},
          });
        }}
      >
        <span>총 {getTotalCartCount()}건 주문하기</span>
      </Button>
    </Container>
  );
};

export default CartList;
