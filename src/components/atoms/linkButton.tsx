import { Link } from 'react-router-dom';

interface LinkButtonProps {
  children: React.ReactNode;
  href: string;
}

export default function LinkButton({
  children,
  href,
}: LinkButtonProps) {
  return (
    <span className="text-sm opacity-50
      hover:opacity-100"
    >
      <Link to={href}>
        {children}
      </Link>
    </span>
  );
}
