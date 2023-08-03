import { useState, useEffect, useCallback, useRef } from "react";
import CartItem from "../atoms/CartItem";
import Card from "../atoms/Card";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../atoms/SubmitButton";
import { useMutation } from "@tanstack/react-query";
import routes from "../../routes.js";
import { updateCart } from "../../services/cart";
import { comma } from "../../utils/convert";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  border: 1px solid #e5e7eb;
  padding: 1rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`;

const StyledGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50rem;

  padding: 0.8rem;
  margin: 0.2rem 0 2rem 0;

  font-size: 1.2rem;

  .price {
    color: #0044ff;
    font-weight: bold;
  }
`;

const CartList = ({ data }) => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  const updatePayload = useRef([]);

  useEffect(() => {
    setCartItems(data?.data?.response?.products);
  }, [data]);

  const totalPrice = data?.data?.response.totalPrice;

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
    <Container>
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
        <TotalPrice>
          <div>주문 예상 금액</div>
          <div className="price">{comma(totalPrice)}원</div>
        </TotalPrice>
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
    </Container>
  );
};

export default CartList;
