import { useMutation } from "react-query";
import { comma } from "../../utils/convert";
import { order, getOrderFromId } from "../../services/order";
import { useNavigate } from "react-router-dom";
import Loading from "../atoms/Loader";

const OrderTemplate = ({ data }) => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: "order",
    queryFn: () => order,
  });

  // 사용자의 장바구니 목록 조회
  const products = data?.data?.response?.products;

  // 주문 상품 정보를 표시하는 별도의 컴포넌트로 분리합니다.
  const OrderItems = () => {
    let renderComponent = [];

    // undefined 값 처리
    if (!Array.isArray(products) || products.length === 0) {
      return <Loading />;
    }
    products.forEach((item) => {
      // item : 각 상품, carts: 옵션
      renderComponent.push(
        item.carts.map((cart) => {
          return (
            <div key={cart.id}>
              <div className="product-name">
                <span>{`${item.productName} - ${cart.option.optionName}`}</span>
              </div>
              <div className="quantity">
                <span>{comma(cart.quantity)}개</span>
              </div>
              <div className="price">
                <span>{comma(cart.price * cart.quantity)}원</span>
              </div>
            </div>
          );
        })
      );
    });

    return renderComponent;
  };

  return (
    <>
      {/* 주문 상품이 있을 때 */}
      <div className="p-20 pb-4">
        <div className="block mx-auto max-w-[1024px] w-[100%]">
          <div className="border p-2 flex justify-center">
            <h1 className="text-xl font-bold items-center">주문하기</h1>
          </div>
          {/* 토글로 배송지 정보 안에 사용자 정보 담도록 */}
          <div className="border p-4">
            <h2 className="text-2xl font-bold">배송지 정보</h2>
            {/* 배송지 정보 표시 */}
          </div>
          <div className="border p-4">
            {/* 사용자 정보 표시 */}
            <div className="flex items-center gap-4">
              <span className="text-xl font-bold">채민아</span>
              <span className="text-blue-400 bg-blue-100 rounded-2xl text-xs p-1">
                채민아
              </span>
            </div>
            <div className="text-l font-bold">010-****-****</div>
            <br />
            <div>(1234) 광주 광역시 라이언로 12번길 34</div>
            <div>(춘식동, 춘식아파트) 123-345</div>
            {/* 아코디언으로 구현 */}
            <div className="border m-2">배송 요청사항을 선택해주세요</div>
            <textarea
              className="block w-full h-20 px-3 py-2 text-base text-black border border-gray-300 rounded-md resize-none"
              placeholder="배송시 요청사항을 입력해주세요 (최대 50자)"
            />
          </div>
        </div>
      </div>
      {/* 주문 상품 표시 */}
      <div className="px-20">
        <div className="block mx-auto max-w-[1024px] w-[100%]">
          <div className="border p-4">
            <h2 className="text-2xl font-bold">주문상품 정보</h2>
          </div>
          <OrderItems />
        </div>
      </div>
    </>
  );
};

export default OrderTemplate;
