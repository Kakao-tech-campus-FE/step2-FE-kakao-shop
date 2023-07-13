import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setEmail, setLogInTime, setToken } from "store/slices/userSlice.js";

import Box from "components/atoms/Box.js";
import ImageLink from "components/molecules/ImageLink.js";

import logoKakao from "assets/images/icon/logoKakao.png";
import cart from "assets/images/icon/cart.png";

export default function GNB() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);

  const handleLinkClick = () => {
    dispatch(setEmail({ email: null }));
    dispatch(setToken({ token: null }));
    dispatch(setLogInTime({ logInTime: null }));
  };

  return (
    <Box>
      <ImageLink to="/" src={logoKakao} alt="logoKakao" />
      <ImageLink to="/cart" src={cart} alt="cart" />
      {email ? (
        <>
          {/[^@]*/.exec(email)}
          <Link to="/" onClick={handleLinkClick}>
            로그아웃
          </Link>
        </>
      ) : (
        <Link to="/login">로그인</Link>
      )}
    </Box>
  );
}
