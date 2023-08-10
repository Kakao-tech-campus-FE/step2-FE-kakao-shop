import { Link } from "react-router-dom";

const staticServerUri = process.env.REACT_APP_PATH || "";

const Login = () => {
  return (
    <Link to={staticServerUri + "/login"}>로그인</Link>
  );
};

export default Login;