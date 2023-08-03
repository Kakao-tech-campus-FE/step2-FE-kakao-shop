import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img src="/images/logoKakao.png" alt="Logo" class="img_logo" />
    </Link>
  );
};

export default Logo;
