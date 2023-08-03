import { useMutation } from "react-query";
import { comma } from "../../utils/convert";
import { order, getOrderFromId } from "../../services/order";
import { useNavigate } from "react-router-dom";
import Loading from "../atoms/Loader";
import { useState } from "react";
import Button from "../atoms/Button";
import Badge from "../atoms/Badge";

const staticServerUri = process.env.REACT_APP_PATH || "";

const OrderTemplate = ({ data }) => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: order,
  });

  const [allAgreed, setAllAgreed] = useState(false);
  const [agreements, setAgreements] = useState({
    agree1: false,
    agree2: false,
  });

  const handelOnclick = () => {
    {
      // 동의 이루어지지 않았을 때 처리
      if (agreements === false || allAgreed === false) {
        alert("필수 항목에 동의가 필요합니다.");
        return;
      }

      //POST : /orders/save
      //DB : 장바구니에 있는 모든 항목이 결제로 저장
      //장바구니는 비워짐
      //페이지 이동 -> 주문 완료 페이지 (리턴 받은 주문 아이디)
      // /order/complete/:id

      mutate(null, {
        onError: () => {
          alert("주문에 실패하였습니다. 다시 시도해주세요.");
        },
        onSuccess: (res) => {
          const id = res?.data?.response?.id;
          console.log(id);
          alert("주문이 완료 되었습니다.");
          navigate(staticServerUri + `/orders/${id}`);
        },
      });
    }
  };

  const handleAgreementChange = (event) => {
    const { id, checked } = event.target;

    setAgreements((prev) => ({ ...prev, [id]: checked }));
    const allChecked = Object.values({ ...agreements, [id]: checked }).every(
      (value) => value === true
    );
    setAllAgreed(allChecked);
  };

  const handleAllAgreementChange = (e) => {
    const { checked } = e.target;
    setAgreements((prev) =>
      Object.keys(prev).reduce(
        (newAgreements, agreementKey) => ({
          ...newAgreements,
          [agreementKey]: checked,
        }),
        {}
      )
    );
    setAllAgreed(checked);
  };
  // 사용자의 장바구니 목록 조회
  const products = data?.data?.response?.products;
  const totalPrice = data?.data?.response.totalPrice;
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
          <div className=" p-2 flex justify-center">
            <h1 className="text-2xl font-bold items-center mt-20">주문하기</h1>
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
              <Badge className="text-xm text-blue-400 bg-blue-100">
                {"채민아"}
              </Badge>
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
          <div className="border p-4">
            {/* 각 주문의 정보 */}
            <OrderItems />
            {/* 총 주문 금액 */}
            <div className=" pt-4 flex justify-between items-center  left-0 right-0 ">
              <h3 className="">총 주문 금액</h3>
              <span className="price font-bold">{comma(totalPrice)}원</span>
            </div>
          </div>

          {/* 전체 동의, 구매조건 확인 및 결제 진행 동의 */}
          <div className="border  mt-6 p-4">
            <div className="flex flex-col gap-5 ">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="all-agree"
                  checked={allAgreed}
                  onChange={handleAllAgreementChange}
                />
                <label htmlFor="all-agree" className="text-xl font-bold">
                  전체 동의하기
                </label>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="agree1"
                  checked={agreements.agree1}
                  onChange={handleAgreementChange}
                />
                <label htmlFor="agree1" className="text-l ">
                  구매조건 확인 및 결제 진행 동의
                </label>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="agree2"
                  checked={agreements.agree2}
                  onChange={handleAgreementChange}
                />
                <label htmlFor="agree2" className="text-l ">
                  개인정보 제3자 제공 동의
                </label>
              </div>
            </div>
          </div>
          <div className="border  p-4">
            법적고지 (주)카카오에서 판매하는 상품 중에는 개별 판매자가 판매하는
            상품이 포함되어 있습니다. 개별 판매자가 판매하는 상품에 대해
            (주)카카오는 통신중개 판매업자로서 통신판매의 당사자가 아니며 상품의
            주문, 배송 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
          </div>
          {/* 결제하기 버튼 */}
          <Button onClick={handelOnclick}>결제하기</Button>
        </div>
      </div>
    </>
  );
};

export default OrderTemplate;
