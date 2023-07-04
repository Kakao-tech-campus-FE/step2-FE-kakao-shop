import { Link as RouterLink } from "react-router-dom";

export default function Link({ to, children }) {
  return (
    <RouterLink to={to} className="">
      {children}
    </RouterLink>
  );
}
