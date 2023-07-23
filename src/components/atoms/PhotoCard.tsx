import { Link } from 'react-router-dom';
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  productName: string;
  productPrice: string;
}

const Card = ({ children, productName, productPrice }: CardProps) => {
  return (
    <>
      <div className="bg-white rounded-card shadow-outFlat">{children}</div>
      <p>{productName}</p>
      <p>{productPrice}</p>
    </>
  );
};

export default Card;
