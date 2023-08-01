import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/atoms/Card.css";

const Card = ({ to, children }) => {
  return (
    <Link className="card" to={to}>
      {children}
    </Link>
  );
};

Card.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Card;