import Container from "../atoms/Container";
import Box from "../atoms/Box";
import OrderItem from "../atoms/OrderItem";
import Button from "../atoms/Button";
import Checkbox from "../week1_component/Checkbox/Checkbox";
import { comma } from "../../utils/convert";
import { useState, useEffect, useRef } from "react";

// toss payments
import { PaymentWidgetInstance, loadPaymentWidget, ANONYMOUS } from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";

const selector = "#payment-widget";
const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
const customerKey = "YbX2HuSlsC9uVJW6NMRMj";

const staticServerUri = process.env.REACT_APP_PATH || "";

const OrderTemplate = ({ data }) => {
    const [agreeAll, setAgreeAll] = useState(false);
    const [agreePayment, setAgreePayment] = useState(false);
    const [agreePrivacy, setAgreePrivacy] = useState(false);

    const paymentWidgetRef = useRef(null);
    const paymentMethodsWidgetRef = useRef(null);
    const [price] = useState(data.totalPrice);
    const email = useSelector(state => state.user.email);
    console.log('data', data);

    useEffect(() => {
        if(data.products.length === 0) {
            alert("결제할 상품이 존재하지 않습니다.");
            window.location.href = "/";
        }

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


    useEffect(() => {
        if(agreeAll && !(agreePayment && agreePrivacy)) {
            setAgreeAll(false);
        }
        if(agreePayment && agreePrivacy) {
            setAgreeAll(true);
        }
    }, [agreePayment, agreePrivacy])

    useEffect(() => {
        if(agreeAll) {
            setAgreePayment(agreeAll);
            setAgreePrivacy(agreeAll);
        }
    }, [agreeAll]); 
    
    const handleAgreeAll = (e) => {
        const { checked } = e.target;
        setAgreePayment(checked);
        setAgreePrivacy(checked);
    }

    const getOrderName = () => {
        console.log('getOrderName', data.products)
        const orderCnt = data.products.length;

        if(orderCnt == 1)
            return `${data.products[0].prouctName}`
            
        return `${data.products[0].productName} 외 ${orderCnt - 1}건`;
    }

    const handleRequestPayment = async () => {
        const paymentWidget = paymentWidgetRef.current;

        try {
            // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
            // https://docs.tosspayments.com/reference/widget-sdk#requestpayment결제-정보
            await paymentWidget?.requestPayment({
            orderId: nanoid(),
            orderName: getOrderName(),
            customerName: "김토스",
            customerEmail: `${email}`, //"customer123@gmail.com",
            successUrl: window.location.origin + staticServerUri + "/order/temp",
            failUrl: window.location.origin + staticServerUri + "/order/fail",
            });
        } catch (error) {
            // 에러 처리하기
            console.error(error);
            alert(error);
        }


    }

    return (
        <Container className="w-[870px]">
            <Box className="title_wrap text-center leading-[44px] bg-white border border-border_gray border-b-0">
                <h1 className="font-semibold">주문상품 정보</h1>
            </Box>
            <Box className="bg-white border border-border_gray px-4 py-5">
                {data.products.map((product, index) => {
                    return (
                        <OrderItem key={`order-item-${index}`} item={product}/>
                    );
                })}
            </Box>
            <Box className="flex bg-white border border-border_gray px-4 py-5 my-3 text-[18px]">
                <span className="">최종 결제금액</span>
                <span className="block ml-auto text-left text-blue">
                    <strong>{comma(data.totalPrice)}원</strong>
                </span>
            </Box>
            <Box className="border border-border_gray">
                <div id="payment-widget"  className=""/>
                <div id="agreement" className=""/>
            </Box>
            <Box className="bg-white border border-border_gray mt-3">
                <div className="px-4 py-[19px] text-[18px] font-semibold border-b border-border_gray">
                    <Checkbox
                        id={"agreeAll"}
                        name={"agreeAll"}
                        checked={agreeAll}
                        onChange={handleAgreeAll}
                    >전체 동의</Checkbox>
                </div>
                <div className="p-4 border-b border-border_gray">
                    <Checkbox
                        className="text-[14px]"
                        id={"agreePayment"}
                        name={"agreePayment"}
                        checked={agreePayment}
                        onChange={(e) => { setAgreePayment(e.target.checked) }}
                    >구매조건 확인 및 결제 진행 동의</Checkbox>
                    <Checkbox 
                        className="text-[14px] mt-4"
                        id={"agreePrivacy"}
                        name={"agreePrivacy"}
                        checked={agreePrivacy}
                        onChange={(e) => { setAgreePrivacy(e.target.checked) }}
                    >개인정보 제3자 제공 동의</Checkbox>
                </div>
                <div className="p-4 text-[13px]">
                    <strong className="leading-4">법적고지</strong>
                    <p className="pt-[6px] text-[#666] leading-5">
                        (주)카카오에서 판매하는 상품 중에는 개별 판매자가 판매하는 상품이 포함되어 있습니다. 개별 판매자가 판매하는 상품에 대해 (주)카카오는 통신중개 판매업자로서 통신판매의 당사자가 아니며 상품의 주문, 배송 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
                    </p>
                </div>                
                <Button
                    className="block h-[60px]"
                    onClick={() => {
                        if(!agreeAll) {
                            alert("결제 진행 및 개인정보 제공에 모두 동의해주세요.");
                            return;
                        }
                        handleRequestPayment();
                    }}
                >
                    <strong className="text-[20px] leading-5">
                        {`${comma(price)}원 결제하기`}
                    </strong>
                </Button>
            </Box>
        </Container>
    );
};

export default OrderTemplate;