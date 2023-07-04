import { Link } from "react-router-dom";
import logoImage from "../../images/logoKakao.png";

const Logo = () => {
  return (
    <Link to="/">
      <img src={logoImage} alt="Logo" />
    </Link>
  );
};

export default Logo;