import React from "react";
import Box from "../../common/atoms/Box";
import Text from "../../common/atoms/Text";
import { AiOutlineUp } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import Button from "../../common/atoms/Button";
import OrderOptionItem from "../molecules/OrderOptionItem";
import { CiDeliveryTruck } from "react-icons/ci";

export default function OrderProductInfo({
  products,
  totalProductCount,
  isOrderProductInfoOpen,
  setIsOrderProductInfoOpen,
}) {
  return (
    <Box className="w-full bg-white">
      <Text className=" relative flex items-center border-0 border-b border-solid border-zinc-200 px-3 py-4 tracking-tight">
        <span className="text-lg font-bold">주문상품 정보 </span>{" "}
        <span>
          (총 <span>{totalProductCount}</span>개)
        </span>
        <Button
          className=" absolute right-3 cursor-pointer border-0 bg-white"
          onClick={() => {
            setIsOrderProductInfoOpen((prev) => !prev);
          }}
        >
          {isOrderProductInfoOpen ? (
            <AiOutlineUp size="15" />
          ) : (
            <AiOutlineDown size="15" />
          )}
        </Button>
      </Text>
      {isOrderProductInfoOpen && (
        <div>
          {products.map((product) =>
            product.carts.map((cart) => {
              if (cart.quantity > 0) {
                return (
                  <OrderOptionItem
                    key={cart.id}
                    cart={cart}
                    id={product.id}
                    productName={product.productName}
                  />
                );
              }
              return null; // cart.quantity가 0인 경우 null을 반환하여 렌더링하지 않음
            }),
          )}
        </div>
      )}
      <div className="flex h-10 items-center justify-center gap-1">
        <span>
          <CiDeliveryTruck size="20" className=" text-blue-600" />
        </span>
        <span className=" text-sm text-blue-600">무료배송</span>
      </div>
    </Box>
  );
}
