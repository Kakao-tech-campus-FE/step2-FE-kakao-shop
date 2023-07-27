import {useMutation} from "react-query";
import {getCart} from "../../services/cart";
import {comma} from "../../utils/convert";
import {useNavigate} from "react-router-dom";
import {useRef, useState} from "react";
import useToast from "../../hooks/useToast";

const OrderTemplate = ({data}) => {

    console.log("tempalate", data);

    const {products, totalPrice} = data?.data?.response;

    const {mutate} = useMutation({
        queryFn: () => getCart(),
        mutationKey: "order",
    })
    const navigate = useNavigate();

    const [agreePayment, setAgreePayment] = useState(false);
    const [agreePolicy, setAgreePolicy] = useState(false);

    const allAgreeRef = useRef(null);
    const agreePaymentRef = useRef(null);
    const agreePolicyRef = useRef(null);

    const handleOnClickAllAgree = (e) => {
        const value = e.target.checked;
        setAgreePayment(value);
        setAgreePolicy(value);
    }

    const handleAgreement = (e) => {
        const {name, checked} = e.target;
        if (name === "agreePayment") {
            setAgreePayment(checked);
        }
        if (name === "agreePolicy") {
            setAgreePolicy(checked);
        }
    }

    const {showToast} = useToast();

    const OrderItems = () => products?.map((item) =>
        item.carts.filter((cart) => cart.quantity !== 0).map((cart) => (
            <div key={cart.id} className={"flex flex-col p-4 items-start text-gray-700 gap-2 border border-gray-300"}>
                <div className={"order-product-name font-semibold"}>
                    <span>{`${item.productName} - ${cart.option.optionName}`}</span>
                </div>
                <div className={"product-quantity text-sm"}>
                    <span>{comma(cart.quantity)}개</span>
                </div>
                <div className={"order-product-price"}>
                    <span>{comma(cart.price * cart.quantity)}원</span>
                </div>
            </div>
        ))
    );

    return (
        <div className={"order-template flex flex-col mx-auto max-w-[1024px] w-[100%] px-20 gap-2"}>
            <div className={"h-20 flex items-center justify-center"}>
                <h1 className={"text-4xl font-bold"}>주문하기</h1>
            </div>
            <div className={"delivery-info border border-gray-300 px-10 pb-10"}>
                <div className={"border-b border-b-gray-300 p-4"}>
                    <h2 className={"text-2xl font-bold"}>배송지 정보</h2>
                </div>
                <div className={"flex flex-col"}>
                    <div className={"flex items-center gap-2 p-4"}>
                        <span className={"text-lg"}>박동진</span>
                        <span className={"badge text-blue-400 bg-blue-100 rounded-md p-1 text-sm"}>기본배송지</span>
                    </div>
                    <input type={"text"} className={"px-4 py-2 border-b border-b-gray-300 font-semibold"} placeholder={"휴대폰 번호 '-' 제외"}/>
                    <input type={"text"} className={"px-4 py-2 border-b border-b-gray-300"} placeholder={"주소"}/>
                    <input type={"text"} className={"px-4 py-2 border-b border-b-gray-300"} placeholder={"상세주소"}/>
                    <input type={"text"} className={"px-4 py-2 border-b border-b-gray-300"} placeholder={"배송 메모"}/>
                </div>
            </div>
            <div className={"border border-gray-300 flex flex-col gap-4 px-10 pb-10"}>
                <h2 className={"p-4 text-2xl font-bold"}>주문상품 정보</h2>
                <OrderItems/>
            </div>
            <div className={"border border-gray-300 p-4 flex items-center justify-between"}>
                <h3 className={"text-xl font-bold"}>총 주문 금액</h3>
                <span className={"tobal-price text-xl font-bold text-blue-400"}>
                        {comma(totalPrice)}원
                    </span>
            </div>
            <div className={"flex flex-col border border-gray-300"}>
                <div className={"check-box-container px-4 pb-4"}>
                    <div className={"flex items-center gap-2 border-b border-b-gray-300 py-4"}>
                        <input type={"checkbox"} id={"all-agree"}
                               ref={allAgreeRef}
                               checked={agreePayment && agreePolicy}
                               onChange={handleOnClickAllAgree}
                        />
                        <label
                            htmlFor={"all-agree"} className={"text-xl font-bold"}>
                            전체 동의
                        </label>
                    </div>
                    <div className={"check-boxes flex flex-col gap-4 py-4"}>
                        <div className={"flex gap-2"}>
                            <input type={"checkbox"} id={"agree"}
                                   ref={agreePaymentRef}
                                   checked={agreePayment}
                                   onChange={handleAgreement}
                                   name={"agreePayment"}
                            />
                            <label
                                htmlFor={"agree"} className={"text-md"}>
                                구매조건 확인 및 결제 진행 동의
                            </label>
                        </div>
                        <div className={"flex gap-2"}>
                            <input type={"checkbox"} id={"policy"}
                                   ref={agreePolicyRef}
                                   checked={agreePolicy}
                                   name={"agreePolicy"}
                                   onChange={handleAgreement}
                            />
                            <label
                                htmlFor={"policy"} className={"text-md"}>
                                개인정보 제 3자 제공동의
                            </label>
                        </div>
                        <div className={"low-info text-justify"}>
                        <span className={" block text-sm text-gray-700 font-bold"}>
                            법적고지
                        </span>
                            <span className={"text-xs text-gray-500"}>
                            (주)카카오에서 판매하는 상품 중에는 개별 판매자가 판매하는 상품이 포함되어 있습니다.
                            개별 판매자가 판매하는 상품에 대해 (주)카카오는 통신중개 판매업자로서
                            통신판매의 당사자가 아니며
                            상품의 주문, 배송 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
                        </span>
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => {
                        if (!agreePayment || !agreePolicy) {
                            showToast("동의하지 않은 항목이 있습니다.");
                            return;
                        }
                        mutate(null, {
                            onSuccess: () => {
                                alert("주문이 완료되었습니다.")
                            },
                            onError: (error) => {
                                const id = error.response.id
                                alert(error.response.data.error.message)
                                navigate(`/orders/complete/${id}`)
                            }
                        })
                    }}
                    className={`w-full text-center font-bold text-2xl py-4 ${agreePayment && agreePolicy ?
                        "cursor-pointer bg-kakao-yellow text-black" :
                        "cursor-not-allowed bg-grey-300 text-gray-500 bg-gray-300"}
                        `}
                >
                    결제하기
                </button>
            </div>
        </div>
    )
}

export default OrderTemplate;