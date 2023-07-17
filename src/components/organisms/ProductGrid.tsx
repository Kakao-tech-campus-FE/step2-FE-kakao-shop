import { ProductInfoData } from '@api/dto';
import ProductCard from '@components/molecules/ProductCard';
import { Skeleton } from '@mui/material';
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

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  return (
    <div className="flex flex-wrap justify-center gap-x-[30px] pb-[300px]">
      {products.map((product) =>
        loading ? (
          <ProductCard key={product.id} product={product} size={cardSize} />
        ) : (
          <Skeleton key={product.id} variant="rectangular" animation="wave" width={cardSize} height={200} />
        ),
      )}
      {invisibleCards.map((key) => (
        <div key={key} className={`w-[${cardSize}px] invisible`} />
      ))}
    </div>
  );
};

export default ProductGrid;
