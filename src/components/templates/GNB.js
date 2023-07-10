import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setExpire } from "../../store/slices/userSlice.js";

// components
import Box from "../atoms/Box.js";
import ShopingLink from "../organisms/ShopingLink.js";
import CartLink from "../organisms/CartLink.js";

export default function GNB() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  return (
    <Box>
      <ShopingLink />
      <CartLink />
      {email ? (
        <>
          {RegExp(/[^@]*/).exec(email)}
          <Link
            onClick={() => {
              dispatch(setEmail({ email: null }));
              dispatch(setExpire({ expire: null }));
            }}
            to="/"
          >
            로그아웃
          </Link>
        </>
      ) : (
        <Link to="/login">로그인</Link>
      )}
    </Box>
  );
}
