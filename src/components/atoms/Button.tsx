import React from 'react';

interface ButtonProps {
  type?: 'submit' | 'button' | 'reset';
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ type = 'submit', children, onClick }: ButtonProps) => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className='flex w-full justify-center rounded-md bg-yellow-300 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-600'
    >
      {children}
    </button>
  );
};

export default Button;
