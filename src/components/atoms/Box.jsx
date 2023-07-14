import React from 'react';

export default function Box({ children, className = '' }) {
  return <div className={`box ${className}`}>{children}</div>;
}
