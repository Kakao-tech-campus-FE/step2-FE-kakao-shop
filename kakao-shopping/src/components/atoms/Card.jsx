import { Link } from "react-router-dom";

const Card = ({
    to, // Link의 이동 위치
    children, // children
    className, // class
    id, // id
    style, // style
}) => {
    return (
        <Link className="card" to={to}>
            {chldren}
        </Link>
    );
};

export default Card;
