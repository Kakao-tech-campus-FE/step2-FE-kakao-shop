import { Link } from "react-router-dom";

const Anchor = ({
    to, // Link의 이동 위치
    children, // children
    className = "", // class
    ...props
}) => {
    return (
        <Link
            className={`anchor text-body text-decoration-none ${className}`}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default Anchor;
