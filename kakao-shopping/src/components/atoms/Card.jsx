import { Link } from "react-router-dom";

const Card = ({
    to = "./", // Link의 이동 위치
    className = "", // class
    children, // children
    ...props
}) => {
    return (
        <Link
            className={`card text-decoration-none ${className}`}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default Card;
