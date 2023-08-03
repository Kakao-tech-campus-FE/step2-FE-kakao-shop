import { Link } from "react-router-dom";

const MenuUtil = () => {
  return (
    <div className="menu-util">
      <Link to="/cart">
        <img
          src="http://localhost:3000/images/cart.png"
          alt="장바구니"
          className="util-icon"
        />
      </Link>
    </div>
  );
};

export default MenuUtil;
