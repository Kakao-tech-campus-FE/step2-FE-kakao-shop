import { useCallback, useEffect, useState } from "react";
import { styled } from "styled-components";
import Title from "../atoms/Title";
import CartItem from "../atoms/CartItem";
import EmptyCart from "../atoms/EmptyCart";
import { useMutation } from "react-query";
import { updateCart } from "../../services/apis";

const Container = styled.main`
  width: 800px;
  margin: 0 auto;
  padding: 20px 0 10px;
`;

const ShipContainer = styled.div`
  width: 700px;
  height: 120px;
  margin: 10px auto 0;
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: hidden;
`;

const PriceRow = styled.div`
  height: 55%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Price = styled.div`
  width: 150px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  & > span {
    color: #4683e9;
  }
`;
const OrderRow = styled.button`
  width: 100%;
  height: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffe342;
  border: transparent;
  border-top: 1px solid #eee;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;

  &:active {
    background-color: #fff;
  }
`;

const CartList = ({ cart }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [updatedPayload, setUpdatedPayload] = useState([]);

  const { mutate } = useMutation(updateCart, {
    onSuccess: (e) => {
      console.log(e);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  useEffect(() => {
    setCartItems(cart.data.response.products);
    setTotalPrice(cart.data.response.totalPrice);
  }, [cart]);

  const handleOnChange = (optionId, quantity, price) => {
    setUpdatedPayload((prev) => {
      const isExist = prev.find((item) => item.cartId === optionId);
      if (isExist) {
        return [
          ...prev.filter((item) => item.cartId !== optionId),
          { cartId: optionId, quantity },
        ];
      }
      return [...prev, { cartId: optionId, quantity }];
    });

    setTotalPrice((prev) => prev + price);
    setCartItems((prev) =>
      prev.map((item) => {
        return {
          ...item,
          carts: item.carts.map((cart) => {
            if (cart.id === optionId) {
              return { ...cart, quantity };
            }
            return cart;
          }),
        };
      })
    );
  };

  const getItemsLength = useCallback(() => {
    let count = 0;
    cartItems.forEach((item) => {
      item.carts.forEach((cart) => (count += cart.quantity));
    });
    return count;
  }, [cartItems]);

  console.log(cartItems);
  console.log(totalPrice);
  return (
    <Container>
      <Title>장바구니</Title>
      {cartItems.length ? (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} onChange={handleOnChange} />
          ))}
          <ShipContainer>
            <PriceRow>
              <Price>주문 예상 금액</Price>
              <Price>
                <span>{totalPrice.toLocaleString()}원</span>
              </Price>
            </PriceRow>
            <OrderRow onClick={() => mutate(updatedPayload)}>
              {getItemsLength()}건 주문하기
            </OrderRow>
          </ShipContainer>
        </div>
      ) : (
        <EmptyCart />
      )}
    </Container>
  );
};

export default CartList;
