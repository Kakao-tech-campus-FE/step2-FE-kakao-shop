import { styled } from "styled-components";
import { comma } from "../../utils/comma";
import Photo from "../atoms/Photo";

const ProductInformationColumn = ({ product }) => {
    const { productName, price, image } = product;
    return (
        <ProductInformationColumnContainer>
            <div className="col">
                <Photo src={image} alt={productName} />
            </div>
            <div className="col">
                <h1 className="name">{productName}</h1>
                <p className="price">{comma(price)}원</p>
            </div>
        </ProductInformationColumnContainer>
    );
};

export default ProductInformationColumn; 

// ProductInformationColumn내 레이아웃을 위한 Container
const ProductInformationColumnContainer = styled.div`
    display:flex;
`