import { Link, useNavigate } from "react-router-dom";
import "../../styles/atoms/GNB.css";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../../store/slices/userSlice";

function GNB() {
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setEmail(null));
    alert("정상적으로 로그아웃 되었습니다.");
    navigate("/");
  };

  return (
    <header className="header">
      <div className="contents">
        <Link to="/">
          <img src={"/logoKaKao.png"} alt="logoKaKao.png" height={30} />
        </Link>
        <nav>
          <div className="navigation">
            <span>
              {/* 장바구니 버튼 */}
              <Link to="/cart">
                <img src={"/cart.png"} alt="cart.png" height={30} />
              </Link>
            </span>
            <span>|</span>
            <span>
              {/* 로그인 버튼 */}
              {email ? (
                <Link
                  to="/login"
                  onClick={handleLogout}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  로그아웃
                </Link>
              ) : (
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  로그인
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
