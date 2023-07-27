const OrderTemplate = () => {
  // 사용자의 장바구니 목록을 조회하여 보여준다.

  return (
    <div className="py-20">
      <div className="block mx-auto max-w-[1024px] w-full">
        <div className="border py-2">
          <h1 className="text-sm font-bold">주문하기</h1>
        </div>
        <div className="border py-4">
          <h1 className="text-sm font-bold">배송지 정보</h1>
        </div>
        <div className="border py-4">
          <h1 className="flex items-center gap-2">
            홍길동
            <span className="border text-blue-400 bg-blue-100 rounded text-xs p-1">
              기본 배송지
            </span>
          </h1>
        </div>
        <div className="border py-4">
          <span>010-0000-0000</span>
        </div>
        <div className="border py-4">
          <span>서울특별시 강남구 도곡동 000-00</span>
        </div>
      </div>
    </div>
  );
};
export default OrderTemplate;
