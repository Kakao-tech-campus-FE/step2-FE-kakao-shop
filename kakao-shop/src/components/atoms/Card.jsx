import { Link } from "react-router-dom";
/**
 * 카드 컴포넌트
 */
const Card = ({ to, children }) => {
  return (
    <Link className="card" to={to}>
      {children}
    </Link>
  );
};

export default Card;
