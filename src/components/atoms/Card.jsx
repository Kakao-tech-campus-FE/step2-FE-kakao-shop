import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ to, children }) => {
    return (
        <Link className={styles.card} to={to}>
            {children}
        </Link>
    )
}

export default Card;