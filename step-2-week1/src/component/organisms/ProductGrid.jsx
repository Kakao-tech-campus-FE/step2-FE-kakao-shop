import ProductCard from "../molecules/ProductCard";
import React, { useState, useEffect} from 'react';
import axios from 'axios';
// import fImage from "../../img/images/1.jpg";
import '../../../src/styles/organisms/ProductGrid.css'
// import Loding from "../component/atoms/Loader";

/**
 * @param {object} productsData - products
 */
const ProductGrid = ({ productsData }) => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    setProducts(productsData.data.response);
  }, []);




  return (
    <div className="product-grid">
      
      { 
        products? products.map((product) => (
        <ProductCard key={product.id} product={product} />
        
      )): null}
      
    </div>
  );
};

export default ProductGrid;