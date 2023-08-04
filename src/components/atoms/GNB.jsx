import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setIsLoggedIn } from "../../store/slices/userSlice";

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
      <Link className="block p-3" to="/">
        <img className="w-24" src="/logoKakao.png" alt="카카오톡 쇼핑하기" />
      </Link>
      <div className="flex items-center">
        <Link className="block p-3" to="/cart">
          <img className="w-9" src="/cart.png" alt="장바구니" />
        </Link>
        <span className="bar">[---</span>
        {isLoggedIn ? (
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