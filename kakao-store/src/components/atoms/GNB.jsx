import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/slices/userSlice";
import logoKakao from "../../images/logoKakao.png";
import cart from "../../images/cart.png";

function GNB() {
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    alert("로그아웃 되었습니다.");
  };

  return (
    <header className="header m-0 flex justify-between p-6">
      <div className=" contents ">
        <Link to="/">
          <img src={logoKakao} alt="logoKakao.png" height={20} width={90} />
        </Link>
        <nav>
          <div className="navigation float-right flex items-center">
            <span className="mx-3">
              {/* 장바구니 버튼 */}
              <Link to="/cart">
                <img src={cart} alt="cart.png" height={28} width={28} />
              </Link>
            </span>
            <span> | </span>
            <span className="mx-3">
              {/* 로그인 버튼 */}
              {email ? (
                <Link
                  to="/login"
                  onClick={handleLogout}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {email} 로그아웃{" "}
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
