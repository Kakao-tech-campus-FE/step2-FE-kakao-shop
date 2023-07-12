import React from 'react';
import ProductCard from '../molecules/ProductCard';
import { productInfo } from '../../dto/productDto';

interface ProductGridProps {
  products: productInfo[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className='my-1 grid w-full grid-cols-4 gap-5'>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductGrid;
