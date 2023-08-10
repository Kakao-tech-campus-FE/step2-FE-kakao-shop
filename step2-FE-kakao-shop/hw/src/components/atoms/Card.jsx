import { Link } from "react-router-dom";

const Card = ({ to, children, className }) => {
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
};

export default Card;
