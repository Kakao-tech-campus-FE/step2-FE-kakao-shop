import { styled } from "styled-components";
import Title from "../atoms/Title";
import OrderItem from "../atoms/OrderItem";
import CheckBox from "../atoms/CheckBox";
import EmptyCart from "../atoms/EmptyCart";
import { useState } from "react";
import { useMutation } from "react-query";
import { orderCart } from "../../services/apis";
import { useNavigate } from "react-router-dom";

const Container = styled.main`
  width: 800px;
  margin: 0 auto;
  padding: 20px 0 10px;
`;

const ShipContainer = styled.div`
  width: 700px;
  height: 270px;
  margin: 10px auto 0;
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: hidden;
`;

const PriceRow = styled.div`
  height: 25%;
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

const AgreeRow = styled.div`
  height: 50%;
  border-top: 1px solid #eee;
  display: flex;
  flex-direction: column;
`;

const OrderRow = styled.button`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffe342;
  border: transparent;
  border-top: 1px solid #eee;
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:enabled:active {
    background-color: #fff;
  }
`;

const OrderList = ({ cart }) => {
  const cartItems = cart.data.response.products;
  const totalPrice = cart.data.response.totalPrice;
  const initialItems = [
    { id: 0, text: "구매조건 확인 및 결제 진행 동의", checked: false },
    { id: 1, text: "개인정보 제3자 제공 동의", checked: false },
  ];
  const [checkItems, setCheckItems] = useState(initialItems);

  const navigate = useNavigate();
  const { mutate } = useMutation(orderCart, {
    onSuccess: (res) => {
      const orderId = res.data.response.id;
      navigate(`/orders/${orderId}`);
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

  const handleItemCheck = (itemId) => {
    setCheckItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const isAllChecked = () => {
    return checkItems.every((item) => item.checked);
  };

  const handleAllItemsCheck = () => {
    setCheckItems((prev) =>
      prev.map((item) => {
        return { ...item, checked: !isAllChecked() };
      })
    );
  };

  const getTotalOrderCount = () => {
    let count = 0;
    cartItems.forEach((item) =>
      item.carts.forEach((cart) => (count += cart.quantity))
    );
    return count;
  };

  return (
    <Container>
      <Title>주문하기(총 {getTotalOrderCount()}개)</Title>
      {cartItems.length ? (
        <div>
          {cartItems.map((item) => (
            <OrderItem key={item.id} item={item} />
          ))}
          <ShipContainer>
            <PriceRow>
              <Price>최종 결제 금액</Price>
              <Price>
                <span>{totalPrice.toLocaleString()}원</span>
              </Price>
            </PriceRow>
            <AgreeRow>
              <CheckBox
                id="전체"
                text="전체 동의하기"
                title="true"
                checked={isAllChecked()}
                onCheck={handleAllItemsCheck}
              />
              {checkItems.map((item) => (
                <CheckBox
                  key={item.id}
                  id={item.id}
                  text={item.text}
                  checked={item.checked}
                  onCheck={handleItemCheck}
                />
              ))}
            </AgreeRow>
            <OrderRow disabled={!isAllChecked()} onClick={mutate}>
              {totalPrice.toLocaleString()}원 결제하기
            </OrderRow>
          </ShipContainer>
        </div>
      ) : (
        <EmptyCart text="주문할 상품을 장바구니에 담아주세요." />
      )}
    </Container>
  );
};

export default OrderList;
