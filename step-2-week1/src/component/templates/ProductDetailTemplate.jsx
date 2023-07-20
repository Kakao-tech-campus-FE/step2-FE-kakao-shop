import Container from "../atoms/Container";
import ProductInformationColumn from "../molecules/ProductInformationColumn";
import OptionColumn from "../molecules/OptionColumn";
import React, { useState, useEffect} from 'react';
import axios from 'axios';
import '../../styles/templates/ProductDetailTemplate.css'

const ProductDetailTemplate = ({ product }) => {
    // // 
    // console.log(product);
  
    // 
    return (
        <Container>
        <div className="product-detail-template">
            <ProductInformationColumn product={product}/>
            <OptionColumn product={product} />
            </div>    
        </Container>
        
    )

}

export default ProductDetailTemplate;