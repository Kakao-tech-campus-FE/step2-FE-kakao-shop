import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loader from "../components/atoms/Loader";
import ProductDetailTemplate from "../components/templates/ProductDetailTemplate";
import { getProductById } from "../services/product";
import "../styles/Pages/ProductDetailPage.css"

const ProductDetailPage = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useQuery(`product/${id}`, () => getProductById(id));

    if (isLoading) return <Loader />;
    if (error) return <div>{error.message}</div>;

    const product = data?.data?.response;

    if (!product) return <div>상품을 찾을 수 없습니다.</div>;

    return (
        <div>
            <ProductDetailTemplate product={product} />
        </div>
    );
};

export default ProductDetailPage;