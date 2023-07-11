import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../../store/slices/userSlice";
import logoKakao from "../../images/logoKakao.png";
import cart from "../../images/cart.png";

function GNB() {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setToken(null));
    alert("로그아웃 되었습니다.");
  };

  return (
    <header className="header">
      <div className="contents">
        <Link to="/">
          <img src={logoKakao} alt="logoKakao.png" height={30} />
        </Link>
        <nav>
          <div className="navigation">
            <span>
              {/* 장바구니 버튼 */}
              <Link to="/cart">
                <img src={cart} alt="cart.png" height={30} />
              </Link>
            </span>
            <span> | </span>
            <span>
              {/* 로그인 버튼 */}
              {token ? (
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
        </nav>
      </div>
    </header>
  );
}

export default GNB;
