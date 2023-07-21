import Card from "./Card";
import Counter from "../molecules/Counter";
import { comma } from "../../utils/convert";
import styled from "styled-components";

// const Box = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

const ProductName = styled.p`
  font-size: 1.2rem;
`;
const Option = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EachOption = styled.div`
  border: 1px solid #979797;
  width: 32rem;
  padding: 0.8rem;
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  width: 32rem;
  padding: 0.8rem;
`;

const CartItem = ({ item, onChange, onClick }) => {
  return (
    <>
      <div className="cart-item-box">
        <ProductName>{item.productName}</ProductName>
        {item.carts.map((cart) => (
          <Card key={cart.id} className="cart">
            <EachOption>
              <div className="option-name">
                <span>{cart.option.optionName}</span>
              </div>
              <Option className="row">
                <Counter
                  onIncrease={(count) => {
                    onChange(cart.id, count, cart.option.price);
                  }}
                  onDecrease={(count) => {
                    onChange(cart.id, count, -cart.option.price);
                  }}
                />
                <div className="price">
                  <span>{comma(cart.option.price * cart.quantity)}원</span>
                </div>
              </Option>
            </EachOption>
          </Card>
        ))}
        <Card className="total-price">
          <TotalPrice className="row">
            <div>주문 예상 금액</div>
            <div className="price">
              {comma(
                item.carts.reduce((acc, cur) => {
                  return acc + cur.option.price * cur.quantity;
                }, 0)
              )}
              원
            </div>
          </TotalPrice>
        </Card>
      </div>
    </>
  );
};

export default CartItem;
