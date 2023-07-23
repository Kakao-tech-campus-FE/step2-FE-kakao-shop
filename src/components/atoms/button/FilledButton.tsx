import React, { ReactNode } from 'react';
import { ButtonProps } from './Button.interface';

const FilledButton = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center bg-pointPupple h-[40px] rounded text-white font-bold py-[10px] px-[20px] shadow-convex"
    >
      {children}
    </button>
  );
};

export default FilledButton;
