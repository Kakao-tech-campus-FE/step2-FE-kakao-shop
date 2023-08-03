import { useState, useRef } from 'react'
import { comma, } from '../../utils/convert' 
import { useMutation } from 'react-query'
import { order, } from '../../services/order'
import { useNavigate } from 'react-router-dom'

function OrderTemplate({ data }) {
  const { products, totalPrice } = data.data.response
  const navigate = useNavigate()
  const [agreePayment,setAgreePayment] = useState(false)
  const [agreePolicy, setAgreePolicy] = useState(false)

  const allAgreeRef = useRef(null)
  const agreePaymentRef = useRef(null)
  const agreePolicyRef = useRef(null)

  const handleAllAgree = (e) => {
    const chekced = e.target.checked
    setAgreePayment(chekced)
    setAgreePolicy(chekced)
  }

  const handleAgreement = (e) => {
    const { name, checked } = e.target
    if(name==="payment-agree"){
      setAgreePayment(checked)
    } else if(name==="policy-agree"){
      setAgreePolicy(checked)
    }
  }
  
  const { mutate } = useMutation({
    mutationFn: order
  })


  function OnClickHandler() {
    // 동의가 이뤄지지 않았을 경우 처리
    if(agreePayment === false || agreePolicy === false){
    alert("모든 항목에 동의가 필요합니다")
    return;
    }
                  
    // POST: /orders/save
    // DB: 장바구니에 있는 모든 항목이 결제로 저장
    // 장바구니는 비워짐
    // 페이지 이동 -> 주문완료 페이지(리턴 받은 주문 아이디)
    // /orders/complete/:id
    mutate(null,{
      onSuccess: (res) => {
        const id = res.data.response.id
        alert("주문이 완료되었습니다.")
        navigate(`../orders/complete/${id}`)
      },
      onError: (error) => {
        console.log(error)
        alert("주문에 실패했습니다.")
        // 사용자 정보가 유실 -> login으로 이동 애초에
        // 애초에 사용자 정보가 없으면 이 페이지로 넘어올 수 없게 설계


        // 장바구니에 아무것도 존재하지 않을 때, == 404status 상황
        alert(error.data.error.message)
        navigate(`/`)
      },
    })   
}

  return (
    <div className=''>
      <div className='block mx-auto max-w-[1024px] w-[100%]'>
        <div className='border-x border-t border-slate-400 border-solid p-4'>
          <h2 className='text-md font-bold'>배송지 정보</h2>
        </div>
        <div className='border-x border-t border-slate-400 border-solid p-4'>
          <div className='flex items-center gap-2'>
            <span className=''>홍길동</span>
            <span className="text-blue-400 bg-blue-100 rounded-md text-xs p-1">기본 베송지</span>
          </div>
        </div>
        <div className='border-x border-t border-slate-400 border-solid p-4'>
          <span>010-0000-0000</span>
        </div>
        <div className='border-x border-t border-slate-400 border-solid p-4'>
          <span>서울특별시 강남구 도곡동 000-00</span>
        </div>
        <div className='border border-slate-400 border-solid p-4'>
          <h2 className='text-lg font-bold py-5'>주문상품 정보</h2>
          {/* 각 주문의 정보 */}
          {products.map(item => {
            return(
            <div className='border-x border-t border-slate-400 border-solid pb-5' key={item.id}>
              <div className='product-name w-full border-b border-slate-200 border-solid '>
                <div className='text-center py-4 border-b border-slate-200 border-solid'>
                  <span className='block w-fill font-bold mx-auto'>{item.productName}</span>
                </div>
                <div className='bg-gray-50 px-5'>
                {item.carts.map(cart => {return(
                  <div key={cart.id} className='py-2'>
                    <span>[옵션] </span>
                    <span>{cart.option.optionName} </span>
                    <span>{cart.quantity}개</span>
                    <div className='font-bold py-2'>{cart.price}원</div>
                  </div>
                  // quantity가 0개이면 요소 안 만들기 구현 
                )
                // 전체 옵션 가격이 0원이면 요소 안 만들기 구현
                })}
                </div>
              </div> 
            </div>)
          })}
          <div className='border border-slate-400 border-solid p-4 flex items-center justify-between gap-4'>
            <h3 className='text-xl font-extrabold'>총 주문 금액</h3>
            <span className='price text-2xl font-extrabold'>{comma(totalPrice)}원</span>
          </div>
          <div>
            {/* 전체 동의, 구매조건 확인 및 결제 진행 동의 */}
            <div className='border p-4'>
              <div className='flex gap-2 pb-2'>
                <input type="checkbox" id="all-agree" 
                  ref={allAgreeRef}
                  checked={agreePayment && agreePolicy}
                  onChange={handleAllAgree}
                />
                <label className='text-xl font-bold' htmlFor="all-agree">전체 동의</label>
              </div>
              <div className='flex gap-2 pb-2'>
                <input type="checkbox" id="agree-payment" 
                  name="payment-agree"
                  ref={agreePaymentRef}
                  checked={agreePayment}
                  onChange={handleAgreement}
                />
                <label className='text-sm' htmlFor="agree-payment">구매조건 확인 및 진행 동의</label>
              </div>
              <div className='flex gap-2 pb-2'>
                <input type="checkbox" id="agree-policy" 
                  name="policy-agree"
                  ref={agreePolicyRef}
                  checked={agreePolicy}
                  onChange={handleAgreement}
                />
                <label className='text-sm' htmlFor="agree-policy">개인정보 제3자 제공 동의</label>
              </div>
              <button 
                onClick={OnClickHandler}
                className={`
                  w-full p-4 font-medium 
                  ${
                  agreePayment && agreePolicy ? "bg-yellow-300 text-black" : "bg-gray-400 text-gray-500" 
                  }`
                }
                >
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