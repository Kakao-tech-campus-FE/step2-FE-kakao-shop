import OrderTemplate from "../components/templates/OrderTemplate";
import GNB from "../components/templates/GNB";
import { Suspense } from "react";
const OrderPage = () => {
    return (
      <div>
          <GNB />
        <div className="flex flex-col items-center w-full">
          <Suspense fallback={<div className="loader"></div>}>
            <OrderTemplate />
          </Suspense>
        </div>
      </div>
    )
}

export default OrderPage;