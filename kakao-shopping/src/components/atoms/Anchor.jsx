import { Link } from "react-router-dom";

const Anchor = ({
    to, // Link의 이동 위치
    children, // children
    className = "", // class
    id = "", // id
    style = {}, // style
}) => {
    return (
        <Link className={`anchor text-body text-decoration-none ${className}`} id={id} to={to} style={style}>
            {children}
        </Link>
    );
};

export default Anchor;
