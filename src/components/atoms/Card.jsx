import { Link } from "react-router-dom";

const Card = ({ to, children }) => {
  return (
    <Link to={to} className="mx-auto w-[270px] pb-10">
      {children}
    </Link>
  );
};

export default Card;
