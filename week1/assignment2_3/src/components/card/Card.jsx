import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ url, content = "Content", title = "Title" }) => {
  return (
    <div className="card-wrapper">
      <Link className="card-link" to={url}>
        <div className="card">
          <div className="card-content">{content}</div>
          <div className="card-title">{title}</div>
        </div>
      </Link>
    </div>
  );
};
export default Card;
