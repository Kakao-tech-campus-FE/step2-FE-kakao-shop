import React from 'react';

interface PriceTagProps {
  price: number;
}

const PriceTag = ({ price }: PriceTagProps) => {
  return <span className="text-xl font-semibold text-pointPupple">{price}원</span>;
};

export default PriceTag;
