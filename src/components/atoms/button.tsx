interface IButtonProps {
  children: React.ReactNode;
  isSubmitType: boolean;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  children,
  isSubmitType,
  handleClick,
}: IButtonProps) {
  return (
    <button
      className="w-full rounded-sm bg-yellow-300 p-2 text-sm font-normal
        hover:bg-amber-300"
      type={isSubmitType ? 'submit' : 'button'}
      onClick={isSubmitType ? undefined : handleClick}
    >
      {children}
    </button>
  );
}
