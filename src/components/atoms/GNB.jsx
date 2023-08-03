import { Link, useNavigate } from "react-router-dom";
import "../../styles/atoms/GNB.css";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../../store/slices/userSlice";
import * as paths from "../../constants/urls";

const staticServerUri = process.env.REACT_APP_PATH || "";

function GNB() {
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setEmail(null));
    alert("정상적으로 로그아웃 되었습니다.");
    navigate(staticServerUri + paths.HOME_PATH);
  };

  return (
    <header className="fixed top-0 left-0 p-5 bg-white border-b border-gray-300 flex items-center inner">
      <div style={{ width: "2000px" }} className="ml-20 md:flex items-center ">
        <Link to={staticServerUri + paths.HOME_PATH}>
          <img
            className="h-10 inline cursor-pointer mr-4"
            src={"/logoKaKao.png"}
            alt="logoKaKao.png"
          />
        </Link>
        <nav>
          <div className="navigation">
            <span>
              {/* 장바구니 버튼 */}
              <Link to={staticServerUri + paths.CART_PATH}>
                <img src={"/cart.png"} alt="cart.png" height={30} />
              </Link>
            </span>
            <span>|</span>
            <span>
              {/* 로그인 버튼 */}
              {email ? (
                <Link
                  to={staticServerUri + paths.LOGIN_PATH}
                  onClick={handleLogout}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  로그아웃
                </Link>
              ) : (
                <Link
                  to={staticServerUri + paths.LOGIN_PATH}
                  className="text-black text-xl hover:underline text-black-200"
                >
                  로그인
                </Link>
              )}
            </span>
            <span>|</span>
            <span>
              {/* 회원가입 버튼 */}
              <Link
                to={staticServerUri + paths.SIGNUP_PATH}
                className="text-black text-xl hover:underline text-black-200"
              >
                회원가입
              </Link>
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default GNB;
