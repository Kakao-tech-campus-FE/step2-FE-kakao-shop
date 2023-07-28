import { useMutation, useQuery } from "react-query";
import { getCart } from "../../services/addCart";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const OrderTemplate=({data})=>{
    const {products, totalPrice}=data?.data?.response;
    const navigate=useNavigate();
    //const [allAgree, setAllAgree] = useState(false);
    const [agreePayment, setAgreePayment] = useState(false);
    const [ agreePolicy, setAgreePolicy] = useState(false);
    console.log(data);
}

    const allAgreeRef= useRef(null);
    const agreePaymentRef= useRef(null);
    const agreePolicyRef = useRef(null);

    const handleAllAgree=(e)=>{
        console.log(e.target.checked);
        const value =e.target.checked;
        setAgreePayment(value);
        setAgreePolicy(value);
    }
    const handleAgreement = (e) => {
        const {name, checked} = e.target;

        if (name === "payment-agree"){
            setAgreePayment(checked);
        } else if (name === "policy-agree"){
            setAgreePolivy(checked);
        }
    }


    const {mutate} = useMutation({
        mutationKey:"order",
        queryFn:()=>order,
    })
    //상품명 적절히 표기
    //그에ㄸ라 가격, 수량

    //products 안에 있는 item
    //`${item.productName} = ${item.carts[0].option.optionName}`
    //1개당 가격: item.carts[0].price * item.carts[0].quantity

    const OrderItems = ()=> {
        let renderComponent=[];
        if (Array.isArray(products) === false) return;

        products.forEach((item)=>{
            //item: 각 상품, carts: 옵션이 담김
            renderComponent.push(item.carts.map((cart) => {
                return(
                    <div key={cart.id} className="p-4 border-t">
                        <div className="product-name font-bold">
                            <span>{`${item.productName} - ${cart.option.optionName}`}</span>
                        </div>
                        <div className="quantity">
                            <span>{comma(cart.quantity)}개</span>
                        </div>
                        <div className="price font-bold">
                            <span>{comma(cart.price)}개</span>
                        </div>
                    </div>

                )
            })
            )
    });


    return (
        <div className="container">
          <div className="block mx-auto max-w-[1024px] w-[100%]">
            <div className="border py-2">
              <h1 className="text-sm font-bold mx-2">주문 확인</h1>
            </div>
            <div className="border py-4">
              <h2 className="text-sm font-bold mx-2">배송지 정보</h2>
            </div>
            <div className="border py-4">
              <div className="name flex items-center gap-2 mx-2">
                홍길동
                <span className="text-blue-400 bg-blue-100 rounded-md text-xs p-1">
                  기본배송지
                </span>
              </div>
            </div>
            <div className="border py-4">
              <div className="mx-2">
                전화번호 <span>010-1234-5678</span>
              </div>
            </div>
            <div className="border py-4">
              <div className="mx-2">
                주소 <span>광주광역시 북구 용봉동 300</span>
              </div>
            </div>
            <div className="border py-4">
              <span className="mx-2">주문상품 정보</span>
            </div>
            <OrderItems />

        <div className="border p-4 flex items-center justify-between">
            <h3 className="font-bold text-xl">총 주문금액</h3>
            <span className="price text-xl text-indigo-700">
                {comma(totalPrice)}원</span>
        </div>
        {/* 전체 동의, 구매조건 확인 밒 결제 진행동의 */}
        <div className="border flex flex-col p-4 gap-2">
            <div className="flex gap-2">
                <input type="checkbox" id="all-agree"
                ref={allAgreeRef}
                value={allAgree}
                checked={agreePayment === true && agreePolicy === true}
                onClick={handleAllAgree}
                />
                <label htmlFor="all-agree" className="text-xl font-bold">
                전체동의
                </label>
            </div>
        
            <div className="flex gap-2">
            <input
              type="checkbox"
              id="policy"
              name="policy-agree"
              ref={agreePolicyRef}
              checked={agreePolicy}
              onClick={handleAgreement}
            />
            <label htmlFor="policy" className="text-sm">
              개인정보 제공 제 3자 동의
            </label>
          </div>
          {/* 결제하기 버튼 */}
          <button
            className="bg-yellow-300 w-full p-2 font-medium"
            onClick={() => {
              if (agreePayment === false || agreePolicy === false) {
                alert("필수 동의에 체크해주세요. ");
                return;
              }


            mutate(null, {
                onError:()=>{
                alert("주문에 실패했습니다.")
            },
            onSuccess: (res)=>{
                const id = res.response.id;
                alert("주문이 완료되었습니다.");
                navigate(`/orders/complete/${id}`)
            }})



        }}


        >
            결제하기
        </button>

        </div>
        </div>
        </div>

    )
}

export default OrderTemplate;