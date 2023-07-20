import { Link } from "react-router-dom";

import Photo from "components/atoms/Photo";

export default function ImageLink({ to, className = "", alt, src }) {
  return (
    <Link to={to}>
      <Photo className={className} src={src} alt={alt} />
    </Link>
  );
}
