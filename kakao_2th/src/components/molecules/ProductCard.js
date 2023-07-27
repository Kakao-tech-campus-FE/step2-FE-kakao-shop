import React from "react";
import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";
import Skeleton from "../atoms/Skeleton"; // Skeleton 컴포넌트 추가
import "../../styles/Molecules/ProductCard.css";

const ProductCard = ({ product, isLoading, }) => { // isLoading props 추가
    if (isLoading) {
        return <Skeleton />; // 데이터 로딩 중이면 Skeleton 컴포넌트 반환
    }

    return (
        <Card to={`/product/${product.id}`}>
            <Photo src={product.image} alt={product.productName} />
            <div className="product-name">{product.productName}</div>
            <div className="product-price">{comma(product.price)}원</div>
        </Card>
    );
};

export default ProductCard;
