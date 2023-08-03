import { Link } from "react-router-dom";

import Image from "components/atoms/Image.js";

export default function ImageLink({
  LinkClassName = null,
  ImageClassName = null,
  to,
  src,
  alt,
}) {
  return (
    <Link className={LinkClassName} to={to}>
      <Image className={ImageClassName} src={src} alt={alt} />
    </Link>
  );
}
