import { Link } from "react-router-dom";
import logoImage from "../../assets/home_logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/userSlice";

const Gnb = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const email = useSelector((state) => state.user.email);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="fixed left-0 right-0 top-0 z-1000 px-32 h-20 border-b-2 border-gray-300 bg-white">
      <div className="flex w-1280 h-79 mx-auto items-center justify-between">
        <Link to="/">
          <img
            src={logoImage}
            alt="Navigation Logo"
            className="text-2xl w-20 h-15 mx-5 my-6 py-1.5"
          />
        </Link>
        {isLoggedIn ? (
          <>
            <span>{email}</span>
            <button onClick={handleLogout} className="">
              로그아웃
            </button>
          </>
        ) : (
          <Link to="/login" className="">
            로그인
          </Link>
        )}
        <Link to="/signup">회원가입</Link>
      </div>
    </div>
  );
};

export default Gnb;
