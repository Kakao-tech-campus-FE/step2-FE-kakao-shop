import { Link } from 'react-router-dom';
import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <div className="bg-white rounded drop-shadow p-[5px] object-contain">{children}</div>;
};

export default Card;
