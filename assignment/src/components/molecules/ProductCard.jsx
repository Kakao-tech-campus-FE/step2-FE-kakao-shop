import React from 'react';
import Card from '../atoms/Card';
import { comma } from '../../utils/convert';
import Photo from '../atoms/Photo';
import SkeletonCard from '../atoms/Skeleton';

const ProductCard = ({ product, loading }) => {
  console.log(loading);
  return (
    <>
      {loading ? (
        <SkeletonCard />
      ) : (
        <Card to={`/product/${product.id}`}>
          <Photo
            className="card"
            src={product.image}
            alt={product.productName}
          />
          <div className="product-name">{product.productName}</div>
          <div className="product-price">{comma(product.price)}원</div>
        </Card>
      )}
    </>
  );
};

export default ProductCard;
