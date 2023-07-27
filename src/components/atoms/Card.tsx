import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <div className="bg-white rounded-card shadow-outFlat">{children}</div>;
};

export default Card;
