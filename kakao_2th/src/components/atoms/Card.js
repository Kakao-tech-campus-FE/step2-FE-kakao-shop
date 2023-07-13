import { Link } from "react-router-dom"
import "../../styles/Atoms/Card.css"

const Card = ({ to, children }) => {
    return (
        <Link className="card" to={to}>
            {children}
        </Link>
    )
}

export default Card