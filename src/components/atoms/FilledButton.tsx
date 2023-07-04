import React, { ReactNode } from 'react';

interface FilledButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}
const FilledButton = ({ onClick, children }: FilledButtonProps) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default FilledButton;
