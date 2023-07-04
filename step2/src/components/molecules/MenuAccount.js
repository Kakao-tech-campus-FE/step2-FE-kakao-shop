import Signup from "../atoms/Signup"
import Login from "../atoms/Login"
import Logout from "../atoms/Logout";

const MenuAccount = () => {
  return (
    <div>
      <Signup />
      <a style={{"margin": 10}}>|</a>
      <Login />
      <a style={{"margin": 10}}>|</a>
      <Logout />
    </div>
  );
};

export default MenuAccount;