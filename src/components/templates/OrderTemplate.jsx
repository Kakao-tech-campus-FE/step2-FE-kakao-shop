import { useMutation, useQuery } from "@tanstack/react-query";
import { getCart } from "../services/cart";
import { comma } from "../../utils/convert";
import {order} from "../services/order"
import {useNavigate} from "react-router-dom";
import { useState, useRef } from "react";

const staticServerUri=process.env.REACT_APP_PATH||"";

const OrderTemplate = ({data}) => {
  const {products, totalPrice} = data?.data?.response;
  const navigate = useNavigate();
  const [allAgree, setAllAgree] = useState(false)
  const [agreePayment, setAgreePayment] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);

  const allAgreeRef = useRef(null)
  const agreePaymentRef = useRef(null)
  const agreePolicyRef = useRef(null)

  const handleAllAgree = (e) => {
    const value = e.target.checked;
    setAgreePayment(value);
    setAgreePolicy(value);
  };

  const handleAgreement = (e) => {
    const {name, checked} = e.target;

    if (name === "payment-agree") {
      setAgreePayment(checked);
    } else if (name === "policy-agree") {
      setAgreePolicy(checked);
    }
  };

  const {mutate} = useMutation({
    mutationFn: order,
    mutationKey: "order",
  });

  const OrderItems = () => {
    let renderComponent= [];

    products.forEach((item) => {
      renderComponent.push(item.carts.map((cart) => {
        return (
          <div key={cart.id} className=" border-t-2 p-4">
            <div className="product-name font-bold">
              <span>{`${item.productName} - ${cart.option.optionName}`}</span>
            </div>
            <div className="quantity">
              <span>{comma(cart.quantity)}개</span>
            </div>
            <div className="price font-bold">
              <span>{comma(cart.option.price * cart.quantity)}원</span>
            </div>
          </div>
        );
      }));
    });
    return renderComponent;
  };

  return (
    <div className=" pt-20">
      <div className=" block mx-auto max-w-[1024px] w-[100%]">
        <div className="border p-2">
          <h1 className=" text-4xl font-bold text-black">주문하기</h1>
        </div>
        <div className="border p-4">
          <h2 className="text-sm font-bold">배송지 정보</h2>
        </div>
        <div className="border p-4">
          <div className="flex items-center gap-4">
            <span>홍길동</span>
            <span className=" text-blue-400 bg-blue-100 rounded-md text-xs p-1">기본배송지</span>
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
        {/*각 주문의 정보*/}
        <OrderItems/>
        {/* 총 주문 금액 */}
        <div className="border p-4 flex items-center justify-between">
          <h3 className="font-bold text-xl">총 주문 금액</h3>
          <span className="price text-xl text-indigo-700">{comma(totalPrice)}원</span>
        </div>
        <div className="flex flex-col p-4 ">
          <div className="flex gap-2">
            <input 
              type="checkbox" 
              id="all-agree"
              ref={allAgreeRef}
              checked={agreePayment && agreePolicy}
              onChange={handleAllAgree}
            />
            <label htmlFor="all-agree" className="text-xl font-bold">전체 동의</label>
          </div>
          <div className="flex gap-2">
            <input 
              type="checkbox" 
              id="agree" 
              name="payment-agree"
              ref={agreePaymentRef}
              checked={agreePayment}
              onChange={handleAgreement}
            />
            <label htmlFor="agree" className="text-sm">
              구매조건 확인 및 결제 진행 동의
            </label>
          </div>
          <div className="flex gap-2">
            <input 
              type="checkbox" 
              id="policy" 
              name="policy-agree"
              ref={agreePolicyRef}
              checked={agreePolicy}
              onChange={handleAgreement}
            />
            <label htmlFor="policy" className="text-sm">
              개인정보 제 3자 제공 동의
            </label>
          </div>
          <div className="bg-[#fafafa] p-4">
          <p className="mb-1 text-[13px] font-bold">법적고지</p>
          <p className="text-[13px] text-[#666]">
            (주)카카오에서 판매하는 상품 중에는 개별 판매자가 판매하는 상품이
            포함되어 있습니다. 개별 판매자가 판매하는 상품에 대해 (주)카카오는
            통신중개 판매업자로서 통신판매의 당사자가 아니며 상품의 주문, 배송
            및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
          </p>
          </div>
          <button
            onClick={() => {
              if (agreePayment === false || agreePolicy === false) {
                alert("모든 항목에 동의가 필요합니다")
                return;
              }
              mutate(null, {
                onError: () => {
                  alert("주문이 실패했습니다.")
                },
                onSuccess: (res) => {
                  const id = res.data.response.id;
                  alert("주문이 완료되었습니다.");
                  navigate(staticServerUri + `/orders/complete/${id}`);
                },
              })
            }}
            className={`
              w-full p-4 font-medium
              ${agreePayment && agreePolicy ? " bg-yellow-500 text-black" : " bg-gray-300 text-gray-500 "}
            `}
          >
            결제하기
          </button>
        </div>
      </div>
    </div>
     
  );
};


export default OrderTemplate;

// h1: 검색엔진 적절한 Title값을 찾지 못할 경우
// h2:
// h3: