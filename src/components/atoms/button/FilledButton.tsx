import React from 'react';
import { ButtonProps } from './Button.interface';

const FilledButton = ({ onClick, disabled, children }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type="button"
      onClick={onClick}
      className={`${
        disabled ? 'bg-middleGray' : 'bg-pointPupple'
      } h-[40px] rounded text-white font-bold py-[10px] px-[20px] shadow-convex`}
    >
      {children}
    </button>
  );
};

export default FilledButton;
