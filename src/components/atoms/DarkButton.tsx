import React from 'react';

interface ButtonProps {
  type?: 'submit' | 'button' | 'reset';
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const DarkButton = ({ type = 'submit', children, onClick }: ButtonProps) => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className='flex w-full justify-center rounded-md bg-gray-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-600'
    >
      {children}
    </button>
  );
};

export default DarkButton;
