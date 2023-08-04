import { useDispatch } from "react-redux";
import { setLoggedIn } from "../../modules/isLoggedIn";

import { Link } from "react-router-dom";
import { deleteCookie } from "../../constants/cookie";

const staticServerUri = process.env.REACT_APP_PATH || "";

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("로그아웃")
    deleteCookie("accessToken");
    dispatch(setLoggedIn(false));
  };

  return (
    <Link to={staticServerUri + "/"} onClick={handleLogout}>로그아웃</Link>
  );
};

export default Logout;