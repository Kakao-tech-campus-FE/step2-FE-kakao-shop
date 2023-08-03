import { Link } from "react-router-dom";

const Card = ({ to, children }) => {
  return (
    <Link className="card" to={to} style={{textDecoration: "none"}}>
      {children}
    </Link>
  );
};

export default Card;