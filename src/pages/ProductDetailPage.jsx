import { useParams } from "react-router-dom";
import { getProducts } from "../store/slices/ProductSlice";
import { getProductById } from "../services/product";
import { getDetail } from "../store/slices/detailSlice";
import Loader from "../component/atoms/Loader";
import { useQuery } from "react-query";
import ProductDetailTemplate from "../../src/component/templates/ProductDetailTemplate";
import React, { useState, useEffect, Suspense} from 'react';

const ProductDetailPage = ()=>{
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

    // const validate=(=>{
    //     if(!product){
    //         return false;
    //     }
    // })
    // const requiredKeys = [
    //     "id",
    //     "productName"
    // ];

    // const keys=Object.keys(product);
    
    // for (let i =0; i<requiredKeys.length; i++){
    //     const
    // }
    
    
    // return true;


    return(
        <div>
            <Suspense fallback={<Loader/>}>
            {isLoading && <Loader />}
            {error && <div>{error.message}</div>}
            {product && <ProductDetailTemplate product={product}/>}
        </Suspense>
        </div>
    );
}

export default ProductDetailPage;