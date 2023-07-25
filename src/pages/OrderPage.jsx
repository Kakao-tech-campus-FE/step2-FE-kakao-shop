import React from "react";
import { useQuery } from "react-query";
import cartInstance from "../apis/cart";
import { filterCartData, getAllQuantity } from "../utils/convert";
import Container from "../components/atoms/Container";
import AddressInfo from "../components/templates/AddressInfo";
import OrderProductsInfo from "../components/templates/OrderProductsInfo";
import PaymentInfo from "../components/templates/PaymentInfo";
import AgreeCheckBox from "../components/templates/AgreeCheckBox";

export default function OrderPage() {
  const { error, data } = useQuery(["carts"], cartInstance.getCart, {
    staleTime: 1000 * 60,
  });

  if (error) {
    return <div>{error.message}</div>;
  }
  const filteredData = filterCartData(data);
  return (
    <main className="flex flex-col items-center w-full min-h-full pb-8 bg-gray-100">
      <Container className="w-cart">
        <h3 className="text-center py-3 font-semibold bg-white border-t">
          주문하기
        </h3>
        <div className="flex flex-col gap-3">
          <AddressInfo />
          <OrderProductsInfo products={filteredData} />
          <PaymentInfo
            price={data.totalPrice}
            quantity={getAllQuantity(filteredData)}
          />
          <AgreeCheckBox />
        </div>
      </Container>
    </main>
  );
}
