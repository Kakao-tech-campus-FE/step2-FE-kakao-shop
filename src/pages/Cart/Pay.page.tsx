import PayResult from "@/components/Cart/Order/PayResult.component";
import GlobalNavbar from "@/components/Navbar/GlobalNavbar.component";
import { payCart } from "@/remotes/product";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const PayPage = () => {
  const { data, isLoading } = useQuery(["payed"], payCart);
  const navitage = useNavigate();

  if (!isLoading && data?.status !== 200) {
    alert("결제에 실패했습니다.");
    navitage("/");
  }

  return (
    <>
      <GlobalNavbar isSmall={true} />
      <div className="m-auto max-w-7xl bg-slate-50 p-2">
        <PayResult payData={data?.data?.response} isLoading={isLoading} />
      </div>
    </>
  );
};

export default PayPage;
