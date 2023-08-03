import { Product } from "@components/organisms/CartForm";
import { styled } from "styled-components";
import { comma } from "@utils/regex";
import Option from "../Option";

interface Props {
  product: Product;
  setItems: React.Dispatch<React.SetStateAction<Product[]>>;
}

const CartItem = ({ product, setItems }: Props) => {
  const getTotalPrice = () => {
    return comma(product.carts.reduce((total, cart) => total + cart.price, 0));
  };

  const getTotalQuantity = () => {
    return product.carts.reduce((total, cart) => total + cart.quantity, 0);
  };

  return (
    <Wrapper>
      <h4>{product.productName}</h4>
      {product.carts.map((cart) => (
        <Option key={cart.id} cart={cart} setItems={setItems} />
      ))}
      <DiscountInfo>
        <ol>
          <li>
            상품금액 ({getTotalQuantity()})개 <p>{getTotalPrice()}원</p>
          </li>
          <li>
            즉시 할인금액<p>0원</p>
          </li>
          <li>
            톡딜 할인금액 <p>0원</p>
          </li>
          <li>
            주문금액 <p>{getTotalPrice()}원</p>
          </li>
        </ol>
      </DiscountInfo>
    </Wrapper>
  );
};

export default CartItem;

const Wrapper = styled.div`
  padding: 16px 16px 16px 46px;
  border-top: 1px solid rgba(237, 237, 237, 0.5);
  border-bottom: 1px solid #ebebeb;
  background-color: #fff;

  h4 {
    font-weight: 700;
    font-size: 16px;
  }
`;

const DiscountInfo = styled.div`
  margin-top: 16px;
  padding: 3px 11px 11px;
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  background-color: #fafafa;

  li {
    display: flex;
    margin-top: 8px;
    color: #666;
  }

  li:last-child {
    color: #333;
    font-weight: 700;
  }

  p {
    margin-left: auto;
  }
`;
