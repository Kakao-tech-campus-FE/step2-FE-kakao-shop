import React, { ReactNode } from 'react';
import { ButtonProps } from './Button.interface';

const FilledButton = ({ onClick, children }: ButtonProps) => {
  return (
    <button type="button" onClick={onClick} className="bg-pointPupple h-[40px] rounded text-white font-bold p-[10px]">
      {children}
    </button>
  );
};

export default FilledButton;
