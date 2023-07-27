import { useMutation } from "react-query";
import { comma } from "../../utils/convert";
import { order } from "../../services/api/order";
import { useNavigate } from "react-router-dom";

const OrderTemplate = ({ data }) => {
  // 사용자의 장바구니 목록을 조회하여 보여준다.
  console.log(data);
  const { products, totalPrice } = data?.data?.response;
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: order,
  });

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
        {/* 각 주문의 정보 */}
        <div className="border py-4">
          <h2>주문상품 정보</h2>
        </div>
        {products?.map((item) => {
          return (
            <div key={item.id}>
              {item.carts.map((option) => {
                // 수량이 0인 옵션은 표현하지 않는다
                if (option.quantity !== 0) {
                  return (
                    <div>
                      {/* 상품 이름, CSS와 항상 바인딩이 될 필요는 없다. 직관적 이해에 도움을 주도록 사용할 수 있다 */}
                      <div className="product-name">
                        <span>{item.productName}</span>
                        <span>[옵션] {option.option.optionName}</span>
                      </div>
                      <div className="quantity">
                        <span>{option.quantity}개</span>
                      </div>
                      <div className="price">
                        <span>{comma(option.price)}원</span>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          );
        })}
        {/* 총 주문 금액 */}
        <div className="flex items-center justify-between border p-4">
          <h3>총 주문 금액</h3>
          <span className="price">{comma(totalPrice)}원</span>
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
            <label htmlFor="agree" className="text-xl font-bold">
              구매조건 확인 및 결제 진행 동의
            </label>
          </div>
          <div className="flex">
            <input type="checkbox" id="policy" />
            <label htmlFor="policy" className="text-xl font-bold">
              개인정보 제 3자 동의
            </label>
          </div>
        </div>
        {/* 결제하기 버튼 */}
        <button
          className="bg-yelow-500 w-full p-4 font-medium"
          onClick={() => {
            // POST: /orders/save
            // DB: 장바구니에 있는 모든 항목이 결제로 저장
            // 장바구니는 비워짐
            // 페이지 이동 -> 주문완료 페이지(리턴 받은 주문 아이디)
            // /orders/complete/:id
            mutate(null, {
              onError: () => {
                alert("주문에 실패했습니다.");
              },
              onSuccess: (res) => {
                const id = res.response.id;
                alert("주문이 완료되었습니다.");
                navigate(`/orders/complete/${id}`);
              },
            });
          }}
        >
          결제하기
        </button>
      </div>
    </div>
  );
};
export default OrderTemplate;
