import { Link } from "react-router-dom";

const Card = ({ to, children }) => {
    return (
        <Link className="w-full max-w-1000px border border-gray-300 rounded-md shadow-md p-4" to={to}>
            {children}
        </Link>
    );
};

export default Card;