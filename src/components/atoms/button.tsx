interface ButtonProps {
  children: React.ReactNode;
  isSubmitType?: boolean; // true: button type="submit", false: button type="button"
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export default function Button({
  children,
  isSubmitType = false,
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className="w-full rounded-sm bg-yellow-300 p-2 text-sm font-normal
        hover:bg-amber-300
        disabled:bg-stone-300"
      type={isSubmitType ? 'submit' : 'button'}
      onClick={isSubmitType ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
