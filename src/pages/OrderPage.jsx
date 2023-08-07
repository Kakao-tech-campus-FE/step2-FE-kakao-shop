import OrderTemplate from "../components/templates/OrderTemplate";
import GNB from "../components/templates/GNB";
import { Suspense } from "react";
import ErrorBoundary from "../components/atoms/ErrorBoundary";

const OrderPage = () => {
    return (
      <div>
        <GNB />
        <div className="flex flex-col justify-center items-center w-full">
          <ErrorBoundary>
            <Suspense fallback={<div className="loader absolute top-1/3"></div>}>
              <OrderTemplate />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    )
}

export default OrderPage;