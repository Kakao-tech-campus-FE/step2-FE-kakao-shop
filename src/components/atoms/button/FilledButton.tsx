import React, { ReactNode } from 'react';

interface FilledButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}
const FilledButton = ({ onClick, children }: FilledButtonProps) => {
  return (
    <button type="button" onClick={onClick} className="bg-pointPupple h-[40px] rounded text-white font-bold p-[10px]">
      {children}
    </button>
  );
};

export default FilledButton;
