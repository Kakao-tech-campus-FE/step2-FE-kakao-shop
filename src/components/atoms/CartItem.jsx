import Card from "./Card";
import Counter from "../molecules/Counter";
import { comma } from "../../utils/convert";
import styled from "styled-components";
import { forwardRef } from "react";

const ProductName = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const Option = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EachOption = styled.div`
  border: 1px solid #e5e7eb;
  width: 50rem;
  padding: 0.8rem;
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50rem;

  padding: 0.8rem;
  margin: 0.2rem 0 2rem 0;

  font-size: 1.2rem;

  .price {
    color: #2986ff;
    font-weight: bold;
  }
`;

const CartItem = forwardRef(({ item, onChange, onClick }, ref) => {
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
                <span className="counter">
                  <Counter
                    value={cart.quantity}
                    onIncrease={(count) => {
                      onChange(cart.option.id, count, cart.option.price);
                    }}
                    onDecrease={(count) => {
                      onChange(cart.option.id, count, -cart.option.price);
                    }}
                  />
                </span>
                <div className="price">
                  <span>{comma(cart.option.price * cart.quantity)}원</span>
                </div>
              </Option>
            </EachOption>
          </Card>
        ))}
        <Card className="total-price">
          <TotalPrice className="row">
            <div>주문 금액</div>
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
});

export default CartItem;
