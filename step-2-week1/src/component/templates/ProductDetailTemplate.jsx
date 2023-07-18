import Container from "../atoms/Container";
import ProductInformationColumn from "../molecules/ProductInformationColumn";
import OptionColumn from "../molecules/OptionColumn";
import React, { useState, useEffect} from 'react';
import axios from 'axios';

const ProductDetailTemplate = ({ product }) => {
    // 
    console.log(product);
  
    // 
    return (
        <Container>
            <ProductInformationColumn product={product}/>
            <OptionColumn product={product} />
            {/*  */}
            <ProductInformationColumn product />
            <OptionColumn product />

            
        </Container>
    )

}

export default ProductDetailTemplate;