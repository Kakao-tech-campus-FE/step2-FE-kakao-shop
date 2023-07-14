import { Link } from "react-router-dom";
import "../../styles/atoms/Header.css";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../../store/slices/userSlice";
import "../../styles/atoms/GNB.css";

const GNB = () => {
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setEmail(null));
    alert("정상적으로 로그아웃되었습니다!");
  };

  return (
    <header className="header">
      <div className="header-innerwrap">
        <Link to="/">
          <img
            className="header-imglogo"
            src={"/logoKakao.png"}
            alt="카카오로고"
            height={30}
          />
        </Link>
        <div className="header-menu">
          <span className="menu-util">
            <Link to="/cart" className="link-util">
              <img src={"/cart.png"} alt="장바구니" height={30} />
            </Link>
          </span>
          <span className="menu-account">
            {email ? (
              <Link
                to="/login"
                onClick={handleLogout}
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                로그아웃{" "}
              </Link>
            ) : (
              <Link
                to="/login"
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
