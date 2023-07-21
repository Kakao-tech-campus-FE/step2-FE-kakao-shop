import React from 'react';
import { ProductCartOption } from '../../../types/Product';
import OptionCard from '../molecules/OptionCard';

interface ProductCardProps {
  name: string;
  carts: ProductCartOption[];
}
function ProductCard({ name, carts }: ProductCardProps) {
  return (
    <div className="bg-white border-y border-gray-200 p-5 mb-4">
      <span className="font-semibold">{name}</span>
      <div className="p-5">
        {carts.map((option) => (
          <OptionCard key={option.id} option={option} />
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
