import React, { useRef, useState } from "react";
import Container from "../components/atoms/Container";
import AddressInfo from "../components/templates/Order/AddressInfo";
import OrderProductsInfo from "../components/templates/Order/OrderProductsInfo";
import PaymentInfo from "../components/templates/Order/PaymentInfo";
import AgreeCheckBox from "../components/templates/Order/AgreeCheckBox";
import AgreeModal from "../components/molecules/Order/AgreeModal";
import { filterCartData, getAllQuantity } from "../utils/convert";
import { OPTIONS } from "../utils/constant";
import useCart from "../hooks/useCart";
import NullCart from "../components/organisms/Cart/NullCart";

export default function OrderPage() {
  const agreeModalRef = useRef(null);
  const [address, setAddress] = useState("주소를 검색해보세요.");
  const [selectedReq, setSelectedReq] = useState(OPTIONS[0].name);
  const {
    cartsQuery: { error, data },
  } = useCart();

  if (error) {
    return <div>{error.message}</div>;
  }
  const filteredData = filterCartData(data);
  if (filteredData.length === 0) {
    return (
      <main className="flex flex-col items-center w-full min-h-full pb-8 bg-gray-100">
        <NullCart />
      </main>
    );
  }
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
            productsName={getProductName(filteredData)}
            price={data.totalPrice}
            quantity={getAllQuantity(filteredData)}
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

const getProductName = (products) => {
  const nameList = products.map((product) => product.productName);

  if (nameList.length === 1) {
    return nameList[0];
  }
  return `${nameList[0]} 외 ${nameList.length - 1}종`;
};
