import { ProductInfoData } from '@api/dto';
import Card from '@components/atoms/Card';
import comma from '@utils/commaUtils';
import React from 'react';

interface ProductCardProps {
  product: ProductInfoData;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card to={`/product/${product.id}`}>
      <img src={product.image} alt={product.productName} />
      <h3>{product.productName}</h3>
      <p>{comma(product.price)}</p>
    </Card>
  );
};

export default ProductCard;
