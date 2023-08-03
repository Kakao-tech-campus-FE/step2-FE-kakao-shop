import { useRef, useState, useEffect } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { order } from "../../services/order";
import { comma } from "../../utils/convert";


const OrderTemplate = ({ data }) => {

    // 사용자의 장바구니 목록을 조회해서 보여주는 것
    const [ products, setProducts ] = useState([]);
    const [ totalPrice, setTotalPrice ] = useState(0);

    const navigate = useNavigate();
    const [agreePayment, setAgreePayment] = useState(false);
    const [agreePolicy, setAgreePolicy] = useState(false);
    
    const allAgreeRef = useRef(null); 
    const agreePaymentRef = useRef(null);
    const agreePolicyRef = useRef(null);
    
    useEffect(() => {
        data?.data?.response?.products !== undefined &&
            setProducts(data?.data?.response?.products);
        data?.data?.response?.totalPrice !== undefined &&
            setTotalPrice(data?.data?.response?.totalPrice);
    },[data]);


    const getTotalQuantity = () => {
        let totalQuantity = 0;
        console.log("총 수량 계산", products)
        totalQuantity = products.reduce((acc, items) => {
            return acc + items.carts.reduce((cartTotal, option) => {
                return cartTotal + option.quantity;
            }, 0);
        }, 0);
    
        return totalQuantity;
    }

    const handleAllAgree = (e) => {
        const value = e.target.checked;
        setAgreePayment(value);
        setAgreePolicy(value);
    };

    const handleAgreement = (e) => {
        const { name, checked } = e.target;
        if ( name === "payment-agree") {
            setAgreePayment(checked);
        } else if (name === "policy-agree") {
            setAgreePolicy(checked);
        }
    };

    const { mutate } = useMutation({
        mutationKey: "order",
        mutationFn: order,
    });

    const OrderItems = ({ products }) => {
        let renderComponent = [];
    
        products.forEach((item) => {
            renderComponent.push(item.carts.map(cart => {
                return (
                    <div key={cart.id} className="p-4 border-b">
                        <div className="product-name">
                            <span className="text-sm font-semibold">{`${item.productName}`}</span>
                        </div>
                        <div className="product-detail">
                            <span className="text-[13px]">{`${cart.option.optionName}`}, {comma(cart.quantity)}개</span>
                        </div>
                        <div className="price">
                            <span className="text-base"><span className="font-bold">{comma(cart.price)}</span>원</span>
                        </div>
                    </div>
                );
            }));
        });
        return renderComponent;
    };


    return (
        <div>
            <div className = "mx-auto max-w-[870px] w-[100%]">
                <div className="my-4 border">
                    <div className="text-lg font-bold flex items-center justify-center h-18 h-[52px]">
                        <h1 className = "text-sm">주문하기</h1>
                    </div>
                    <div className="p-4 border-t">
                        <h2 className="font-semibold text-lg pb-2">배송지 정보</h2>
                        <div className="flex items-center gap-2" >
                            <span className="font-semibold text-lg">박건형</span>
                            <span className="text-blue-400 bg-sky-100 rounded w-[100px] text-center text-sm">기본 배송지</span>
                        </div>
                        <div className="pt-1">
                            <span className="text-sm">010-0000-0000</span>
                        </div>
                        <div>
                            <span className="text-sm">광주광역시 북구 용봉로 77 (전남대학교)</span>
                        </div>        
                    </div>
                </div>
                <div className="border">
                    <div className=" p-4 border-b">
                        <span className="font-semibold text-lg">주문상품 정보 </span>
                        <span>(총 {getTotalQuantity()}개)</span>
                    </div>
                    {/* 각 주문의 정보 */}
                    <OrderItems products={products} />
                    <div className="h-[46px] text-center leading-[46px]">
                        <span className="text-sky-600">무료배송</span>
                    </div>
                </div>
                {/* 총 주문 금액 */}
                <div className="p-4 flex items-center justify-between border my-4">
                    <h3 className="text-lg">총 주문 금액</h3>
                    <span className="text-lg font-bold text-sky-600">{comma(totalPrice)}원</span>
                </div>
                {/* 전체 동의, 구매 조건 확인 및 결제 진행 동의 */}
                <div className="flex flex-col gap-2 border">
                    <div className="flex gap-2 border-b p-4 align-center">
                        <input type="checkbox" id = "all-agree" 
                            ref={allAgreeRef}
                            checked={agreePayment && agreePolicy}
                            onClick = {handleAllAgree}
                            onChange={()=> {}}
                            className="w-[22px] h-[22px] mt-[7px]"
                        />
                        <label htmlFor="all-agree" className="text-xl font-bold">전체 동의</label>
                    </div>
                    <div className="flex gap-2 px-4">
                        <input type="checkbox" id="agree" name = "payment-agree"
                            ref={agreePaymentRef}
                            checked={agreePayment}
                            onChange={handleAgreement}
                            className="w-[22px] h-[22px] mt-[4px] border-[0.5px] border-red-600"
                        />
                        <label htmlFor="agree" className="text-sm ">구매 조건 확인및 결제 진행 동의</label>
                    </div>
                    <div className="flex gap-2 px-4">
                        <input type="checkbox" id="policy" name="policy-agree"
                            ref={agreePolicyRef}
                            checked={agreePolicy}
                            onChange={handleAgreement}
                            className="w-[22px] h-[22px] mt-[4px] border-[0.5px] "
                        />
                        <label htmlFor="policy" className="text-sm">개인정보 제 3자 제공 동의</label>
                    </div>
                    {/* 결제하기 버튼 */}
                    <button 
                        onClick={() => {
                            // 동의가 이루어지지 않은 경우 처리
                            if (!agreePayment || !agreePolicy) {
                                alert("동의가 필요합니다");
                                return;
                            }
                            // 장바구니 모든 항목이 결제로 저장
                            // 장바구니 비워짐
                            // 페이지 이동 -> 주문완료 페이지(리턴 받은 주문 아이디)
                            mutate(null, {
                                onError: (error) => {
                                    // 401 에러: 인증이 필요할 때의 에러 코드. 금액이 결제되지 않았을 때 인증이 실패하는 방식
                                    // 이 에러 코드를 사용하기 위해서는 mutate함수에 결제 확인 함수가 필요합니다.
                                    if (error?.response?.status === 401) {
                                        alert("결제에 실패했습니다: 잔액 부족이거나 결제 정보가 올바르지 않습니다.");
                                    }
                                    // 기타 에러 상황 처리
                                    else {
                                        alert("결제 과정 중에 오류가 발생했습니다. 다시 시도해주세요.");
                                    }
                                },
                                onSuccess: (res) =>{
                                    const id = res.data.response.id;
                                    alert("주문이 완료됐습니다.");
                                    navigate(`/orders/complete/${id}`);
                                }
                            })

                        }}
                        className={`
                        w-full p-4 font-medium 
                        ${agreePayment && agreePolicy ? "bg-#ffeb00 text-black" : "bg-gray-300 text-gray-500"}
                        `}
                    >
                        <span className="text-xl">{comma(totalPrice)}원 결제하기</span>
                    </button>
                </div> 
            </div>
        </div>
    )
};

export default OrderTemplate;
