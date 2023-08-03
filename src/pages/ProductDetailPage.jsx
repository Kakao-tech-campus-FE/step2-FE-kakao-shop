import { useParams } from "react-router-dom";
import { getProducts } from "../store/slices/ProductSlice";
import { getProductById } from "../services/product";
import { getDetail } from "../store/slices/detailSlice";
import Loader from "../component/atoms/Loader";
import { useQuery } from "react-query";
import ProductDetailTemplate from "../../src/component/templates/ProductDetailTemplate";
import React, { useState, useEffect, Suspense} from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";


const ProductDetailPage = ()=>{
    const navigate=useNavigate();
    const {id} = useParams();
    const {
        data, 
        error, 
        isLoading,
    }= useQuery(`product/${id}`, ()=> 
    getProductById(id)); // 구분자, api 요청 함수



    const product = data?.data?.response;
    // if (!product){
    //     return false;
    // }

    const validate=()=>{
        if(!product){
            return false;
        }

    const requiredKeys = [
        "id",
        "productName"
    ];

    const keys=Object.keys(product);
    
    for (let i =0; i<requiredKeys.length; i++){
        const requiredKeys = requiredKeys[i];
      if (!keys.includes(requiredKeys)) {
        alert(`product 객체에 ${requiredKeys}가 존재하지 않습니다!`);
        return false;
      }
    }
    return true;
  };


  // const handleOnError = useCallback(() => {
  //   console.error("Error occurred:", error);
  //   navigate("/error"); // 404 페이지로 이동합니다.
  // }, [error, navigate]);

  // useEffect(() => {
  //   if (error) {
  //     handleOnError();
  //   }
  // }, [error, handleOnError]);

  return (
    <div className="product-detail-page">
      {isLoading && <Loader />}
      {error && <div>{error.message}</div>}
      {product && <ProductDetailTemplate product={product} />}
      
    </div>
  );
};
export default ProductDetailPage;