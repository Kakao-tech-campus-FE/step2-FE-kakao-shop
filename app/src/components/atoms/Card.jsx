import { Link } from "react-router-dom";
import "../../styles/atoms/Card.css";

const Card = ({ to, children }) => {
	const staticServerUrl = process.env.REACT_APP_PATH || "";
  return (
    <Link className="card" to={staticServerUrl} + {to}}>
      {children}
    </Link>
  );
};

export default Card;
