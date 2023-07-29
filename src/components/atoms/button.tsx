import { ButtonHTMLAttributes } from 'react';
import Loader from './loader';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
}

export default function Button({
  children,
  isLoading = false,
  ...props
}: ButtonProps) {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <button {...props}>
      {children}
    </button>
  );
}
