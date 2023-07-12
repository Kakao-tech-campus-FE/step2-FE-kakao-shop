import React from 'react';
import Card from '../atoms/Card';
import { comma, fullUrl } from '../../utils/convert';
import { productInfo } from '../../dto/productDto';

interface ProductCardProps {
  product: productInfo;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card to={`/product/${product.id}`}>
      <img
        className='aspect-[3/2] w-full rounded-2xl object-cover'
        src={fullUrl(product.image)}
        alt={product.productName}
      />
      <div className='pt-6'>
        <p className='text-sm'>{product.productName}</p>
        <p className='text-xl font-bold'>{comma(product.price)}</p>
      </div>
    </Card>
  );
};
export default ProductCard;
