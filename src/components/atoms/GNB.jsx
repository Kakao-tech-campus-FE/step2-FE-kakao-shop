import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/userSlice";
import { useAutoLogout } from "../../components/autoLogout";
import { useEffect } from "react";
import logo from "../../imgs/logoKakao.png";
import cart from "../../imgs/cart.png";
import "./GNB.css";

function GNB() {
  const email = useSelector((state) => state.user.email);
  const username = useSelector((state) => state.user.name);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("token");
    alert("정상적으로 로그아웃 되었습니다.");
    navigate("/main");
  };

  useEffect(() => {
    // 이후 필요한 작업 수행
  }, []);

  useAutoLogout();

  return (
    <header className="header">
      <div className="contents">
        <Link to="/main">
          <img className="logo" src={logo} alt="logokakao.png" height={30} />
        </Link>
        <nav>
          <div className="navigation">
            <span>
              <Link to="/cart">
                <img src={cart} alt="cart.png" height={30} />
              </Link>
            </span>
            <span>|</span>
            <span>
              {email ? (
                <>
                  {/* 왜 username 받아오는게 안되는지?? */}
                  <span>{username}</span>
                  <button onClick={handleLogout}>로그아웃</button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    로그인
                  </Link>
                  <Link
                    to="/signup"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    회원가입
                  </Link>
                </>
              )}
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default GNB;
