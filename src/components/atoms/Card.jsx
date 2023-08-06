import { Link } from "react-router-dom";
import "../../styles/atoms/Card.css";

const staticServerUrl = process.env.REACT_APP_PATH || "";

const Card = ({ to, children }) => {
  return (
    <Link className="card" to={staticServerUrl + to}>
      {children}
    </Link>
  );
};

export default Card;