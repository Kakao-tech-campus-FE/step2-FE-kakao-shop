import { Link } from "react-router-dom";

const Card = ({ to, children }) => {
    return (
        <div className="card">
            <Link to={to}>{children}</Link>
        </div>
    );
}

export default Card;