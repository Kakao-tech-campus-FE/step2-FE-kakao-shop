import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";
import ProductCardSkeleton from "../atoms/ProductCardSkeleton";
import styled from "styled-components";


const ProductCard = ({product, loading}) => {
    return (
      <>
        {loading ? (
          <ProductCardSkeleton/>
        ) : (
          <Container to={`/products/${product.id}`}>
            <ProductImage>
              <Photo src={product.image} alt={product.productName}/>
            </ProductImage>
            <ProductName className="product-name">{product.productName}</ProductName>
            <ProductPrice className="product-price">{comma(product.price)}원</ProductPrice>
        </Container>
        )}
      </>
  );
};

export default ProductCard;

const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 16px;
`;

const ProductImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const ProductName = styled.div`
  decoration-text: none;
  display: inline-block;
  font-size: 1em;
  font-weight: 400;
  color: black;
`;

const ProductPrice = styled.div`
  decoration-text: none;
  margin-left: auto; 
  color: black;
  font-weight: 700;
  font-size: 1.2em;
  text-align: center;
`;