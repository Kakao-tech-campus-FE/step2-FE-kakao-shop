import React from 'react';
import { ButtonProps } from './Button.interface';

const TextButton = ({ onClick, children }: ButtonProps) => {
  return (
    <button type="button" onClick={onClick} className="bg-transparent">
      {children}
    </button>
  );
};

export default TextButton;
