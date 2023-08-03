import { comma } from '../../utils/convert'
import Button from "../atoms/Button"
import {useMutation} from "react-query"
import { orderCart } from '../../services/order'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { getCart } from '../../services/cart'
import OrderItems from '../atoms/OrderItems'

const OrderTemplate = () => {
  const navigate = useNavigate()
  const {data} = useQuery("carts", 
    getCart,
    {
      onError: (error) => {
        console.error("Error fetching cart data:", error);
        navigate('/404')
      },
      suspense: true
    }
  )
  const {totalPrice} = data?.data?.response
  const [agreePayment, setAgreePayment] = useState(false)
  const [agreePollcy, setAgreePollcy] = useState(false)

  const handleAllAgree = (e)=>{
    const value = e.target.checked
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
  }

  const {mutate} = useMutation({
    mutationKey: "orders",
    mutationFn: orderCart
  })

  return (
    <div className='bg-gray-100 py-5'>
      <div className='mx-auto max-w-[1024px] w-[100%]'>
        <div className="p-2 border bg-white">
          <h1 className='text-xl font-bold text-center'>주문하기</h1>
        </div>
        <div className="mt-1 p-4 border bg-white">
          <h1 className='text-xl font-bold'>배송지 정보</h1>
        </div>
        <div className="p-4 border bg-white">
          <div className='flex items-center gap-2'>
            문지혜
            <span className='text-blue-400 bg-blue-100 rounded-md text-xs p-1'>기본 배송</span>
          </div>
        </div>
        <div className="p-4 border bg-white">
          <span>010-1234-5678</span>
        </div>
        <div className="p-4 border bg-white">
          <span>광주광역시 북구 전남대학교 공대 7호관</span>
        </div>
        <div className="border p-4 bg-white mt-2 text-xl font-bold">
          <h2>주문상품 정보</h2>
        </div>
        {/* 각 주문의 정보 */}
        <OrderItems/>
        <div className="border p-4 bg-white flex justify-center">
          <span className='text-blue-500'>무료배송</span>
        </div>
        {/* 총 주문 금액 */}
        <div className="border mt-2 p-4 bg-white flex items-center justify-between">
          <h3 className='font-bold text-xl'>총 주문 금액</h3>
          <span className='price text-xl font-bold text-blue-600'>{comma(totalPrice)}원</span>
        </div>
        {/* 동의 사항 */}
        <div className="flex flex-col border p-4 gap-4 bg-white">
          <div className="flex gap-2">
            <input 
              type="checkbox" 
              id='all-agree'
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
              w-full p-4 rounded-sm shadow-sm
              ${agreePayment && agreePollcy 
                ?"bg-yellow-300 text-black hover:bg-yellow-400 font-semibold"
                :"bg-gray-300 text-gray-500"}`
            }
            
            onClick={()=>{
              if(!agreePayment || !agreePollcy){
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