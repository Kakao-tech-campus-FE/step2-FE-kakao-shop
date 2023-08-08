import { Link } from "react-router-dom";
import "../../styles/atoms/GNB.css";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../store/slices/userSlice";

const staticServerUrl = process.env.REACT_APP_PATH || "";

function GNB() {
  const token = useSelector((state) => {
    return state.user.token;
  });
  const username = useSelector((state) => {
    return state.user.username;
  });
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setToken(null));
    alert("정상적으로 로그아웃되었습니다.");
  };

  return (
    <header className="header">
      <div className="contents">
        <Link to={staticServerUrl + "/"}>
          <img className = "logoImg" src={staticServerUrl + "/images/logoKakao.png"} alt="logoKakao.png" height={30}/>
        </Link>
        <nav>
          <div className="navigation">
            <span>
              <Link to={staticServerUrl + "/cart"}>
                <img className = "cartImg" src={staticServerUrl + "/images/cart.png"} alt="cart.png" height={30}/>
              </Link>
            </span>
            <span className="line">|</span>
            <span>
              {token ? (
                <>
                  {/* 로그인 상태일 때 사용자 이름과 로그아웃 버튼 */}
                  <span>{username}님</span>
                  <span className="line">|</span>
                  <button
                    onClick={handleLogout}
                    style={{
                      border: "none",
                      background: "none",
                      color: "black",
                      cursor: "pointer",
                    }}
                  >
                    로그아웃
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to={staticServerUrl + "/login"}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    로그인
                  </Link>
                  <span className="line">|</span>
                  <Link
                    to={staticServerUrl + "/signup"}
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