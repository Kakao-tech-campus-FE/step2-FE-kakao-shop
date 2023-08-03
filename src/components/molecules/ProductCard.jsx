import Card from "../atoms/Card";
import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";
import styled from "styled-components";

const Container = styled.div`
  width: 16rem;

  h5 {
    font-weight: 400;
  }

  p {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const staticServerUri = process.env.REACT_APP_PATH || "";

const ProductCard = ({ product }) => {
  const { id, productName, price, image } = product;

  return (
    <Container>
      <Card to={`/product/${id}`}>
        <Photo src={`${staticServerUri}${image}`} alt={productName} />
        <h5 className="product-name">{productName}</h5>
        <p className="product-price">{comma(price)}원</p>
      </Card>
    </Container>
  );
};

export default ProductCard;
