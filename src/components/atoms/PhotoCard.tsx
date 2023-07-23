import React from 'react';
import PriceTag from './PriceTag';

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <div className="bg-white rounded-card shadow-outFlat">{children}</div>;
};

export default Card;
