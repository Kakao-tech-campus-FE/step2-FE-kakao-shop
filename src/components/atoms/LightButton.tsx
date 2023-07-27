import React from 'react';

interface ButtonProps {
  type?: 'submit' | 'button' | 'reset';
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const LightButton = ({ type = 'submit', children, onClick }: ButtonProps) => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className='flex w-16 justify-center rounded-md border bg-white px-3 py-1.5 text-sm leading-6 text-gray-900 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-neutral-600'
    >
      {children}
    </button>
  );
};

export default LightButton;
