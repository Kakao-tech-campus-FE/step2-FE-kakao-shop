import GNB from "../organisms/GNB";
import CartSection from "../templates/CartPage/CartSection";
import "../../style/pages/CartPage.css";

const CartPage = () => {
  return (
    <>
      <GNB />
      <div className="content">
        <CartSection />
      </div>
    </>
  );
};

export default CartPage;
