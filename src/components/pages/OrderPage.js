import GNB from "../organisms/GNB";
import OrderSection from "../templates/OrderPage/OrderSection";
import "../../style/pages/OrderPage.css";

const OrderPage = () => {
  return (
    <>
      <GNB />
      <div className="content">
        <OrderSection />
      </div>
    </>
  );
};

export default OrderPage;
