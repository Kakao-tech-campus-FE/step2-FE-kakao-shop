import { ProductInfoData } from '@api/dto';
import Card from '@components/atoms/Card';
import Photo from '@components/atoms/Photo';
import comma from '@utils/commaUtils';
import React from 'react';

interface ProductCardProps {
  product: ProductInfoData;
  size: number;
}

const ProductCard = ({ product, size }: ProductCardProps) => {
  return (
    <div className={`w-[${size}px]`}>
      <Card to={`/product/${product.id}`}>
        <Photo src={`${process.env.REACT_APP_API_URL}${product.image}`} alt={product.productName} />
        <h3>{product.productName}</h3>
        <p>{comma(product.price)}</p>
      </Card>
    </div>
  );
};

export default ProductCard;
