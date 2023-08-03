import { Link } from "react-router-dom";
import "../../styles/atoms/Header.css";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../../store/slices/userSlice";
import "../../styles/atoms/GNB.css";

const staticServerUrl = process.env.REACT_APP_PATH || "";
const GNB = () => {
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();

  const handleLogout = () => {
    //요기 약간이상?
    localStorage.removeItem("token");
    alert("정상적으로 로그아웃되었습니다!");
    dispatch(setEmail(null));
  };

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
        <div className="header-menu">
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
