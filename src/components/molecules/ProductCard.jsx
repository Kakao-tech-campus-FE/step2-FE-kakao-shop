import Card from "../atoms/Card";
import { styled } from "styled-components";

const ProductImg = styled.img`
  border-radius: 10px;
  z-index: 1;
  transition: 0.2s all ease-in-out;
  width: 250px;

  &:hover {
    transform: scale(1.1);
  }
`;

const ProductName = styled.h3`
  font-size: 18px;
  font-weight: 400;
`;

const ProductPrice = styled.p`
  font-size: 22px;
`;

const ProductCard = ({ product }) => {
  return (
    <Card to={`/products/${product.id}`}>
      <ProductImg
        src={`../../../assets${product.image}`}
        alt={product.productName}
      />
      <ProductName>{product.productName}</ProductName>
      <ProductPrice>{`${product.price.toLocaleString()}원`}</ProductPrice>
    </Card>
  );
};

export default ProductCard;
