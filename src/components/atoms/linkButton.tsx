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
    <span>
      <Link to={href}>
        {children}
      </Link>
    </span>
  );
}
