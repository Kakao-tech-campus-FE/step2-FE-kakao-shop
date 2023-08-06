import { styled } from "styled-components";
import { comma } from "../../utils/comma";
import Photo from "../atoms/Photo";

const ProductInformationColumn = ({ product }) => {
    const { productName, price, image } = product;
    return (
        <ProductInformationColumnContainer>
            <ProductInformationBox>
                <Photo src={image} alt={productName} />
            </ProductInformationBox>
            <ProductInformationBox>
                <ProductInformationTitle className="name">{productName}</ProductInformationTitle>
                <ProductInformationPrice>{comma(price)}원</ProductInformationPrice>
            </ProductInformationBox>
        </ProductInformationColumnContainer>
    );
};

export default ProductInformationColumn; 

// ProductInformationColumn내 레이아웃을 위한 Container
const ProductInformationColumnContainer = styled.div`
    display:flex;
    padding-top: 100px;
    min-width : 900px;
`

const ProductInformationBox = styled.div`
    margin-right: 50px;
`

const ProductInformationTitle = styled.p`
    font-size: 28px;
    max-width: 360px;
`

const ProductInformationPrice = styled.p`
    font-size: 20px;
`