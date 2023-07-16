import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className="w-full rounded-sm bg-yellow-300 p-2 text-sm font-normal
        hover:bg-amber-300
        disabled:bg-stone-300"
      {...props}
    >
      {children}
    </button>
  );
}
