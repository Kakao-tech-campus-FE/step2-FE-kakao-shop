import Card from "../atoms/Card";
import { comma } from "../../utils/convert";
import Photo from "../atoms/Photo";
import styled from 'styled-components';

const ProductCard = ({product})=>{
  return (
    <StyledCard>
    <Card to={`/product/${product.id}`}>
      <div className="rounded-lg lg:overflow-hidden lg:w-[300px] lg:h-[200px] mb-2">
        <Photo src={product.image} alt={product.productName} className="lg:hover:scale-110 transition-transform ease-in-out duration-500"/>
      </div>
      <StyledProductName>{product.productName}</StyledProductName>
      <StyledProductPrice>
        <span className="text-blue-500 mr-3">톡딜가</span>
        {comma(product.price)}원
        </StyledProductPrice>
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
  font-size: 25px;
  font-weight: 700;
`;
export default ProductCard