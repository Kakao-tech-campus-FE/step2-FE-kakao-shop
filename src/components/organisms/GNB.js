import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setEmail, setLogInTime } from "store/slices/userSlice.js";

import ImageLink from "components/molecules/ImageLink.js";

import logoKakao from "assets/icon/logoKakao.png";
import cart from "assets/icon/cart.png";

export default function GNB() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);

  const handleLinkClick = () => {
    dispatch(setEmail({ email: null }));
    dispatch(setLogInTime({ logInTime: null }));
    window.localStorage.removeItem("token");
  };

  return (
    <nav className="fixed top-0 w-full h-16 bg-white border flex items-center justify-between">
      <ImageLink
        LinkClassName="ml-32"
        PhotoClassName="h-8"
        to="/"
        src={logoKakao}
        alt="logoKakao"
      />
      <span className="mr-32 space-x-4">
        <ImageLink
          PhotoClassName="h-8"
          to="/cart"
          src={cart}
          alt="cart"
        />
        {email ? (
          <>
            <span className="font-bold">
              {/[^@]*/.exec(email).toString().toUpperCase()}
            </span>
            <Link to="/" onClick={handleLinkClick}>
              로그아웃
            </Link>
          </>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </span>
    </nav>
  );
}
