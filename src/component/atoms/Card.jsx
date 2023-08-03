import { Link } from "react-router-dom"
import "../../styles/atoms/Card.css"

const Card = ({ className, to, children }) => {
    const staticServerUri = process.env.REACT_APP_PATH || "";
    return (
        <div className={className}>
            <Link className="card" to={staticServerUri + to}>
                {children}
            </Link>
        </div>
    )
}

export default Card;