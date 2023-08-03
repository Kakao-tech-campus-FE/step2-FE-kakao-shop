import { Link } from "react-router-dom";
import "../../styles/atoms/GNB.css";
import { useDispatch, useSelector } from "react-redux";
import clearUser from "../../store/slices/userSlice";
import { Fragment, useEffect } from "react";

//header bar components
const staticServerUrl = process.env.REACT_APP_PATH || "";

const GNB = () => {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const label = token ? "로그아웃" : "로그인";
  const loginoutpath = token ? staticServerUrl + "/" : staticServerUrl + "/login";
  const cartpath = token ? staticServerUrl+"/cart" : staticServerUrl+"/login";

  const handleClick = () => {
    if (token) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      dispatch(clearUser());
      alert("정상적으로 로그아웃되었습니다.");
    }
  };

  const LinkButton = {};

  return (
    <header className="header">
      <div className="contents">
        <nav className="inner_head">
          <div className="inner_wrap">
            <h1 className="tit_logo">
              <Link className="link_logo" to={staticServerUrl+"/"}>
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

              <Link className="link_util" to={cartpath}>
                <img
                  className="ico_cart"
                  src={
                    "https://img.freepik.com/free-icon/shopping-cart-of-checkered-design_318-50865.jpg?w=2000"
                  }
                  alt="장바구니 버튼"
                />
              </Link>
            </div>
            <div className="menu_my">
              {/* 로그인 로그아웃 버튼 */}
              <Link
                className="link_login"
                to={loginoutpath}
                onClick={handleClick}
                style={{ textDecoration: "none", color: "black" }}
              >
                {label}
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default GNB;
