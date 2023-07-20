import { Collapse, Divider } from "antd";
import { styled } from "styled-components";

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OrderItem = ({ item }) => {
  const items = [
    {
      key: "1",
      label: item.productName,
      children: item.carts.map((cart, index) => (
        <div key={cart.id}>
          <Row>
            <p>
              {cart.option.optionName}, {cart.quantity}개
            </p>

            <p>{(cart.quantity * cart.option.price).toLocaleString()}원</p>
          </Row>
          {index === item.carts.length - 1 ? null : <Divider />}
        </div>
      )),
    },
  ];

  return (
    <Collapse
      accordion
      size="large"
      expandIconPosition="end"
      defaultActiveKey={["1"]}
      items={items}
      style={{ width: "700px", margin: "10px auto 0" }}
    />
  );
};

export default OrderItem;
