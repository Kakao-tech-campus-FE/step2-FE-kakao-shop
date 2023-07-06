import { Link as RouterLink } from "react-router-dom";

export default function Link({ to, children, className = "" }) {
  return (
    <RouterLink to={to} className={className}>
      {children}
    </RouterLink>
  );
}
