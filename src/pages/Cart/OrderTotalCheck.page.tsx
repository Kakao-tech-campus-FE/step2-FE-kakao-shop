import OrderTotalCheck from "@/components/Cart/Order/OrderTotalCheck.component";
import GlobalNavbar from "@/components/Navbar/GlobalNavbar.component";
import { getCart } from "@/remotes/product";
import { useQuery } from "@tanstack/react-query";

const OrderTotalCheckPage = () => {
  const { data, isLoading } = useQuery(["cart"], getCart);

  return (
    <>
      <GlobalNavbar isSmall={true} />
      <div className="m-auto max-w-7xl bg-slate-50 p-2">
        <OrderTotalCheck
          products={data?.data.response.products}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};

export default OrderTotalCheckPage;
