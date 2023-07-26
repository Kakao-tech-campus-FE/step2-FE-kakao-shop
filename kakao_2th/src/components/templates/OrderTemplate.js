const OrderTemplate ({ data }) => {

    return (
        <div className="py-20">
            <div className="block mx-auto max-w-[1024px] w-[100%]">
                <div className="border py-2">
                    <h1 className="text-sm font-bold">주문하기</h1>
                </div>
                <div className="border py-4">
                    <h2 className="text-sm font-bold">배송지 정보</h2>
                </div>
                <div className="border py-4">
                    <div className="flex items-center gap-2">
                        <spna>홍길동</spna>
                        <span className="text-blue-400 bg-blue-100 rounded-md text-xs p-1">
                            기본배송지
                        </span>
                    </div>
                </div>
                <div className="border py-4">
                    <span>010-0000-0000</span>
                </div>
                <div className="border py-4">
                    <span>광주광역시 북구 용봉로 77</span>
                </div>
            </div>
        </div>
    )
}

export default OrderTemplate