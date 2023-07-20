import { Link } from "react-router-dom";

const Card = ({ to, children }) => {
  return (
    <Link className="card" to={to} style={{ all: "unset", cursor: "pointer" }}>
      {children}
    </Link>
  );
};

export default Card;
