function Delivery() {
  return (
    <div className="border-b border-gray-200 mt-6 pb-6">
      <div>
        <span className="font-bold mr-3">배송방법</span>
        <span className="">택배배송</span>
      </div>
      <div className="mt-2">
        <span className="font-bold inline-block mb-2">배송비</span>
        <br />
        <div className="p-2 border border-gray-200 bg-gray-100 text-gray-500 rounded-md">무료배송</div>
      </div>
      <p>제주 추가 3,000원, 제주 외 도서지역 추가 6,000원</p>
    </div>
  );
}

export default Delivery;
