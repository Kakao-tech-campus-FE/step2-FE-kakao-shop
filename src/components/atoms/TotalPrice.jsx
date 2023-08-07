import styled from "styled-components";
import { comma } from "../../utils/convert";

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50rem;
  padding: 0.8rem;
  margin-bottom: 1rem;

  font-size: 1.2rem;

  .price {
    color: #0044ff;
    font-weight: bold;
  }
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
        <div className="price">{comma(totalPrice)}원</div>
      </Price>
    </>
  );
};

export default TotalPrice;
