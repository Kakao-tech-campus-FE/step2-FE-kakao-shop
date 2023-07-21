import React from 'react';

export default function Container({ children, className = '' }) {
  return (
    <div className={`container ${className} flex flex-col w-1/2 m-auto `}>
      {children}
    </div>
  );
}
