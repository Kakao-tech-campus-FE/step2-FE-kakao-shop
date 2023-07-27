import React from 'react';
import ProductCard from '../molecules/ProductCard';
import { productInfo } from '../../dto/productDto';
import SkeletonProductArray from './SkeletonProductArray';

interface ProductGridProps {
  isLoading: boolean;
  isFetching: boolean;
  pages?: productInfo[][];
}

const ProductGrid = ({ isLoading, isFetching, pages }: ProductGridProps) => {
  return (
    <div className='my-1 grid w-full grid-cols-4 gap-5'>
      {pages &&
        pages.map((products) =>
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          }),
        )}
      {(isFetching || isLoading) && <SkeletonProductArray />}
    </div>
  );
};

export default ProductGrid;
