import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const SimpleButton = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      type='button'
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className='flex w-full items-center justify-center rounded-md border bg-white px-3 py-1 text-sm font-semibold leading-6 text-gray-900 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-600'
    >
      {children}
    </button>
  );
};

export default SimpleButton;
