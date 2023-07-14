import Card from "@components/atoms/Card";
import Photo from "@components/atoms/Photo";
import { Product } from "@components/organisms/ProductGrid";
import { comma } from "@utils/regex";
import { styled } from "styled-components";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <CardWrapper>
      <Card url={`/product/${product.id}`}>
        <Photo
          src={product.image}
          alt={product.productName}
          width={"284px"}
          height={"157px"}
          radius={"8px"}
        />
        <Tags>
          <span>무료배송</span>
        </Tags>
        <h3>{product.productName}</h3>
        <p>
          <strong>톡딜가</strong> <b>{comma(product.price)}</b>원~
        </p>
      </Card>
    </CardWrapper>
  );
};

export default ProductCard;

const CardWrapper = styled.div`
  width: 284px;
  padding: 0 20px 50px 0;

  h3 {
    color: #000;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.02em;
  }
  p {
    margin-top: 7px;
    font-weight: 700;
    font-size: 18px;
    color: #111;

    & > strong {
      color: #4684e9;
    }

    & > b {
      font-size: 20px;
    }
  }
`;

const Tags = styled.div`
  height: 22px;
  padding: 10px 0 9px;

  span {
    display: inline-block;
    padding: 0 5px;
    background-color: #f2f6f8;
    border-radius: 1px;
    font-size: 11px;
    line-height: 22px;
    color: rgba(24, 32, 55, 0.7);
    letter-spacing: -0.05em;
    vertical-align: top;
  }
`;
