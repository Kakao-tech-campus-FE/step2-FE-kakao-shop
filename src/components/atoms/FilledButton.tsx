import React, { ReactNode } from 'react';

interface FilledButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  child?: ReactNode;
}
const FilledButton = ({ onClick, child }: FilledButtonProps) => {
  return (
    <button type="button" onClick={onClick}>
      {child}
    </button>
  );
};

export default FilledButton;
