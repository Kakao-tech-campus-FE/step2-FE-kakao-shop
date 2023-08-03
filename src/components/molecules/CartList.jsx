import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../atoms/Container";
import Box from "../atoms/Box";
import CartItem from "../atoms/CartItem";
import Card from "../atoms/Card";
import { comma } from "../../utils/convert";
import Button from "../atoms/Button";
import { useMutation } from "react-query";
import { updateCart } from "../../services/cart";

const staticServerUrl = process.env.REACT_APP_PATH || "";

const CartList = ({ data }) => {
  const router = useNavigate();
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

  const getTotalCartCountIncludeOptions = useCallback(() => {
    let count = 0;
    cartItems.forEach((item) => {
      item.carts.forEach((cart) => {
        count += cart.quantity;
      });
    });
    return comma(count);
  }, [cartItems]);

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
    <Container className="cart-List">
      <Box>
        <h1>장바구니</h1>
      </Box>
      <Card>
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
        <div className="row">
          <span className="expect">주문 예상금액</span>
          <div className="sum-price">{comma(totalPrice)}원</div>
        </div>
      </Card>
      <Button
        className="order-btn"
        onClick={() => {
          mutate(updatePayload, {
            onSuccess: (data) => {
              router(staticServerUrl + "/order");
            },
            onError: (error) => {
              alert("에러 발생");
            },
          });
        }}
      >
        <span>
          총 {cartItems ? getTotalCartCountIncludeOptions() : 0}건 주문하기
        </span>
      </Button>
    </Container>
  );
};

export default CartList;
