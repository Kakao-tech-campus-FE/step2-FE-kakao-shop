import { useCallback, useEffect, useState } from "react";
import { styled } from "styled-components";
import Title from "../atoms/Title";
import CartItem from "../atoms/CartItem";
import EmptyCart from "../atoms/EmptyCart";
import { useMutation } from "react-query";
import { updateCart } from "../../services/apis";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const { mutate } = useMutation(updateCart, {
    onSuccess: () => {
      navigate("/order");
    },

    onError: (error) => {
      // 로그인 토큰이 사라진 경우
      if (error.response.status === 401) {
        alert("로그인 시간이 만료되었습니다. 다시 로그인해주세요.");
        window.location.reload();
        return;
      }
      // 사용자에게 alert로 문제를 알림
      alert("네트워크 연결이 원활하지 않습니다. 네트워크 상태를 확인해주세요.");
    },
  });

  useEffect(() => {
    setCartItems(cart.data.response.products);
    setTotalPrice(cart.data.response.totalPrice);
  }, [cart]);

  const handleOnChange = (optionId, quantity, price) => {
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
    setTotalPrice((prev) => prev + price);
  };

  const handleCartDelete = (optionId, price) => {
    setCartItems((prev) => prev.filter((item) => item.id !== optionId));
    setTotalPrice((prev) => prev - price);
  };

  const handleItemDelete = (optionId, price) => {
    setCartItems((prev) =>
      prev
        .map((item) => ({
          ...item,
          carts: item.carts.filter((cart) => cart.option.id !== optionId),
        }))
        .filter((item) => item.carts.length)
    );
    setTotalPrice((prev) => prev - price);
  };

  const getItemsLength = useCallback(() => {
    let count = 0;
    cartItems.forEach((item) => {
      item.carts.forEach((cart) => (count += cart.quantity));
    });
    return count;
  }, [cartItems]);

  const getPayload = useCallback(() => {
    const payload = cartItems.flatMap((item) => {
      return item.carts.map((cart) => {
        return { cartId: cart.id, quantity: cart.quantity };
      });
    });
    return payload;
  }, [cartItems]);

  return (
    <Container>
      <Title>장바구니</Title>
      {cartItems.length ? (
        <div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onChange={handleOnChange}
              onItemDelete={handleItemDelete}
              onCartDelete={handleCartDelete}
            />
          ))}
          <ShipContainer>
            <PriceRow>
              <Price>주문 예상 금액</Price>
              <Price>
                <span>{totalPrice.toLocaleString()}원</span>
              </Price>
            </PriceRow>
            <OrderRow onClick={() => mutate(getPayload())}>
              {getItemsLength()}건 주문하기
            </OrderRow>
          </ShipContainer>
        </div>
      ) : (
        <EmptyCart text="장바구니에 담긴 상품이 없습니다." />
      )}
    </Container>
  );
};

export default CartList;
