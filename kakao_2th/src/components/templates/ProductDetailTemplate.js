import React from "react";
import Container from "../atoms/Container";
import ProductInformationColumn from "../molecules/ProductInformationColumn";
import OptionColumn from "../molecules/OptionColumn";
import "../../styles/Templates/ProductDetailTemplate.css"


const ProductDetailTemplate = ({ product }) => {
    return (
        <Container>
            <ProductInformationColumn product={product} />
            <OptionColumn product={product} />
        </Container>
    );
};

export default ProductDetailTemplate;
