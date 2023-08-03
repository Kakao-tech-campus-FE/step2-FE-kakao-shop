import { Link } from "react-router-dom";
import logoKakao from "../../assets/logoKakao.png";
import cart from "../../assets/cart.png";

const staticServerUri = process.env.REACT_APP_PATH || "";

function Header() {
  return (
    <div className="flex border-b justify-between">
      <Link to={staticServerUri + "/"}>
        <img
          src={logoKakao}
          alt="카카오 쇼핑하기 로고"
          className="h-10 mx-4 my-2"
        />
      </Link>
      <Link to={staticServerUri + "/cart"}>
        <img src={cart} alt="장바구니 버튼" className="h-10 mx-4" />
      </Link>
    </div>
  );
}

export default Header;
