import { ProductInfoData } from '@api/dto';
import ProductCard from '@components/molecules/ProductCard';
import React from 'react';

interface ProductGridProps {
  products: ProductInfoData[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
