import { useMutation } from "react-query"
import { comma } from "../../utils/convert"
import { order } from "../../services/order"
import { useNavigate } from "react-router-dom"

const OrderTemplate ({ data }) => {
    const { products, totalPrice } = data?.data?.response
    const navigate = useNavigate()

    const { mutate } = useMutation({
        mutationKey: "order",
        queryFn: () => order
    })

    const OrderItems = () => {
        let renderComponent = []

        products.forEach((item) => {
            renderComponent.push(item.carts.map((cart) => {
                return (
                    <div key={cart.id} className="p-4 border-t">
                        <div className="product-name font-bold">
                            <span>{`${item.productName} - ${cart.option.optionName}`}</span>
                        </div>
                        <div className="quantity">
                            <span>{comma(cart.quantity)}개</span>
                        </div>
                        <div className="price font-bold">
                            <span>{comma(cart.price) * cart.quantity}원</span>
                        </div>
                    </div>
                )
            }))
        })

        return renderComponent
    }

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
                <div className="border py-4">
                    <h2>주문상품 정보</h2>
                </div>
                <OrderItems />

                <div className="border p-4 flex items-center justyfy-between">
                    <h3 className="font-bold text-xl">총 주문 금액</h3>
                    <span className="price text-xl text-indigo-700">{comma(totalPrice)}원</span>
                </div>
                <div className="border flex flex-col p-4 gap-4">
                    <div className="flex gap-2">
                        <input type="checkbox" id="all-agree" />
                        <label htmlFor="all-agree" className="text-xl font-bold">
                            전체 동의
                        </label>
                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox" id="agree" />
                        <label htmlFor="agree" className="text-sm">
                            구매조건 확인 및 결제 진행 동의
                        </label>
                    </div>
                    <div className="flex gap-2">
                        <input type="checkbox" id="policy" />
                        <label htmlFor="policy" className="text-sm">
                            개인정보 제 3자 제공동의
                        </label>
                    </div>
                    <button
                        onClick={() => {
                            mutate(null, {
                                onError: () => {
                                    alert("주문에 실패했습니다.")
                                },
                                onSuccess: (res) => {
                                    const id = res.response.id
                                    alert("주문이 완료되었습니다.")
                                    navigate(`/orders/complete/${id}`)
                                }
                            })
                        }}
                        className="bg-yellow-500 w-full p-4 font-medium">
                        결제하기
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OrderTemplate