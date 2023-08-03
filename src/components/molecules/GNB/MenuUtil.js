import { Link } from "react-router-dom";

const staticServerUri = process.env.REACT_APP_PATH || "";

const MenuUtil = () => {
  return (
    <div className="menu-util">
      <Link to="/cart">
        <img
          src={staticServerUri + "0/images/cart.png"}
          alt="장바구니"
          className="util-icon"
        />
      </Link>
    </div>
  );
};

export default MenuUtil;
