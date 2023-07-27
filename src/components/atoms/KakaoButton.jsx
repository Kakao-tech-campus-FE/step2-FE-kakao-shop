import React from 'react';

export default function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className='w-full py-3 mt-6 font-medium uppercase bg-yellow-300 rounded-md focus:outline-none'
    >
      {children}
    </button>
  );
}
