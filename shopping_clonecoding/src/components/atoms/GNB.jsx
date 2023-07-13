import { Link } from "react-router-dom";
import "../../styles/atoms/GNB.css";
import { useDispatch, useSelector } from "react-redux";
import clearUser from "../../store/slices/userSlice";

function GNB() {
  const email = useSelector((state) => state.user.email); // 주로 isloggin 변수 사용 , 나중에 바꿔보기
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(clearUser());
    alert("정상적으로 로그아웃되었습니다.");
  };

  return (
    <header className="header">
      <div className="contents">
        <nav>
          <div className="navigation">
            <Link to="/">
              <img src={"/logoKakao.png"} alt="카카오 쇼핑 로고" height={30} />
            </Link>
            <span className="cart">
              {/* 장바구니 버튼 */}
              <Link to="/cart">
                <img src={"/cart.png"} alt="장바구니 버튼" height={30} />
              </Link>
            </span>
            <span>
              {/* 로그인 버튼 */}
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
        </nav>
      </div>
    </header>
  );
}

export default GNB;
