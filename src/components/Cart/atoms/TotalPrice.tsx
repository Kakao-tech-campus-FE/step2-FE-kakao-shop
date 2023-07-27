function TotalPrice({ totalPrice }: { totalPrice: number }) {
  return (
    <div className="flex justify-between bg-white p-3 text-xl mt-3 w-full">
      주문 예상 금액
      <span className="text-blue-500">{totalPrice.toLocaleString('ko-kr')}원</span>
    </div>
  );
}

export default TotalPrice;
