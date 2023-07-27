import { Link } from "react-router-dom";
import logoKakao from "../../assets/logoKakao.png";

function Header() {
  return (
    <Link to="/">
      <img src={logoKakao} alt="카카오 쇼핑하기 로고" />
    </Link>
  );
}

export default Header;
