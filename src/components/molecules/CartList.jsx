import { useState, useEffect, useCallback, useRef } from "react";
import CartItem from "../atoms/CartItem";
import Card from "../atoms/Card";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../atoms/SubmitButton";
import { useMutation } from "@tanstack/react-query";
import routes from "../../routes.js";
import { updateCart } from "../../services/cart";

const Title = styled.div`
  font-size: 1.5rem;
  text-align: center;
  margin: 2rem;
`;

const StyledGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CartList = ({ data }) => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  const updatePayload = useRef([]);

  useEffect(() => {
    setCartItems(data?.data?.response?.products);
  }, [data]);

  const { mutate } = useMutation({
    mutationFn: updateCart,
  });

  const getTotalCartCountIncludeOptions = useCallback(() => {
    let count = 0;
    cartItems &&
      cartItems.forEach((item) => {
        item.carts.forEach((cart) => {
          count += cart.quantity;
        });
      });

    return count;
  }, [cartItems]);

  const handleOnChangeCount = (optionId, quantity, price) => {
    updatePayload.current = updatePayload.current.map((item) =>
      item.cartId === optionId ? { ...item, quantity } : item
    );

    const isExist = updatePayload.current.some(
      (item) => item.cartId === optionId
    );
    if (!isExist) {
      updatePayload.current.push({
        cartId: optionId,
        quantity,
      });
    }

    setCartItems((prev) =>
      prev.map((item) => ({
        ...item,
        carts: item.carts.map((cart) =>
          cart.id === optionId ? { ...cart, quantity } : cart
        ),
      }))
    );
  };

  return (
    <StyledGroup className="cart-list">
      <Title>장바구니</Title>
      <Card>
        {Array.isArray(cartItems) &&
          cartItems.map((item) => {
            return (
              <CartItem
                key={item.id}
                item={item}
                ref={updatePayload}
                onChange={handleOnChangeCount}
              />
            );
          })}
      </Card>
      <SubmitButton
        className="order-btn"
        onClick={() => {
          mutate(updatePayload.current, {
            onSuccess: (data) => {
              navigate(routes.orders);
            },
            onError: (error) => {
              console.log(error);
            },
          });
        }}
      >
        총 {getTotalCartCountIncludeOptions()}건 결제하기
      </SubmitButton>
    </StyledGroup>
  );
};

export default CartList;
