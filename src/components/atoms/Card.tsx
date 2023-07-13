import { Link } from 'react-router-dom';
import React from 'react';

interface CardProps {
  to: string;
  children: React.ReactNode;
}

const Card = ({ to, children }: CardProps) => {
  return (
    <Link className="" to={to}>
      {children}
    </Link>
  );
};

export default Card;
