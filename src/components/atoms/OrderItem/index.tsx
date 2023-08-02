import { Product } from "@components/organisms/CartForm";
import { comma } from "@utils/regex";
import { styled } from "styled-components";

interface Props {
  product: Product;
}

const OrderItem = ({ product }: Props) => {
  const { carts } = product;
  return (
    <Wrapper>
      <ProductName>{product.productName}</ProductName>
      {carts.map((cart) => (
        <Option key={cart.id}>
          <h4>
            {cart.option.optionName}, {cart.quantity}개
          </h4>
          <span>
            <strong>{comma(cart.price)}</strong>원
          </span>
        </Option>
      ))}
      <Delivery>무료배송</Delivery>
    </Wrapper>
  );
};

export default OrderItem;

const Wrapper = styled.div`
  margin-bottom: 14px;
  background-color: #fff;
`;

const ProductName = styled.h3`
  padding: 16px;
  border-top: 1px solid #ebebeb;
  font-weight: 700;
`;

const Option = styled.div`
  padding: 16px;
  border-top: 1px solid #ebebeb;

  & > h4 {
    padding-bottom: 8px;
  }

  & > span {
    strong {
      font-weight: 700;
    }
  }
`;

const Delivery = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0 16px;
  border-top: 1px solid #ebebeb;
  font-size: 14px;
  color: #4684e9;
`;
