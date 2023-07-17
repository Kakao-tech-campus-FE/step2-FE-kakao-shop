import { ProductInfoData } from '@api/dto';
import ProductCard from '@components/molecules/ProductCard/ProductCard';
import React, { useEffect } from 'react';

interface ProductGridProps {
  products: ProductInfoData[];
  loading: boolean;
  setInvisibleCards?: boolean;
}

const ProductGrid = ({ products, loading, setInvisibleCards = true }: ProductGridProps) => {
  const cardSize = 200;
  const productGridSize = 1080;
  const invisibleCards = new Array(Math.floor(productGridSize / cardSize)).fill(0).map((arr, i) => {
    return i;
  });

  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {setInvisibleCards && invisibleCards.map((key) => <div key={key} className={`w-[${cardSize}px] invisible`} />)}
    </>
  );
};

export default ProductGrid;
