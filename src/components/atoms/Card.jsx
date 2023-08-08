// card components return Link
/*eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import "../../styles/atoms/Card.css";

const Card = ({ to, children }) => {
  return (
    <Link className="card" to={to}>
      {children}
    </Link>
  );
};

export default Card;
