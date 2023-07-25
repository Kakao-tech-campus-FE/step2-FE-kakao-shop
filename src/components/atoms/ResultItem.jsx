import { Collapse, Divider } from "antd";
import { styled } from "styled-components";

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ResultItem = ({ product }) => {
  const items = [
    {
      key: "1",
      label: product.productName,
      children: product.items.map((item, index) => (
        <div key={item.id}>
          <Row>
            <p>
              {item.optionName}, {item.quantity}개
            </p>

            <p>{item.price.toLocaleString()}원</p>
          </Row>
          {index === product.items.length - 1 ? null : <Divider />}
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

export default ResultItem;
