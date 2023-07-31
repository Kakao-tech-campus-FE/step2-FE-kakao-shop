import React, { useEffect, useRef, useState } from "react";
import { PaymentWidgetInstance, loadPaymentWidget, ANONYMOUS } from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";
// import "../App.css";
import Button from "../components/atoms/Button";
import Footer from "../components/atoms/Footer";
import Box from "../components/atoms/Box";
import { comma } from "../utils/convert";

const selector = "#payment-widget";
const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
const customerKey = "YbX2HuSlsC9uVJW6NMRMj";

const CheckoutPage = () => {
  const paymentWidgetRef = useRef(null);
  const paymentMethodsWidgetRef = useRef(null);
  const [price, setPrice] = useState(500);

  useEffect(() => {
    (async () => {
      // ------ 결제위젯 초기화 ------
      // 비회원 결제에는 customerKey 대신 ANONYMOUS를 사용하세요.
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey); // 회원 결제
      // const paymentWidget = await loadPaymentWidget(clientKey, ANONYMOUS); // 비회원 결제

      // ------ 결제위젯 렌더링 ------
      // https://docs.tosspayments.com/reference/widget-sdk#renderpaymentmethods선택자-결제-금액-옵션
      const paymentMethodsWidget = paymentWidget.renderPaymentMethods(selector, { value: price });

      // ------ 이용약관 렌더링 ------
      // https://docs.tosspayments.com/reference/widget-sdk#renderagreement선택자
      paymentWidget.renderAgreement("#agreement");

      paymentWidgetRef.current = paymentWidget;
      paymentMethodsWidgetRef.current = paymentMethodsWidget;
    })();
  }, []);

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;

    if (paymentMethodsWidget == null) {
      return;
    }

    // ------ 금액 업데이트 ------
    // https://docs.tosspayments.com/reference/widget-sdk#updateamount결제-금액
    paymentMethodsWidget.updateAmount(price, paymentMethodsWidget.UPDATE_REASON.COUPON);
  }, [price]);

  return (
    <div className="bg-bg_gray">
        <div className="w-[870px] mx-auto my-0 ">
        {/* <h1>주문서</h1>
        <span>{`${price.toLocaleString()}원`}</span>
        <div>
            <label>
            <input
                type="checkbox"
                onChange={(event) => {
                setPrice(event.target.checked ? price - 5000 : price + 5000);
                }}
            />
            5,000원 할인 쿠폰 적용
            </label>
        </div> */}
        <Box className="flex bg-white border border-border_gray px-4 py-5 my-3 text-[18px]">
            <span>최종 결제금액</span>
            <span>
                <strong>{comma(price)}원</strong>
            </span>
        </Box>
        <div id="payment-widget"  className="border border-border_gray border-b-0"/>
        <div id="agreement" className="border border-border_gray"/>
        <Button
            onClick={async () => {
            const paymentWidget = paymentWidgetRef.current;

            try {
                // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
                // https://docs.tosspayments.com/reference/widget-sdk#requestpayment결제-정보
                await paymentWidget?.requestPayment({
                orderId: nanoid(),
                orderName: "토스 티셔츠 외 2건",
                customerName: "김토스",
                customerEmail: "customer123@gmail.com",
                successUrl: `${window.location.origin}/success`,
                failUrl: `${window.location.origin}/fail`,
                });
            } catch (error) {
                // 에러 처리하기
                console.error(error);
            }
            }}
        >
            결제하기
        </Button>
        </div>
        <Footer />
    </div>
  );
};

export default CheckoutPage;
