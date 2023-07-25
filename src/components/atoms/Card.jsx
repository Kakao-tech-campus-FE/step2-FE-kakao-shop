import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ to, children }) {
  return (
    <Link className='card mb-4' to={to}>
      {children}
    </Link>
  );
}
