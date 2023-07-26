import GNB from "../organisms/GNB";
import PurchaseConfirmation from "../templates/PurchaseConfirmationPage/PurchaseConfirmation";
import "../../style/pages/PurchaseConfirmationPage.css";

const PurchaseConfirmationPage = () => {
  return (
    <>
      <GNB />
      <div className="content">
        <PurchaseConfirmation />
      </div>
    </>
  );
};

export default PurchaseConfirmationPage;
