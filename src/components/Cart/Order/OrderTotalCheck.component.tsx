import { FC } from "react";
import OrderTotalItem from "./OrderTotalItem.component";
import { ProductOrder } from "@/dtos/product.dto";
import OrderCheckAndPay from "./OrderCheckAndPay.component";

interface OrderTotalCheckProps {
  products: ProductOrder[] | undefined;
  isLoading: boolean;
}

const OrderTotalCheck: FC<OrderTotalCheckProps> = ({ products, isLoading }) => {
  return (
    <>
      <div className="border-2 rounded-md bg-white divide-y mb-6">
        <OrderTotalItem products={products} isLoading={isLoading} />
      </div>
      <div className="border-2 rounded-md bg-white divide-y">
        <OrderCheckAndPay products={products} />
      </div>
    </>
  );
};

export default OrderTotalCheck;
