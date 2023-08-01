import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="bg-white rounded-card shadow-outFlat">
      <div className="p-7">{children}</div>
    </div>
  );
};

export default Card;
