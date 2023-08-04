import { Link } from "react-router-dom";

const staticServerUri = process.env.REACT_APP_PATH || "";

const Logo = () => {
  return (
    <Link to={staticServerUri + "/"}>
      <img src={staticServerUri + "/images/logoKakao.png"} alt="Logo" class="img_logo" />
    </Link>
  );
};

export default Logo;
