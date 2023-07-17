import { ProductInfoData } from '@api/dto';
import ProductCard from '@components/molecules/ProductCard';
import React, { useEffect } from 'react';

interface ProductGridProps {
  products: ProductInfoData[];
  loading: boolean;
}

const ProductGrid = ({ products, loading }: ProductGridProps) => {
  const cardSize = 200;
  const productGridSize = 1080;
  const invisibleCards = new Array(Math.floor(productGridSize / cardSize)).fill(0).map((arr, i) => {
    return i;
  });

  return (
    <div className="flex flex-wrap justify-center gap-x-[30px]">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} size={cardSize} />
      ))}
      {invisibleCards.map((key) => (
        <div key={key} className={`w-[${cardSize}px] invisible`} />
      ))}
    </div>
  );
};

export default ProductGrid;
