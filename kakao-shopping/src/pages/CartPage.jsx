import CartTemplate from "../components/templates/CartTemplate";
import { Suspense } from "react";

const CartPage = () => {
  
  const Loader = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader" />
      </div>
    )
  }
  
  return (
    <Suspense fallback={<Loader />}>
      <CartTemplate />
    </Suspense>
  )
}
export default CartPage;