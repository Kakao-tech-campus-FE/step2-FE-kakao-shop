import { Link } from "react-router-dom";
import { staticServerUri } from "../../constants/serverUri";

const Card = ({ to, children }) => {
  return (
    <Link
      to={staticServerUri + to}
      className="mx-auto w-[95%] pb-10 lg:w-[90%]"
    >
      {children}
    </Link>
  );
};

export default Card;
