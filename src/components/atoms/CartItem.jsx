import { Card } from "antd";
import { styled } from "styled-components";
import Counter from "./Counter";

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartItem = ({ item, onChange }) => {
  return (
    <Card
      type="inner"
      extra="삭제"
      title={item.productName}
      style={{ width: "700px", margin: "10px auto" }}
    >
      {item.carts.map((cart) => (
        <Card
          key={cart.id}
          title={cart.option.optionName}
          extra="삭제"
          style={{ width: "600px", margin: "10px auto 0" }}
        >
          <Row>
            <Counter
              value={cart.quantity}
              onIncrease={(count) =>
                onChange(cart.id, count, cart.option.price)
              }
              onDecrease={(count) =>
                onChange(cart.id, count, -cart.option.price)
              }
            />
            <div>{(cart.quantity * cart.option.price).toLocaleString()}원</div>
          </Row>
        </Card>
      ))}
    </Card>
  );
};

export default CartItem;
