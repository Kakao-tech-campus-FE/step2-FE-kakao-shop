import { Link, useLocation } from "react-router-dom";
import "../../styles/atoms/Header.css";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../../store/slices/userSlice";
import "../../styles/atoms/GNB.css";
import { useEffect } from "react";

const staticServerUrl = process.env.REACT_APP_PATH || "";
const GNB = () => {
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();
  const location = useLocation(); // 현재 위치 정보가져오기

  const handleLogout = () => {
    dispatch(setEmail({ email: "" }));
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    alert("정상적으로 로그아웃되었습니다!");
  };

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      dispatch(setEmail({ email: email }));
    }
  }, [dispatch]);

  //현재 위치 따라서 헤더 네비게이션 바 표시 여부 결정.
  const showNavbar = location.pathname === "/";

  return (
    <header className="header">
      <div className="header-innerwrap">
        <Link to={staticServerUrl + "/"}>
          <img
            className="header-imglogo"
            src={staticServerUrl + "/logoKakao.png"}
            alt="카카오로고"
            height={30}
          />
        </Link>

        {showNavbar && (
          <div className="header-nav">
            <nav className="head-nav">
              <ul>
                <li>
                  <Link
                    to={staticServerUrl + "/"}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: 800,
                    }}
                  >
                    홈
                  </Link>
                </li>
                <li>브랜드데이</li>
                <li>베스트</li>
                <li>라이브</li>
                <li>기획전</li>
              </ul>
            </nav>
            <div className="head-cate">
              <a href="#">
                <span className="material-symbols-outlined">menu</span>
                <span className="cate">카테고리</span>
              </a>
            </div>
          </div>
        )}

        <div className="header-menu">
          <a className="menu-search">
            <span className="material-symbols-outlined">search</span>
          </a>
          <span className="menu-util">
            <Link to={staticServerUrl + "/cart"} className="link-util">
              <img
                src={staticServerUrl + "/cart.png"}
                alt="장바구니"
                height={30}
              />
            </Link>
          </span>
          <span className="menu-account">
            {email ? (
              <Link
                onClick={handleLogout}
                to={staticServerUrl + "/login"}
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                로그아웃{" "}
              </Link>
            ) : (
              <Link
                to={staticServerUrl + "/login"}
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                로그인{" "}
              </Link>
            )}
          </span>
        </div>
      </div>
    </header>
  );
};

export default GNB;
