import OrderTotalCheck from "@/components/Cart/Order/OrderTotalCheck.component";
import GlobalNavbar from "@/components/Navbar/GlobalNavbar.component";

const OrderTotalCheckPage = () => (
  <>
    <GlobalNavbar isSmall={true} />
    <div className="m-auto max-w-7xl bg-slate-50 p-2">
      <OrderTotalCheck />
    </div>
  </>
);

export default OrderTotalCheckPage;
