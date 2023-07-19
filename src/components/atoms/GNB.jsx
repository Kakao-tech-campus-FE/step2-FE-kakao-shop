import { Link, useNavigate } from "react-router-dom";
import "../../styles/atoms/GNB.css";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../../store/slices/userSlice";
import * as paths from "../../constants/urls";

function GNB() {
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setEmail(null));
    alert("정상적으로 로그아웃 되었습니다.");
    navigate(paths.HOME_PATH);
  };

  return (
    <header className="header">
      <div className="contents">
        <Link to={paths.HOME_PATH}>
          <img src={"/logoKaKao.png"} alt="logoKaKao.png" height={30} />
        </Link>
        <nav>
          <div className="navigation">
            <span>
              {/* 장바구니 버튼 */}
              <Link to={paths.CART_PATH}>
                <img src={"/cart.png"} alt="cart.png" height={30} />
              </Link>
            </span>
            <span>|</span>
            <span>
              {/* 로그인 버튼 */}
              {email ? (
                <Link
                  to={paths.LOGIN_PATH}
                  onClick={handleLogout}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  로그아웃
                </Link>
              ) : (
                <Link
                  to={paths.LOGIN_PATH}
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
