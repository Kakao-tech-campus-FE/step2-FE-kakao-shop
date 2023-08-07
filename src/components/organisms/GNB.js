import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setEmail, setLogInTime } from "store/slices/userSlice.js";

import ImageLink from "components/molecules/ImageLink.js";

import logoKakao from "assets/icon/logoKakao.png";
import cart from "assets/icon/cart.png";

const staticServerUri = process.env.REACT_APP_PATH || "";

export default function GNB() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);

  const handleLinkClick = () => {
    dispatch(setEmail({ email: null }));
    dispatch(setLogInTime({ logInTime: null }));
    window.localStorage.removeItem("token");
  };

  return (
    <nav className="fixed top-0 w-full h-16 bg-white border z-10 flex items-center justify-between">
      <ImageLink
        LinkClassName="ml-32"
        ImageClassName="h-8"
        to={staticServerUri + "/"}
        src={logoKakao}
        alt="logoKakao"
      />
      <span className="flex items-center mr-32 space-x-4">
        <ImageLink ImageClassName="h-8" to={staticServerUri + "/cart"} src={cart} alt="cart" />
        <span className="border-x w-0 h-6" />
        {email ? (
          <>
            <span className="font-bold">
              {/[^@]*/.exec(email).toString().toUpperCase()}
            </span>
            <Link to={staticServerUri + "/"} onClick={handleLinkClick}>
              로그아웃
            </Link>
          </>
        ) : (
          <Link to={staticServerUri + "/login"}>로그인</Link>
        )}
      </span>
    </nav>
  );
}
