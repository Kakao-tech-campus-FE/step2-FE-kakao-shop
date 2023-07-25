import { comma } from '../../utils/convert'
import Button from "../atoms/Button"
import {useMutation} from "react-query"
import { orderCart } from '../../services/order'
import { useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'

const OrderTemplate = ({data}) => {
  const {products, totalPrice} = data?.data?.response
  const navigate = useNavigate()
  const [allAgree, setAllAgree] = useState(false)
  const [agreePayment, setAgreePayment] = useState(false)
  const [agreePollcy, setAgreePollcy] = useState(false)
  const allAgreeRef = useRef(null)
  const agreePaymentRef = useRef(null)
  const agreePollcyRef = useRef(null)

  const handleAllAgree = (e)=>{
    const value = e.target.checked
    console.log(value)
    setAgreePayment(value)
    setAgreePollcy(value)

  }

  const handleAgree = (e)=>{
    const{name, checked} = e.target
    console.log(name, checked)
    if(name === 'payment-agree'){
      setAgreePayment(checked)
    } else if(name === 'pollcy-agree'){
      setAgreePollcy(checked)
    }

    if(!checked){
      setAllAgree(false)
    }
  }

  const {mutate} = useMutation({
    mutationKey: "orders",
    mutationFn: orderCart
  })

  const OrderItems = () =>{
    let renderComponent = []
    products.forEach((item)=>{
      renderComponent.push(item.carts.map((cart)=>{
        return <div key={cart.id} className='p-4 border-t'>
          <div className="product-name font-bold">
            <span>{`${item.productName} - ${cart.option.optionName}`}</span>
          </div>
          <div className="quantity">
            <span>{comma(cart.quantity)}개</span>
          </div>
          <div className="price font-bold">
            <span>{comma(cart.quantity * cart.price)}원</span>
          </div>
        </div>
      }))
    })
    return renderComponent
  }

  return (
    <div>
      <div className='mx-auto max-w-[1024px] w-[100%]'>
        <div className="border p-2">
          <h1 className='text-xl font-bold'>주문하기</h1>
        </div>
        <div className="border p-4">
          <h2 className='text-xl font-bold'>배송지 정보</h2>
        </div>
        <div className="border p-4">
          <div className='flex items-center gap-2'>
            홍길동
            <span className='text-blue-400 bg-blue-100 rounded-sm text-xs p-1'>기본 배송</span>
          </div>
        </div>
        <div className="border p-4">
          <span>010-1234-5678</span>
        </div>
        <div className="border p-4">
          <span>광주광역시 북구 전남대학교 공대 7호관</span>
        </div>
        <div className="border p-4">
          <h2>주문상품 정보</h2>
        </div>
        {/* 각 주문의 정보 */}
        <OrderItems/>
        {/* 총 주문 금액 */}
        <div className="border p-4 flex items-center justify-between">
          <h3 className='font-bold text-xl'>총 주문 금액</h3>
          <span className='price text-xl font-bold text-indigo-700'>{comma(totalPrice)}원</span>
        </div>
        {/* 동의 사항 */}
        <div className="flex flex-col p-4 gap-4">
          <div className="flex gap-2">
            <input 
              type="checkbox" 
              id='all-agree'
              ref={allAgreeRef}
              checked={agreePayment && agreePollcy}
              onChange={handleAllAgree}
            />
            <label htmlFor="all-agree" className='text-xl font-bold'>전체 동의</label>
          </div>
          <div className="flex gap-2">
            <input 
              type="checkbox" 
              id='agree'
              name='payment-agree'
              ref={agreePaymentRef}
              checked={agreePayment}
              onChange={handleAgree}
            />
            <label htmlFor="agree" className='text-xl'>
              구매조건 확인 및 결제 진행 동의
            </label>
          </div>
          <div className="flex gap-2">
            <input 
              type="checkbox" 
              id='policy'
              name='pollcy-agree'
              ref={agreePollcyRef}
              checked={agreePollcy}
              onChange={handleAgree}
            />
            <label htmlFor="policy" className='text-xl'>
              개인정보 제 3자 제공동의 
            </label>
          </div>
          {/* 결제하기 버튼 */}
          <Button 
            className={`
              w-full p-4 font-medium
              ${agreePayment && agreePollcy 
                ?"bg-yellow-500 text-black"
                :"bg-gray-300 text-gray-500"}`
            }
            
            onClick={()=>{
              if(agreePayment === false || agreePollcy === false){
                alert("모든 항목에 동의가 필요합니다.")
                return
              }

              mutate(null, {
                onError: ()=>{
                  alert("주문에 실패했습니다.")
                },
                onSuccess: (res)=>{
                  const id = res.data.response.id
                  alert("주문 완료 :)")
                  navigate(`/orders/${id}`)
                }
              })
            }}
          >
            결제하기
          </Button>
        </div>
      </div>
    </div>
  )
}

export default OrderTemplate