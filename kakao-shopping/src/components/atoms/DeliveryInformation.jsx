const DeliveryInformation =() => {
  return (
    <div className="text-sm mt-5">
      <div className="flex">
        <span className="font-bold mr-1">배송 방법</span><span>택배배송</span>
      </div>

      <span className="font-bold">배송비</span>
      <div className="border border-gray-500 rounded-sm bg-gray-200 text-gray-500 p-0.5 text-xs">무료배송</div>
      <span>제주 추가 3,000원, 제주 외 도서지역 추가 6,000원</span>
    </div>
  )
}

export default DeliveryInformation;