import { useParams } from "react-router-dom";
import Loader from "../component/atoms/Loader";
import { getProductById } from "../services/product";
import Container from "../component/atoms/Container";
import { useQuery } from "react-query";
import ProductDetailTemplate from "../../src/component/templates/ProductDetailTemplate";
import React, { useState, useEffect} from 'react';
import axios from 'axios';

const ProductDetailPage = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useQuery(`product/${id}`, () =>
        getProductById(id)
    );

    const product = data?.data?.response;

    
    return (
        <div>
            {isLoading && <Loader />}
            {error && <div>{error.message}</div>}
            {product && <ProductDetailTemplate product={product} />}
            {/* <ProductDetailTemplate product /> */}

      


        </div>
    );
};

export default ProductDetailPage;

