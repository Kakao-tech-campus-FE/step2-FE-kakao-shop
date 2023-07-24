import OrderTemplate from "../components/templates/OrderTemplate";
import GNB from "../components/templates/GNB";
import { Suspense } from "react";
const OrderPage = () => {
    return (
      <div>
          <GNB />
        <div className="flex flex-col justify-center items-center w-full">
          <Suspense fallback={<div className="loader absolute top-1/3"></div>}>
            <OrderTemplate />
          </Suspense>
        </div>
      </div>
    )
}

export default OrderPage;