import Card from "../atoms/Card";
import { comma } from "../../utils/convert";
import styled from "styled-components";

const Option = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .price {
    font-weight: bold;
  }
`;

const EachOption = styled.div`
  width: 50rem;
  margin-top: 2rem;
`;

const OrderItem = ({ item, onChange, onClick }) => {
  return (
    <>
      <div className="cart-item-box">
        {item.carts.map((cart) => (
          <Card key={cart.id} className="cart">
            <EachOption>
              <div className="option-name">
                <span>{cart.option.optionName}</span>
              </div>
              <Option className="row">
                <span className="counter">{cart.quantity}개</span>
                <div className="price">{comma(cart.price)}원</div>
              </Option>
            </EachOption>
          </Card>
        ))}
      </div>
    </>
  );
};

export default OrderItem;
