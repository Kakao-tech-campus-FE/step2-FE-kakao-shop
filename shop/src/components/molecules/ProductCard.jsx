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
  padding:20px;
  letter-spacing: -0.5px;
  margin: 0 30px 30px;
`
const StyledProductName = styled.h1`
  font-size: 20px; 

  margin-bottom: 10px;
`
const StyledProductPrice = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
export default ProductCard