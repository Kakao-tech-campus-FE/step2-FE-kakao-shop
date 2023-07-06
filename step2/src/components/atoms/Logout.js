import { Link } from "react-router-dom";
import { deleteCookie } from "../../constants/cookie";

const Logout = () => {
  const handleLogout = () => {
    console.log("로그아웃")
    deleteCookie("accessToken");
  };

  return (
    <Link to="/" onClick={handleLogout}>로그아웃</Link>
  );
};

export default Logout;