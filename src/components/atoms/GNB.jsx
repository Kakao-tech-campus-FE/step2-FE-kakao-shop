import { Link } from "react-router-dom";
import "../../styles/atoms/GNB.css";
import { useDispatch, useSelector } from "react-redux";
import clearUser from "../../store/slices/userSlice";
import { Fragment } from "react";

//header bar components

const GNB = () => {
  const token = useSelector((state) => state.user.token); // 주로 isloggin 변수 사용 , 나중에 바꿔보기
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    dispatch(clearUser());
    alert("정상적으로 로그아웃되었습니다.");
  };

  return (
    <header className="header">
      <div className="contents">
        <nav className="inner_head">
          <div className="inner_wrap">
            <h1 className="tit_logo">
              <Link className="link_logo" to="/">
                <img
                  className="img_logo"
                  src={
                    "https://st.kakaocdn.net/commerce_ui/front-talkstore/real/20230713/161505/assets/images/pc/pc_logo.png"
                  }
                  alt="카카오 쇼핑 로고"
                />
              </Link>
            </h1>
            <div className="menu_util">
              {/* 장바구니 버튼 */}
              {token ? (
                <Link className="link_util" to="/cart">
                  <img
                    className="ico_cart"
                    src={"/cart.png"}
                    alt="장바구니 버튼"
                  />
                </Link>
              ) : (
                <Link className="link_util" to="/login">
                  <img
                    className="ico_cart"
                    src={"/cart.png"}
                    alt="장바구니 버튼"
                  />
                </Link>
              )}
            </div>
            <div className="menu_my">
              {/* 로그인 버튼 */}
              {token ? (
                <Link
                  className="link_login"
                  to="/"
                  onClick={handleLogout}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {" "}
                  로그아웃{" "}
                </Link>
              ) : (
                <Fragment>
                  <Link
                    className="link_login"
                    to="/login"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {" "}
                    로그인{" "}
                  </Link>
                  <Link
                    className="link_login"
                    to="/register"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {" "}
                    회원가입{" "}
                  </Link>
                </Fragment>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default GNB;
