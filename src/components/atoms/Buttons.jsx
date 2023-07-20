import React from 'react';

export default function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
}
