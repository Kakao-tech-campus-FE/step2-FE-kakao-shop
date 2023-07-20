import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  to: string;
  children: React.ReactNode;
}

const Card = ({ to, children }: CardProps) => {
  return (
    <Link className='mb-10' to={to}>
      {children}
    </Link>
  );
};
export default Card;
