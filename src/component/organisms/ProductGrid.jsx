import ProductCard from "../molecules/ProductCard"
import axios from "axios";
import React, { useState, useEffect} from "react";
import Photo from "../atoms/Photo";
import Card from "../atoms/Card";

const staticServerUrl = process.env.REACT_APP_PATH || "";

    const ProductGrid = ({ product }) => {
        const [products, setData] = useState(null);
        // const [loding, setLoding] = useState(true);
      
        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await axios.get(staticServerUrl + "/api/products");
              const jsonData = await response.data.response;
      
              setData(jsonData);
            } catch (error) {
              console.log(`Error fetching data:`, error);
            }
          };
          fetchData();
        }, []);
    
  

//presentation components: 데이어를 단순히 표기만 하는 용도
    return(
      <div className="inline-grid m-8 grid-cols-4 gap-8">
            {products && products.map((product)=>(
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
            }

export default ProductGrid;