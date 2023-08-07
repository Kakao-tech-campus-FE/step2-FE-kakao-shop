import { useDispatch, useSelector } from "react-redux";
import { reducerLogout } from "../../store/slice/userSlice";
import "../../styles/organisms/globalNavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { BsCart2 } from "react-icons/bs";
import { staticServerUri } from "../../services/api";

const GlobalNavBar = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.isLogin) return;
    const today = new Date();
    if (today > new Date(user.expirationTime)) {
      dispatch(reducerLogout());
    }
  });

  return (
    <>
      <nav className={"global-nav-bar"}>
        <div className={"logo"}>
          <Link className={"logo button object-contain"} to={"/"}>
            <img src={staticServerUri + "/images/logoKakao.png"} alt={"logo"} />
          </Link>
        </div>
        <div
          className={
            "gnb-buttons- flex h-full flex-row items-center justify-center"
          }
        >
          {user.isLogin ? (
            <>
              <Link
                to={"/carts"}
                className={
                  "cart-button border-l border-gray-300 px-5 font-bold"
                }
              >
                <BsCart2 size="20" className={"cart-icon"} />
              </Link>
              <div>
                <button
                  className={
                    "logout-button border-l border-gray-300 px-5 font-bold"
                  }
                  onClick={() => {
                    dispatch(reducerLogout());
                    navigate("/");
                  }}
                >
                  로그아웃
                </button>
              </div>
            </>
          ) : (
            <>
              <Link
                to={"/login"}
                className={"login-button block px-5 text-center font-bold"}
              >
                로그인
              </Link>
              <Link
                to={"/signup"}
                className={
                  "signup-button block border-l border-gray-300 px-5 font-bold"
                }
              >
                회원가입
              </Link>
            </>
          )}
        </div>
      </nav>
      <div className={"global-nav-bar-dummy w-full"}></div>
    </>
  );
};

export default GlobalNavBar;
