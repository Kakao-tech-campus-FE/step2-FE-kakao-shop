import { useMutation } from "@tanstack/react-query";
import { comma } from "../../Utils/convert";
import { order } from "../../Servicies/order";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Container from "../Atoms/Container";
import Box from "../Atoms/Box";
import "../../Styles/Card.css";
import { BsChevronUp } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { saveId } from "../../Store/Slices/orderSlice";
import { useDispatch } from "react-redux";

const OrderTemplate = ({ data }) => {
  const dispatch = useDispatch();

  const products = data?.data?.response?.products;
  const totalPrice = data?.data?.response?.totalPrice;

  const [agreePayment, setAgreePayment] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);

  const allAgreeRef = useRef(null);
  const agreePaymentRef = useRef(null);
  const agreePolicyRef = useRef(null);

  const handleAllAgree = (e) => {
    const value = e.target.checked;
    setAgreePayment(value);
    setAgreePolicy(value);
  };

  const handleAgreement = (e) => {
    const { name, checked } = e.target;

    if (name === "payment-agree") {
      setAgreePayment(checked);
    } else if (name === "policy-agree") {
      setAgreePolicy(checked);
    }
  };

  const { mutate } = useMutation({
    mutationKey: "order",
    mutationFn: order,
  });

  const navigate = useNavigate();

  const OrderItems = () => {
    let renderComponent = [];
    if (products && totalPrice) {
      products.forEach((item) => {
        renderComponent.push(
          item.carts.map((cart) => {
            return (
              <div>
                <div key={cart.id} className="p-4">
                  <div className="product-name">
                    <div className="text-sm font-bold">{item.productName} </div>
                    <div className="text-xs">{`[옵션] 상품선택: ${cart.option.optionName}, ${comma(
                      cart.quantity
                    )}개`}</div>
                  </div>
                  <div className="price font-bold">
                    <span>{comma(cart.price)}원</span>
                  </div>
                </div>
                <div className="h-2 bg-stone-100"></div>
              </div>
            );
          })
        );
      });
    }
    return renderComponent;
  };

  return (
    <div className="bg-stone-100 flex min-h-screen justify-center items-centers">
      <Container className="mx-auto w-3/5 h-2/3 align-middle border-solid  mt-3">
        <Box className="card">
          {/* 주문하기 */}
          <h1 className="text-center font-bold p-3 border-b border-stone-100">주문하기</h1>
          {/* 배송지 정보 */}
          <div className="flex justify-between items-center p-5">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold">배송지 정보</h2>
              <h2> (Kakao 계정 제공)</h2>
            </div>
            <BsChevronUp />
          </div>
          {/* 주문자 정보 */}
          <div className=" px-5 pb-1">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">홍길동</span>
              <span className="text-blue-600 bg-slate-100 rounded-full text-xs py-1 px-2">기본 배송지</span>
            </div>
          </div>
          <div className="px-5">
            <span className="text-sm font-semibold">010-0000-0000</span>
          </div>
          <div className="px-5 pb-3">
            <span className="text-sm">부산광역시 금정구 장전동 000-00</span>
          </div>
          <div className=" border rounded mx-5 mb-3 ">
            <div className="flex items-center justify-between p-3">
              <div className="text-sm">배송 요청사항을 선택해 주세요</div>
              <IoMdArrowDropdown />
            </div>
          </div>
          <div className="border rounded p-3 mx-5 mb-5 text-sm pb-14 text-stone-500">
            배송시 요청사항을 입력해주세요 (최대 50자)
          </div>
          <div className="h-3"></div>
        </Box>
        <div className="h-2"></div>

        {/* 상품 정보 */}
        <Box className="card">
          <div className="flex justify-between items-center p-5 border-b border-stone-100 ">
            <div className="flex gap-2 items-center">
              <h2 className=" font-bold text-lg">주문상품 정보</h2>
              <h2>(총 {products.length}개)</h2>
            </div>
            <BsChevronUp />
          </div>
          {/* 각 주문의 정보 */}
          <OrderItems />
        </Box>
        <Box className="card">
          {/* 총 주문 금액 */}
          <div className="border flex items-center justify-between">
            <h3 className="font-bold text-lg border-b border-stone-100 p-5">결제 정보</h3>
            <div className="p-5 ">
              <div className="flex justify-between text-sm py-2">
                <span>상품 금액 ({products.length}개)</span>
                <span>{comma(totalPrice)}원</span>
              </div>
              <div className="flex justify-between text-sm py-2 mb-3">
                <span>배송비</span>
                <span>0원</span>
              </div>
              <hr />{" "}
              <div className="flex justify-between items-center mt-5">
                <div className="text-lg">최종 결제금액</div>
                <div className="price font-bold text-xl text-black">{comma(totalPrice)}원</div>
              </div>
            </div>
          </div>
        </Box>
        <div className="h-2"></div>
        <Box className="card">
          {/* 전체 동의, 구매조건 확인 및 결제 진행 동의 */}
          <div className="flex flex-col p-5">
            <div className="flex gap-2 border-b border-stone-100 pb-5">
              <input
                type="checkbox"
                id="all-agree"
                ref={allAgreeRef}
                checked={agreePayment && agreePolicy}
                onChange={handleAllAgree}
              />
              <label htmlFor="all-agree" className="text-xl font-bold">
                전체 동의
              </label>
            </div>
            <div className="flex gap-2 pt-5 pb-1">
              <input
                type="checkbox"
                id="agree"
                ref={agreePaymentRef}
                checked={agreePayment}
                name="payment-agree"
                onChange={handleAgreement}
              />
              <label htmlFor="agree" className="text-sm">
                구매조건 확인 및 결제 진행 동의
              </label>
            </div>
            <div className="flex gap-2 pt-1">
              <input
                type="checkbox"
                id="policy"
                ref={agreePolicyRef}
                checked={agreePolicy}
                name="policy-agree"
                onChange={handleAgreement}
              />
              <label htmlFor="policy" className="text-sm">
                개인정보 제 3자 제공 동의
              </label>
            </div>
          </div>
        </Box>
        {/* 결제하기 버튼 */}
        <button
          onClick={() => {
            mutate(null, {
              onError: (error) => {
                console.log(error);
                alert("주문에 실패하였습니다.");
              },
              onSuccess: (res) => {
                const id = res.response.id;
                dispatch(saveId(id));
                alert("주문이 완료되었습니다.");
                navigate(`/order/complete/${id}`);
              },
            });
          }}
          className={`w-full p-4 text-xl font-bold mb-20
             ${agreePayment && agreePolicy ? "bg-yellow-300 text-black" : "bg-stone-300 text-stone-500"}`}
        >
          {comma(totalPrice)}원 결제하기
        </button>
      </Container>
    </div>
  );
};

export default OrderTemplate;
