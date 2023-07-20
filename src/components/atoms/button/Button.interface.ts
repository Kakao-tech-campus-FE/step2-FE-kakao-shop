import { ReactNode } from 'react';

export interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}
