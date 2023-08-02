import { getCart } from "../../services/cart";
import { Suspense } from "react";
import { useQuery } from "react-query";
import OrderTemplate from "../templates/OrderTemplate";
import Loader from "../atoms/Loader";
import { Helmet } from "react-helmet";

const OrderPage = () => {
  const { data, error, isLoading } = useQuery("cart", getCart);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Helmet title={"카카오톡 쇼핑하기 - 주문"}></Helmet>
        {data && <OrderTemplate data={data} />}
        {error && <div>{error}</div>}
        {isLoading && <div>Loading...</div>}
      </Suspense>
    </>
  );
};

export default OrderPage;
