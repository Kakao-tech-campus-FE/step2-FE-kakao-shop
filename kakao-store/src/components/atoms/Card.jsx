import { Link } from "react-router-dom";

const Card = ({ className, to, children }) => {
    return (
        <div className={`card ${className}`}>
            <Link to={to}>{children}</Link>
        </div>
    );
}

export default Card;