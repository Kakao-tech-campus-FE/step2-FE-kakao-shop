interface ILinkButtonProps {
  children: React.ReactNode;
  href: string;
}

export default function LinkButton({
  children,
  href,
}: ILinkButtonProps) {
  return (
    <span className="text-sm opacity-50
      hover:opacity-100"
    >
      <a href={href}>
        {children}
      </a>
    </span>
  );
}
