import Card from "../atoms/Card";
import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";
import styled from 'styled-components';

const ProductCard = ({product})=>{
  return (
    <StyledCard>
    <Card to={`/product/${product.id}`}>
      <Photo src={product.image} alt={product.productName}/>
      <StyledProductName>{product.productName}</StyledProductName>
      <StyledProductPrice>{comma(product.price)}원</StyledProductPrice>
    </Card>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  border: 1px solid lightgray;
  padding:30px;
  letter-spacing: -0.5px;
  margin-bottom: 30px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`
const StyledProductName = styled.h1`
  font-size: 20px; 
  font-weight: 700;
  margin-bottom: 10px;
`
const StyledProductPrice = styled.p`
  font-size: 18px;
`;
export default ProductCard