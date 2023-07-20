import { styled } from "styled-components";
import Title from "../atoms/Title";
import OrderItem from "../atoms/OrderItem";

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

  &:active {
    background-color: #fff;
  }
`;

const OrderList = ({ cart }) => {
  const cartItems = cart.data.response.products;
  const totalPrice = cart.data.response.totalPrice;

  let totalOrderCount = 0;
  cartItems.forEach((item) =>
    item.carts.forEach((cart) => (totalOrderCount += cart.quantity))
  );

  return (
    <Container>
      <Title>주문하기(총 {totalOrderCount}개)</Title>
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
          <AgreeRow>동의</AgreeRow>
          <OrderRow
            onClick={() => {
              console.log("결제되었습니다.");
            }}
          >
            {totalPrice.toLocaleString()}원 결제하기
          </OrderRow>
        </ShipContainer>
      </div>
    </Container>
  );
};

export default OrderList;
