import { Card } from "antd";
import { styled } from "styled-components";
import Counter from "./Counter";

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled.button`
  display: block;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const CartItem = ({ item, onChange, onCartDelete, onItemDelete }) => {
  return (
    <Card
      extra={
        <StyledButton
          onClick={() =>
            onCartDelete(
              item.id,
              item.carts.reduce((acc, cur) => acc + cur.price, 0)
            )
          }
        >
          삭제
        </StyledButton>
      }
      title={item.productName}
      style={{ width: "700px", margin: "10px auto" }}
      headStyle={{ backgroundColor: "#f5f5f5" }}
    >
      {item.carts.map((cart) => (
        <Card
          type="inner"
          key={cart.id}
          title={cart.option.optionName}
          extra={
            <StyledButton
              onClick={() =>
                onItemDelete(cart.option.id, cart.option.price * cart.quantity)
              }
            >
              삭제
            </StyledButton>
          }
          style={{ width: "600px", margin: "10px auto 0" }}
        >
          <Row>
            <Counter
              value={cart.quantity}
              onClickIncrease={(count) =>
                onChange(cart.id, count, cart.option.price)
              }
              onClickDecrease={(count) =>
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
