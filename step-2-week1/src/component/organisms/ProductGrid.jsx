import ProductCard from "../molecules/ProductCard";
import React, { useState, useEffect} from 'react';
import axios from 'axios';
// import fImage from "../../img/images/1.jpg";
import '../../../src/styles/organisms/ProductGrid.css'
// import Loding from "../component/atoms/Loader";

// 보라 {} 안 변수 임의로 바꿈
const ProductGrid = ({ product }) => {
  const [products, setData] = useState(null);
  // const [loding, setLoding] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com/products');
        const jsonData = await response.data.response;

        setData(jsonData);
        // setLoding(false);
      } catch (error) {
        console.log(`Error fetching data:`, error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="product-grid">
      
      {products? products.map((product) => (
        <ProductCard key={product.id} product={product} />
        
      )): null}
      
    </div>
  );
};

export default ProductGrid;