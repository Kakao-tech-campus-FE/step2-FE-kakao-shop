import { Link } from 'react-router-dom';
import "../../styles/card.css"

const Card = ({to, children}) => {
    return (
        <Link to={to} className="card">
            {children}
        </Link>
    );
}

export default Card;