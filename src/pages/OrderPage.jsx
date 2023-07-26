import React, { useRef, useState } from "react";
import { useQuery } from "react-query";
import cartInstance from "../apis/cart";
import { filterCartData, getAllQuantity } from "../utils/convert";
import Container from "../components/atoms/Container";
import AddressInfo from "../components/templates/AddressInfo";
import OrderProductsInfo from "../components/templates/OrderProductsInfo";
import PaymentInfo from "../components/templates/PaymentInfo";
import AgreeCheckBox from "../components/templates/AgreeCheckBox";
import AgreeModal from "../components/molecules/AgreeModal";
import { OPTIONS } from "../utils/constant";

export default function OrderPage() {
  const agreeModalRef = useRef(null);
  const [address, setAddress] = useState("주소를 검색해보세요.");
  const [selectedReq, setSelectedReq] = useState(OPTIONS[0].name);
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
          <AddressInfo
            address={address}
            setAddress={setAddress}
            selected={selectedReq}
            setSelected={setSelectedReq}
          />
          <OrderProductsInfo products={filteredData} />
          <PaymentInfo
            price={data.totalPrice}
            quantity={getAllQuantity(filteredData)}
          />
          <AgreeCheckBox
            price={data.totalPrice}
            modalRef={agreeModalRef}
            address={address}
            selected={selectedReq}
          />
        </div>
      </Container>
      <AgreeModal ref={agreeModalRef} />
    </main>
  );
}
