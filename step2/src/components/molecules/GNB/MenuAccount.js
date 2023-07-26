import { useSelector } from "react-redux";

import Login from "../../atoms/Login";
import Logout from "../../atoms/Logout";

const MenuAccount = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);

  return (
    <div className="menu_account">{isLoggedIn ? <Logout /> : <Login />}</div>
  );
};

export default MenuAccount;
