import React, { useState } from 'react'

import SubmitButton from 'components/atoms/SubmitButton'
import AccordionBox from 'components/molecules/AccordionBox'
import CheckItem from 'components/molecules/CheckItem'
import OrderProducts from 'components/molecules/Order/OrderProducts'
import OrderAddress from 'components/molecules/Order/OrderAddress'
import RadioItem from 'components/molecules/RadioItem'

import useCheckbox from 'hooks/useCheckbox'
import useRadioBtn from 'hooks/useRadio'
import strPrice from 'utils/price'
import { saveOrder } from 'api/order'
import { useNavigate } from 'react-router-dom'
import useCartData from 'hooks/useCartData'

const path = process.env.REACT_APP_PATH || "";

const Order = ( { userAddress, agreeList, paymentList } ) => {

  const navigate = useNavigate()
  const query = useCartData()
  const [request, setRequest] = useState("")
  const [checkedSet, setCheckedSet, allChecked] = useCheckbox( agreeList )
  const [payment, radioOnChange] = useRadioBtn(null)

  /** 제출버튼 클릭 시 주문 요청 */
  const submitHandler = () => {
    saveOrder()
    .then((res) => {
      navigate(`${path}/order/${res.id}`)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
      <AccordionBox title='배송 정보' initialOpen>
        <OrderAddress info={userAddress} value={request} 
          onChange={(e) => setRequest(prev=> e.target.value)}/>
      </AccordionBox>

      <AccordionBox title='주문상품 정보' initialOpen>
        <OrderProducts data={query.data.products} />
      </AccordionBox>

      <KakaoBox>
        {paymentList.slice(0,2).map((item) => (
          <RadioItem 
            id={item.id} key={item.label} label={item.label}
            onChange={radioOnChange} checked={payment === item.id}
          />
        ))}
      </KakaoBox>

      <AccordionBox 
        title={<span className='text-sm'>기타결제</span>} 
        initialOpen={false} 
      > 
        {paymentList.slice(2,5).map((item) => (
          <RadioItem 
            id={item.id} key={item.label} label={item.label}
            onChange={radioOnChange} checked={payment === item.id}
          />
        ))}
      </AccordionBox>

      <AccordionBox 
        title={
          <CheckItem 
            id='all' checked={allChecked}
            onChange={setCheckedSet} label='전체 동의'
          />
        } 
        initialOpen fixed >

        {agreeList.map(item => (
          <CheckItem 
            id={item.id} key={item.title} label={item.title}  
            onChange={setCheckedSet} checked={checkedSet.has(item.id)}
          />
        ))}
      </AccordionBox>
      
      <SubmitButton onClick={submitHandler} 
        disabled={!allChecked || payment === null} 
        disabledColor='yellow'
      >
        {strPrice(query.data.totalPrice)} 결제하기
      </SubmitButton>
    </>
  )
}

export default Order

const KakaoBox = ( {children} ) => {
  return (
    <div className='bg-yellow-300 p-4 text-[1rem] space-y-2'>
        {children}
    </div>
  )
}
