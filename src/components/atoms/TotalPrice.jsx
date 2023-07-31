import styled from "styled-components";
import { comma } from "../../utils/convert";

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  width: 32rem;
  padding: 0.8rem;
  font-weight: bold;
`;

const TotalPrice = ({ item }) => {
  const orderItem = [];

  item.map((eachItem) => {
    orderItem.push(eachItem.carts);
  });

  const totalPrice = orderItem
    .flatMap((x) => x.map((x) => x.price))
    .reduce((acc, cur) => acc + cur, 0);

  return (
    <>
      <Price className="row">
        <div>총 주문 금액</div>
        <div>{comma(totalPrice)}원</div>
      </Price>
    </>
  );
};

export default TotalPrice;
