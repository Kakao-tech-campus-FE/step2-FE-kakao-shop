import { Link } from "react-router-dom";

const Card = ({
    to, // Link의 이동 위치
    className = "", // class
    id = "", // id
    style = {}, // style
    children, // children
}) => {
    return (
        <Link className="card" to={to}>
            {chldren}
        </Link>
    );
};

export default Card;
