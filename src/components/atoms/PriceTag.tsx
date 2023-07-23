import React from 'react';

interface PriceTagProps {
  price: number;
}

const PriceTag = ({ price }: PriceTagProps) => {
  return (
    <span className="text-xl px-4 py-2 rounded-card font-semibold text-white bg-pointPupple shadow-covex">
      {price}원
    </span>
  );
};

export default PriceTag;
