import { useMutation } from "react-query"
import { comma } from "../../utils/convert"
import { order } from "../../apis/order"
import { useNavigate } from "react-router-dom"
import { useRef, useState } from "react"
import axios from "axios"

const OrderTemplate = ({ data }) => {
    
    const { products, totalPrice } = data?.data?.response;
    const navigate = useNavigate();
    const carts = []
    const [agreePayment, setAgreePayment] = useState();
    const [agreePolicy, setAgreePolicy] = useState();

    const allAgreeRef = useRef(null);
    const agreePaymentRef = useRef(null);
    const agreePolicyRef = useRef(null);


    const handleAgreement = (e) => {
        const { name, checked } = e.target;
        
        if (name === "paymant-agree"){
            setAgreePayment(checked)
        } else if (name === "policy-agree"){
            setAgreePolicy(checked);
        }
    }
    
    const handleOrder = () => {
      // 주문하기 버튼 클릭 시 호출되는 함수
      // 실제로 결제하지 않고, 주문 완료 처리만 수행
      // 장바구니를 비워주는 것만 구현
      axios.delete('http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com/api/cart')
        .catch(error => {
          console.error('주문 처리 오류:', error);
        });
    };
  

    const { mutate } = useMutation({
        mutationKey: "order",
        queryFn: () => order
    })

    const OrderItems = () => {
        let renderComponent = null;
        if (Array.isArray(products) === false) return ;

        products.forEach((item) => {
            //item: 각 상품, carts: 옵션
            renderComponent.push(item.carts.map(cart => {
                return (
                    <div key={cart.id} className="p-4 border-t">
                        <div className="product-name">
                            <span>{`${item.productName} - ${cart.option.optionName}`}</span>
                        </div>
                        <div className="quantity">
                            <span>{comma(cart.quantity)}개</span>
                        </div>
                        <div className="price font-bold">
                            <span>{comma(cart.price * cart.quantity)}원</span>
                        </div>
                    </div>
                )
            })
            );
        });
        return renderComponent;
    }

    return (
        <div>
            <div className="py-20">
                <div className="block mx-auto max-w-[1024px] w-[100%]">
                    <div className="border p-2">
                        <h1 className="text-sm font-bold">주문하기</h1>
                    </div>
                    <div className="border p-4">
                        <h2 className="text-sm font-bold">배송지 정보</h2>
                    </div>     
                    <div className="border p-4">
                        <div className="flex items-center gap-4">
                            <span>홍길동</span>
                            <span className="text-blue-400 bg-blue-100 rounder">
                                기본배송지
                            </span>
                        </div>
                    </div>
                    <div className="border p-4">
                        <span>010-0000-0000</span>
                    </div>
                    <div className="border p-4">
                        <span>광주광역시 북구 용봉동</span>
                    </div>
                    <div className="border p-4">
                        <h2>주문상품 정보</h2>
                    </div>
                    {/*각 주문의 정보*/}
                    <OrderItems />
                    {carts.map(item => {
                        return (
                        <div key={item.id}>
                        {/*상품 이름*/}
                         <div className="product-name">
                            <span>{item.name}</span>
                            <span>{item.carts[0].optionName}</span>
                         </div>
                         <div className="quantity">
                            <span>{comma(item.quantity)}개</span>
                         </div>
                         <div className="price">{comma(item.carts[0].price)}원</div>
                         </div>
                        );
                    })}
                    <div className="border p-4 flex items-center justify-between">
                        <h3 className="font-bold text-xl">총 주문 금액</h3>
                        <span className="price text-xl text-indigo-700">{comma(data.totalPrice)}원</span>
                    </div>
                    {/* 전체 동의, 구매조건 확인 및 결제 진행 동의 */}
                    <div className="border p-4">
                        <div className="flex gap-2">
                            <input 
                            type="checkbox" 
                            id="all-agree" 
                            ref={allAgreeRef}
                             />
                            <label htmlFor="all-agree" className="text-xl font-bold">
                                전체 동의
                            </label>
                        <div className="flex gap-2">
                            <input 
                            type="checkbox" 
                            id="agree"
                            ref={agreePaymentRef} />
                            <label htmlFor="agree" className="text-sm">
                                구매조건 확인 및 결제 진행 동의
                            </label>
                        </div>
                        <div className="flex gap-2">
                            <input 
                            type="checkbox" 
                            id="policy"
                            ref={agreePolicyRef} />
                            <label htmlFor="policy" className="text-sm">
                                제 3자 정책 동의
                            </label>
                        </div>
                        {/* 결제하기 버튼 */}
                        <button
                            onClick={() => {
                                //POST: /orders/save
                                //DB: 장바구니에 있는 모든 항목이 결제로 저장
                                //장바구니는 비워짐
                                //페이지 이동 -> 주문완료 페이지(리턴 받은 주문 아이디)
                                // /orders/complete/:id
                                mutate(null, {
                                    onError: () => {
                                        alert("주문에 실패했습니다.")
                                    },
                                    onSuccess: (res) => {
                                        const id = res.response.id;
                                        alert("주문이 완료되없습니다.")
                                        navigate(`/orders/comlete/${id}`)
                                        handleOrder();
                                    },
                                })


                            }}
                        
                        className={`
                            ${agreePayment && agreePolicy} 
                            ? bg-yellow-500 w-pull p-4 font-medium
                            : bg-gray-300 text-gray-500`}>
                            결제하기
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderTemplate