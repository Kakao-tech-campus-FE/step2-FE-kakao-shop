import { Link } from "react-router-dom";
import "../../Styles/Card.css";

const Card = ({ to, children, className = "card" }) => {
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
};

export default Card;
