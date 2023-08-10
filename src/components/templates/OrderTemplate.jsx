import { useNavigate } from "react-router-dom";
import { useMemo, useRef, useState } from "react";
import { useMutation } from "react-query";
import { order } from "../../api/order";
import comma from "../../utils/convert";
import Container from "../atoms/Container";
import Box from "../atoms/Box";
import Button from "../atoms/Button";
import staticServerUri from "../../utils/krampoline";

/** 주문하기 페이지
 *
 * @param {array} data - 주문 상품 정보
 * @returns {JSX.Element}
 */
const OrderTemplate = ({ data }) => {
  const navigate = useNavigate();
  const [agreePayment, setAgreePayment] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);

  const allAgreeRef = useRef(null);
  const agreePaymentRef = useRef(null);
  const agreePolicyRef = useRef(null);

  const products = useMemo(() => data?.data?.response?.products, [data]);
  const totalPrice = useMemo(() => data?.data?.response?.totalPrice, [data]);

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

  // eslint-disable-next-line react/no-unstable-nested-components
  const OrderItems = () => {
    return (
      <>
        {products.map((item) => (
          <Box key={item.id}>
            {item.carts.map((cart) => (
              <div
                className="order-item p-[16px] border-y border-gray-100"
                key={cart.id}
              >
                <div className="product-name text-[14px] font-bold text-gray-800">
                  <span>{item.productName}</span>
                </div>
                <div className="product-option text-[13px] text-gray-700">
                  <span>{`${cart.option.optionName}, `}</span>
                  <span>{cart.quantity}개</span>
                </div>

                <div className="price text-16px">
                  <span>
                    <span className="font-bold">{comma(cart.price)}</span>원
                  </span>
                </div>
              </div>
            ))}
            <div className="flex justify-center p-[10px] text-[14px] text-blue-kakao font-semibold">
              <span>무료배송</span>
            </div>
            <div className="h-[12px] bg-gray-100" />
          </Box>
        ))}
      </>
    );
  };

  const AddressInfo = {
    name: "김춘식",
    call: "010-0000-0000",
    address:
      "(13529) 경기도 성남시 분당구 판교역로 166 (백현동) 카카오 판교아지트 A동 3층",
  };

  return (
    <div className="bg-gray-100 mt-[80px] pb-[12px]">
      <Container className="order-template max-w-none mx-auto w-[870px] bg-white">
        <Box className="sub-title h-[45px] py-[11px] border-b border-gray-100 text-[15px] font-bold text-center">
          <h1>주문하기</h1>
        </Box>
        <Box className="address-info p-[16px] border-b border-gray-100 text-[15px]">
          <h2 className="block pb-[20px] text-[18px] font-bold">배송지 정보</h2>
          <span className="block txt-name text-[18px] font-bold">
            {AddressInfo.name}
          </span>
          <span className="block num-call text-[15px] pt-[7px]">
            {AddressInfo.call}
          </span>
          <span className="inline-block txt-address w-[310px] text-[14px] pt-[6px] text-gray-600">
            {AddressInfo.address}
          </span>
          <textarea
            placeholder="배송시 요청사항을 입력해주세요 (최대 50자)"
            className="textarea textarea-bordered textarea-sm block w-full max-w-none border-gray-300 rounded-[4px] mt-[12px]"
          />
        </Box>
        <div className="h-[12px] bg-gray-100" />

        <Box className="order-data-title py-[20px] pl-[16px] border-y border-gray-100 text-[18px] font-bold">
          <h2 className="">주문상품 정보</h2>
        </Box>
        {products && <OrderItems />}

        <Box className="total-receipt px-[16px] py-[20px] border border-gray-100 text-[18px] flex items-center justify-between">
          <h3 className="font-bold">총 주문 금액</h3>
          <span className="price-change font-bold">{comma(totalPrice)}원</span>
        </Box>
        <div className="h-[12px] bg-gray-100" />

        <Box className="all-agree-box border border-gray-100 px-[16px] py-[19px]">
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="all-agree"
              ref={allAgreeRef}
              checked={agreePayment && agreePolicy}
              onChange={handleAllAgree}
              className="w-[20px] h-[20px] mt-[4px] border-gray-300 cursor-pointer accent-yellow-kakao"
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="all-agree" className="text-[18px] font-bold">
              전체 동의하기
            </label>
          </div>
        </Box>

        <Box className="agree-box border border-gray-100 p-[16px]">
          <div>
            <span className="flex gap-2">
              <input
                type="checkbox"
                id="agree"
                name="payment-agree"
                ref={agreePaymentRef}
                checked={agreePayment}
                onChange={handleAgreement}
                className="w-[20px] h-[20px] mt-[1px] border-gray-300 cursor-pointer accent-yellow-kakao"
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="agree" className="text-[14px]">
                구매조건 확인 및 결제 진행 동의
              </label>
            </span>
          </div>
          <div className="mt-[16px]">
            <span className="flex gap-2">
              <input
                type="checkbox"
                id="policy"
                name="policy-agree"
                ref={agreePolicyRef}
                checked={agreePolicy}
                onChange={handleAgreement}
                className="w-[20px] h-[20px] mt-[1px] border-gray-300 cursor-pointer accent-yellow-kakao"
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor="policy" className="text-[14px]">
                개인정보 제3자 제공 동의
              </label>
            </span>
          </div>
        </Box>

        <Box className="border border-gray-100 p-[16px] bg-gray-50">
          <span className="block text-[13px] font-bold">법적고지</span>
          <span className="block text-[13px] text-gray-700 pt-[6px]">
            (주)카카오에서 판매하는 상품 중에는 개별 판매자가 판매하는 상품이
            포함되어 있습니다. 개별 판매자가 판매하는 상품에 대해 (주)카카오는
            통신중개 판매업자로서 통신판매의 당사자가 아니며 상품의 주문, 배송
            및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
          </span>
        </Box>

        <div className="flex flex-col gap-4">
          {/* 결제하기 버튼 */}
          <Button
            onClick={() => {
              if (agreePayment === false || agreePolicy === false) {
                alert("모든 항목에 동의가 필요합니다.");
                return;
              }
              mutate(null, {
                onSuccess: (res) => {
                  const { id } = res.data.response;
                  navigate(`${staticServerUri}/orders/complete/${id}`);
                },
                onError: () => {
                  // 사용자 정보가 유실된 경우
                  alert("로그인이 필요합니다.");
                  navigate(`${staticServerUri}/login`);
                },
              });
            }}
            className="w-full p-4 text-[20px] font-bold bg-yellow-kakao text-black"
          >
            {`${comma(totalPrice)}원 결제하기`}
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default OrderTemplate;
