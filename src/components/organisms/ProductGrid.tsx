import { ProductInfoData } from '@api/dto';
import ProductCard from '@components/molecules/ProductCard';
import React from 'react';

interface ProductGridProps {
  products: ProductInfoData[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  const cardSize = 200;
  const productGridSize = 1080;
  const invisibleCards = new Array(Math.floor(productGridSize / cardSize));
  return (
    <div className="flex flex-wrap justify-center gap-x-[30px] pb-[300px]">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} size={cardSize} />
      ))}
      {invisibleCards.fill(1).map((key) => (
        <div key={key} className={`w-[${cardSize}px] invisible`} />
      ))}
    </div>
  );
};

export default ProductGrid;
