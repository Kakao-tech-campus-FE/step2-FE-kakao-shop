import OrderTotalCheck from "@/components/Cart/Order/OrderTotalCheck.component";
import GlobalNavbar from "@/components/Navbar/GlobalNavbar.component";
import useCart from "@/hooks/useCart";

const OrderTotalCheckPage = () => {
  const { products, isLoading, isFetching } = useCart();

  return (
    <>
      <GlobalNavbar isSmall={true} />
      <div className="m-auto max-w-7xl bg-slate-50 p-2">
        <OrderTotalCheck
          products={products}
          isLoading={isLoading || isFetching}
        />
      </div>
    </>
  );
};

export default OrderTotalCheckPage;
