import React from 'react';

export default function Button({ active, onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`text-s font-normal mx-2 my-6 border border-zinc-200 rounded-full text-zinc-700 w-10 h-10 ${
        active ? 'bg-slate-100' : 'bg-white'
      }`}
    >
      {children}
    </button>
  );
}
