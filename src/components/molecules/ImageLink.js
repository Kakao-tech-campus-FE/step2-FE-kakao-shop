import { Link } from "react-router-dom";

export default function ImageLink({ to, className="", src, alt }) {
  return (
    <Link to={to}>
      <img className={className} src={src} alt={alt} />
    </Link>
  );
}
