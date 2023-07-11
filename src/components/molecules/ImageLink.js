import { Link } from "react-router-dom";

// props: src
export default function ImageLink({ to, className = "", alt, ...props }) {
  return (
    <Link to={to}>
      <img className={className} alt={alt} {...props} />
    </Link>
  );
}
