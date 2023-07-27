import FoldingBox from "../atoms/FoldingBox";

const OrderList = () => {
  const data = {
    name: "송지혜",
    phone: "010-0000-0000",
    address: "(46286) 부산 금정구 금강로 123",
    addressDetail: "(장전동, 가나다라) 2동 101호",
  };

  return (
    <FoldingBox title="주문상품 정보" sub="(총 1개)">
      <div className="mt-4">
        <div className="flex item-center gap-2 mb-1">
          <span className="font-bold text-lg">{data.name}</span>
          <span className="rounded-full bg-blue-50 px-2 py-0.5 self-center text-sm text-blue-400">
            우리집
          </span>
        </div>
        <span className="text-md">010-0000-0000 </span>
        <div className="mt-2 text-sm text-gray-500">
          <span>{data.address}</span>
          <br />
          <span>{data.addressDetail}</span>
        </div>
      </div>
    </FoldingBox>
  );
};

export default OrderList;
