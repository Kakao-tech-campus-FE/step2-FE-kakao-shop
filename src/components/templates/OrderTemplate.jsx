import {useMutation, useQuery} from "react-query";
import {getCart} from "../../services/cart";
import {comma} from "../../utils/convert";
import {useNavigate} from "react-router-dom";
import {useRef, useState} from "react";

const OrderTemplate = ({data}) => {
    const {products, totalPrice} = data.data.response;
    const carts = []

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

    const OrderItems = () => {

        let renderComponent = []

        if (Array.isArray(products) === false) return;

        products.forEach((item) => {
            renderComponent.push(
                item.carts.map(cart => {
                    return (
                        <div key={cart.id}>
                            <div className={"product-name"}>
                                <span>{`${item.productName} - ${cart.option.optionName}`}</span>
                            </div>
                            <div className={"product-quantity"}>
                                <span>{comma(cart.quantity)}개</span>
                            </div>
                            <div className={"product-price"}>
                                <span>{comma(cart.price * cart.quantity)}원</span>
                            </div>
                        </div>
                    );
                })
            )
            return renderComponent;
        });
    }

    return (
        <div className={"py-20"}>
            <div className={"block mx-auto max-w-[1024px] w-[100%]"}>
                <div className={"border p-2"}>
                    <h1 className={"text-5xl font-bold"}>주문하기</h1>
                </div>
                <div className={"border p-4"}>
                    <h2 className={"text-5xl font-bold"}>배송지 정보</h2>
                </div>
                <div className={"border p-4"}>
                    <div className={"flex items-center gap-2"}>
                        <span>박동진</span>
                        <span className={"badge text-blue-400 bg-blue-100 rounded-md p-2"}>기본배송지</span>
                    </div>
                </div>
                <div className={"border p-4"}>
                    <h2>주문상품 정보</h2>
                </div>
                <OrderItems/>
                <div className={"border p-4 flex items-center justify-between"}>
                    <h3>총 주문 금액</h3>
                    <span className={"price"}>
                        {comma(data.data.response.totalPrice)}원
                    </span>
                </div>
                <div className={"flex flex-col p-4 gap-4"}>
                    <div className={"flex gap-2"}>
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
                    <div className={"flex gap-2"}>
                        <input type={"checkbox"} id={"agree"}
                               ref={agreePaymentRef}
                               checked={agreePayment}
                               onChange={handleAgreement}
                               name={"agreePayment"}
                        />
                        <label
                            htmlFor={"agree"} className={"text-xl font-bold"}>
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
                            htmlFor={"policy"} className={"text-xl font-bold"}>
                            개인정보 제 3자 제공동의
                        </label>
                    </div>
                </div>
                <button
                    onClick={() => {
                        if (!agreePayment || !agreePolicy) {
                            alert("약관에 동의해주세요.")
                            return;
                        }
                        mutate(null, {
                            onSuccess: () => {
                                alert("주문이 완료되었습니다.")
                            },
                            onError: (error) => {
                                const id = res.response.id
                                alert(error.response.data.error.message)
                                navigate(`/orders/complete/${id}`)
                            }
                        })
                    }}
                    className={"bg-yellow-500 p-4 w-full text-center font-medium text-2xl " +
                    agreePayment && agreePolicy ?
                        "cursor-pointer bg-yellow-500 text-black" :
                        "cursor-not-allowed bg-grey-300 text-gray-500"}
                >
                    결제하기
                </button>
            </div>
        </div>
    )
}

export default OrderTemplate;