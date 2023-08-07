import OrderCompleteTemplate from "../components/templates/OrderCompleteTemplate";
import { Suspense } from "react";
import ErrorBoundary from '../components/atoms/ErrorBoundary'
import GNB from "../components/templates/GNB";

const OrderCompletePage = () => {

  return (
    <div>
      <GNB />
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold py-5">주문 상품 정보</h1>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <OrderCompleteTemplate />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default OrderCompletePage;