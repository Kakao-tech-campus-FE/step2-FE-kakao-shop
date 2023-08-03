import { useMutation, useQuery } from "@tanstack/react-query";
import { comma } from "../../utils/convert";
import { order } from "../../services/order";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getCart } from "../../services/cart";
import Badge from "../atoms/Badge";
import Container from "../atoms/Container";
import Box from "../atoms/Box";
import Photo from "../atoms/Photo";

const staticServerUri = process.env.REACT_APP_PATH || "";

const OrderTemplate = () => {
  const { data } = useQuery(["cart"], getCart, { suspense: true });
  const { products, totalPrice } = data?.data?.response;
  const navigate = useNavigate();
  const [agreePayment, setAgreePayment] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);

  const handleAllAgree = (e) => {
    const value = e.target.checked;
    setAgreePayment(value);
    setAgreePolicy(value);
  };

  const handleAgreement = (e) => {
    const { name, value } = e.target;

    if (name === "payment-agree") {
      setAgreePayment(value);
    } else if (name === "policy-agree") {
      setAgreePolicy(value);
    }
  };

  const { mutate } = useMutation({
    mutationFn: order,
  });

  const OrderItems = () => {
    let renderComponent = [];

    // forEach, map은 동기 함수
    products.forEach((item) => {
      console.log(item);
      // item: 각 상품, carts: 옵션이 담김
      renderComponent.push(
        item.carts.map((cart) => {
          return (
            <div className="flex gap-2">
              <Photo
                src={
                  process.env.REACT_APP_API_URL + "/images/" + item.id + ".jpg"
                }
                alt={item.productName}
                className="w-16 rounded-lg"
              />
              <div>
                <div className="product-name font-bold">{item.productName}</div>
                <div className="quantity">
                  {"[옵션] " +
                    `${cart.option.optionName}` +
                    ", " +
                    comma(cart.quantity)}
                  개
                </div>
                <div className="price font-bold">
                  {comma(cart.price * cart.quantity)}원
                </div>
              </div>
            </div>
          );
        })
      );
    });
    return renderComponent;
  };

  return (
    <Container className="w-[981px]">
      <Box className="pl-4 pb-4">
        <h1 className="text-2xl font-bold">주문하기</h1>
      </Box>

      <div className="wrapper flex flex-col gap-4">
        {/* 배송지 정보 */}
        <div className="address-info">
          <div className="bg-gray-100 p-4">
            <h2 className="text-base font-bold">배송지 정보</h2>
          </div>
          <div className="border p-4">
            <div className="flex items-center gap-2">
              <div className="font-bold">홍길동</div>
              <div className="text-blue-400 bg-blue-100 rounded-md text-xs p-1">
                기본 배송지
              </div>
            </div>
            <div>010-0000-0000</div>
            <div>서울특별시 강남구 도곡동 000-00</div>
          </div>
        </div>

        {/* 주문상품 정보 */}
        <div className="products-info">
          <div className="bg-gray-100 p-4">
            <h2 className="text-base font-bold">주문상품 정보</h2>
          </div>
          <div className="border p-4 flex flex-col gap-4">
            <OrderItems />
          </div>
          <div className="border border-t-transparent p-4 flex justify-between font-bold text-lg">
            <div>총 주문 금액</div>
            <div className="text-blue-500">{comma(totalPrice)}원</div>
          </div>
        </div>

        {/* 전체 동의, 구매조건 확인 및 결제 진행 동의 */}
        <div className="agreement">
          <div className="border flex flex-col p-4 gap-4">
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="all-agree"
                checked={agreePayment && agreePolicy}
                onChange={handleAllAgree}
              />
              <label htmlFor="all-agree" className="text-xl font-bold">
                전체 동의
              </label>
            </div>
            <hr />
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="agree"
                name="payment-agree"
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
                checked={agreePolicy}
                onChange={handleAgreement}
              />
              <label htmlFor="policy" className="text-sm">
                개인정보 제 3자 제공 동의
              </label>
            </div>
          </div>
        </div>

        {/* 결제하기 버튼 */}
        <div className="payment-button">
          <button
            onClick={() => {
              if (!agreePayment || !agreePolicy) {
                alert("모든 항목에 동의가 필요합니다.");
                return;
              }

              mutate(null, {
                onError: (err) => {
                  // 사용자 정보가 유실된 경우 로그인 페이지로 리다이렉트
                  alert("로그인이 필요합니다.");
                  navigate(staticServerUri + "/login");
                },
                onSuccess: (res) => {
                  const id = res.data.response.id;
                  navigate(staticServerUri + `/orders/complete/${id}`);
                },
              });
            }}
            className={`w-full p-4 rounded-lg ${
              agreePayment && agreePolicy
                ? "bg-yellow-300 font-bold"
                : "bg-gray-300"
            }`}
          >
            {comma(totalPrice)}원 결제하기
          </button>
        </div>
      </div>
    </Container>
  );
};

export default OrderTemplate;
