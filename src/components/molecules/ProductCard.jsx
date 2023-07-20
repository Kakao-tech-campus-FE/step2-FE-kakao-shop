import Card from "../atoms/Card";
import { styled } from "styled-components";
import Photo from "../atoms/Photo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
`;

const ProductName = styled.h3`
  width: 200px;
  font-size: 18px;
  font-weight: 400;
`;

const ProductPrice = styled.p`
  font-size: 22px;
  font-weight: 600;
`;

const ProductCard = ({ product }) => {
  return (
    <Card to={`/products/${product.id}`}>
      <Container>
        <Photo
          src={`${process.env.REACT_APP_BASE_URL}${product.image}`}
          alt={product.productName}
        />
        <ProductName>{product.productName}</ProductName>
        <ProductPrice>{`${product.price.toLocaleString()}원`}</ProductPrice>
      </Container>
    </Card>
  );
};

export default ProductCard;
