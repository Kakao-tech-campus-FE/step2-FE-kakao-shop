import { useMutation } from "react-query";
import { comma } from "../../utils/convert";
import { order } from "../../services/order";
import { useNavigate } from "react-router-dom";

const OrderTemplate = ({ data }) => {
// 사용자의 장바구니 목록을 조회해 보여주는 것
const carts = [];
const navigate = useNavigate();

const { mutate } = useMutation({
    queryFn: () => order
})

    return (
    <div className="py-20">
        <div className="block mx-auto max-w-[1024px] w-[100%]">
            <div className="border p-2">
            <h1 className="text-sm font-bold">주문하기</h1>
        </div>
        <div className="border p-4">
            <h2 className="text-sm font-bold">배송지 정보</h2>
        </div>
        <div className="border p-4">
            <div className="flex items-center gap-2">
                <span>홍길동</span>
                <span className="text-blue-400 bg-blue-100 rounded-md text-xs p-2">
                    기본배송지
                </span>
            </div>
        </div>
        <div className="border p-4">
            <span>010-0000-0000</span>
        </div>
        <div className="border p-4">
            <span>서울특별시 강남구 도곡동 000-00</span>
        </div>
        <div className="border p-4">
            <h2>주문상품 정보</h2>
        </div>
        {/* 각 주문의 정보 */}
        {carts.map(item => {
            return <div key={item.id}>
                {/* 상품 이름, css와 항상 바인딩 될 필요는 없다. 직관적으로 이해만 */}
                <div className="product-name">
                    <span>{item.name}</span>
                    <span>{item.carts[0].optionName}</span>
                </div>
                <div className="quantity">
                    <span>{comma(item.quantity)}개</span>
                </div>
                <div className="price">
                    <span>{comma(item.price)}원</span>
                </div>
            </div>
        })}
        {/* 총 주문 금액 */}
        <div className="border p-4 flex items-center justify-between">
            <h3>총 주문 금액</h3>
            <span className="price">{comma(data.totalPrice)}원</span>
        </div>
        {/* 전체 동의, 구매조건 확인 및 결제 진행 동의 */}
        <div className="border p-4">
            <div className="flex">
                <input type="checkbox" id="all-agree" />
                <label htmlFor="all-agree" className="text-xl font-bold">
                    전체 동의
                </label>
            </div>
            <div className="flex">
                <input type="checkbox" id="agree" />
                <label htmlFor="agree" className="text-sm">
                    구매조건 확인 및 결제 진행 동의
                </label>
            </div>
            <div className="flex">
                <input type="checkbox" id="policy" />
                <label htmlFor="policy" className="text-sm">
                    개인정보 제 3자 제공동의
                </label>
            </div>
            {/* 결제하기 버튼 */}
            <button
                onClick={() => {
                    // POST: /orders/save
                    // DB: 장바구니에 있는 모든 항목이 결제로 저장
                    // 장바구니는 비워짐
                    // 페이지 이동 -> 주문완료 페이지(리턴 받은 주문
                    // /orders/complete/:id
                    mutate(null, {
                        onError:() => {
                            alert("주문에 실패했습니다.")
                        },
                        onSuccess: (res) => {
                            const id = res.response.id;
                            alert("주문이 완료되었습니다.");
                            navigate(`/orders/complete/${id}`);
                        }
                    })
                }}
                className="bg-yellow-500 w-fill p-4 font-medium">
                결제하기
            </button>
        </div>
        </div>
    </div>
    );
}

export default OrderTemplate;