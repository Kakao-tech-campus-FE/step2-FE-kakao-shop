import GNB from "../organisms/GNB";
import OrderResultSection from "../templates/OrderResultPage/OrderResultSection";
import "../../style/pages/OrderPage.css";

const OrderResultPage = () => {
  return (
    <>
      <GNB />
      <div className="content">
        <OrderResultSection />
      </div>
    </>
  );
};

export default OrderResultPage;
