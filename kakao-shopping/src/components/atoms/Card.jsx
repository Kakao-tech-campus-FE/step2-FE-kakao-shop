import { Link } from "react-router-dom";

const Card = ({
    to = "./", // Link의 이동 위치
    className = "", // class
    id = "", // id
    style = {}, // style
    children, // children
}) => {
    return (
        <Link
            className={`card text-decoration-none ${className}`}
            to={to}
            id={id}
            style={style}
        >
            {children}
        </Link>
    );
};

export default Card;
