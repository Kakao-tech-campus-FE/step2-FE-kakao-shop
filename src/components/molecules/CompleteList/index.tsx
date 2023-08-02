import CompleteOption from "@components/atoms/CompleteOption";
import { Product } from "@components/organisms/CompleteForm";
import { styled } from "styled-components";

interface Props {
  products: Product[];
}

const CompleteList = ({ products }: Props) => {
  return (
    <Wrapper>
      <h3>주문 상품 정보</h3>
      {products.map((product, index) => (
        <ProductWrapper key={`${product.productName}`}>
          <ul>
            <li>
              <span>상품명</span>
              {product.productName}
            </li>
            <li>
              <span>주문번호</span>
              {index + 1}
            </li>
            <CompleteOption options={product.items} />
          </ul>
        </ProductWrapper>
      ))}
    </Wrapper>
  );
};

export default CompleteList;

const Wrapper = styled.div`
  margin-top: 40px;
  border: 1px solid #ebebeb;

  & > h3 {
    padding: 16px 0;
    text-align: center;
    font-weight: 700;
  }
`;

const ProductWrapper = styled.div`
  padding: 16px 16px 0;
  border-top: 1px solid #ebebeb;

  li {
    padding-bottom: 16px;
  }

  li > span {
    display: inline-block;
    width: 90px;
    color: #444;
  }
`;
