import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ url, content = "Content", title = "Title" }) => {
  return (
    <Link to={url}>
      <div className="card">
        <div className="card-content">{content}</div>
        <div className="card-title">{title}</div>
      </div>
    </Link>
  );
};
export default Card;
