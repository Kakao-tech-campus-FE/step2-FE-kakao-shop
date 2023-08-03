import CartTemplate from "../components/templates/CartTemplate";
import { Suspense } from "react";
import ErrorBoundary from "../components/atoms/ErrorBoundary";

const CartPage = () => {
  
  const Loader = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader" />
      </div>
    )
  }
  
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <CartTemplate />
      </Suspense>
    </ErrorBoundary>
  )
}
export default CartPage;