import ProductCard from "../molecules/ProductCard";
import React, { useState, useEffect} from 'react';
import axios from 'axios';

// 보라 {} 안 변수 임의로 바꿈
const ProductGrid = ({ asdf }) => {
  const [products, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com/products');
        const jsonData = await response.data.response;

        setData(jsonData);
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