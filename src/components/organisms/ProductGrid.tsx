import React from 'react';
import ProductCard from '../molecules/ProductCard';
import { productInfo } from '../../dto/productDto';
import SkeletonProductCard from '../molecules/SkeletonProductCard';

interface ProductGridProps {
  isFetching: boolean;
  pages: productInfo[][];
}

const ProductGrid = ({ isFetching, pages }: ProductGridProps) => {
  return (
    <div className='my-1 grid w-full grid-cols-4 gap-5'>
      {pages.map((products) =>
        products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        }),
      )}
      {isFetching &&
        Array.from({ length: 10 }, (v, i) => i).map((value) => {
          return <SkeletonProductCard key={value} />;
        })}
    </div>
  );
};

export default ProductGrid;
