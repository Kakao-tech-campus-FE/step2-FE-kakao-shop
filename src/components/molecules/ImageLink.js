import { Link } from "react-router-dom";

import Photo from "components/atoms/Photo";

export default function ImageLink({
  to,
  LinkClassName = "",
  PhotoClassName = "",
  alt,
  src,
}) {
  return (
    <Link className={LinkClassName} to={to}>
      <Photo className={PhotoClassName} src={src} alt={alt} />
    </Link>
  );
}
