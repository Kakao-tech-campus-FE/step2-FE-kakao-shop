import { Link } from "react-router-dom";

const staticServerUri = process.env.REACT_APP_PATH || "";

const MenuUtil = () => {
  return (
    <div className="menu-util">
      <Link to={staticServerUri + "/cart"}>
        <img
          src={staticServerUri + "/images/cart.png"}
          alt="장바구니"
          className="util-icon"
        />
      </Link>
    </div>
  );
};

export default MenuUtil;
