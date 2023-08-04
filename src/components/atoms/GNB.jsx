import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setIsLoggedIn } from "../../store/slices/userSlice";
const staticServerUrl = process.env.REACT_APP_PATH || "";

const GNB = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setIsLoggedIn({ isLoggedIn: false }));
  };
  // fixed z-50 bg-white border-gray-200 border-solid border-b-2 p-3 mx-auto left-0 right-0
  return (
    <nav className="w-96 flex justify-between">
      <Link to={staticServerUrl + "/"} className="block p-3" >
        <img className="w-24" src={staticServerUrl + "/logoKakao.png"} alt="카카오톡 쇼핑하기" />
      </Link>
      <div className="flex items-center">
        <Link to={staticServerUrl + "/cart"} className="block p-3">
          <img className="w-9" src={staticServerUrl + "/cart.png"} alt="장바구니" />
        </Link>
        <span className="bar">[---</span>
        {isLoggedIn ? (
          <Link
            to={staticServerUrl + "/login"}
            onClick={handleLogout}
            style={{ textDecoration: "none", color: "black" }}
          >
            {" "}
            로그아웃{" "}
          </Link>
        ) : (
          <Link
            to={staticServerUrl + "/login"}
            onClick={handleLogout}
            style={{ textDecoration: "none", color: "black" }}
          >
            {" "}
            로그인{" "}
          </Link>
        )}
        <span className="bar">---]</span>
      </div>
    </nav>
  );
};

export default GNB;