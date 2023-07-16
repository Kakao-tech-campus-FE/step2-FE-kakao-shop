import { Link } from "react-router-dom";

const Card = ({to, children, className}) => {
    return (
        <Link to={to} className={className}>
            {children}
        </Link>
    );
};

export default Card;