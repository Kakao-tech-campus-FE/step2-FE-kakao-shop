import React from 'react';
import Card from '../atoms/Card';
import { comma } from '../../utils/convert';
import Photo from '../atoms/Photo';
import SkeletonCard from '../atoms/Skeleton';
import Loader from '../atoms/Loader';
import Button from '../atoms/Button';

const staticServerUrl = process.env.REACT_APP_PATH || '';
const ProductCard = ({ product }) => {
  return (
    <>
      <Card to={`${staticServerUrl}/product/${product.id}`}>
        <Photo
          className="card border-rounded"
          src={product.image}
          alt={product.productName}
        />

        <div className="product-name">
          {product.productName}{' '}
          {product.price > 20000 ? (
            <span className="bg-gray-500 text-white px-2 py-1 rounded-lg">
              무료배송{' '}
            </span>
          ) : (
            ''
          )}
        </div>
        <span className="product-badge text-blue-500 font-bold">톡별가</span>
        <span className="product-price font-bold">
          {' '}
          {comma(product.price)}원 부터~
        </span>
      </Card>
    </>
  );
};

export default ProductCard;
