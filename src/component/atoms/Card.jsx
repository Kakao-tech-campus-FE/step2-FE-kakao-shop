import { Link } from "react-router-dom"
import "../../styles/atoms/Card.css"

const Card = ({ className, to, children }) => {
    return (
        <div className={className}>
            <Link className="card" to={to}>
                {children}
            </Link>
        </div>
    )
}

export default Card;