import React, { useState } from 'react'

import Section from 'components/atoms/Section'
import SubmitButton from 'components/atoms/SubmitButton'
import AccordionBox from 'components/molecules/AccordionBox'
import CheckItem from 'components/molecules/CheckItem'
import OrderProducts from 'components/molecules/Order/OrderProducts'
import OrderAddress from 'components/molecules/Order/OrderAddress'
import RadioGroup from 'components/molecules/RadioGroup'

import useCheckbox from 'hooks/useCheckbox'
import strPrice from 'utils/price'
import PageTitleBox from 'components/atoms/PageTitleBox'


const Order = ( { query, userAddress, agreeList, paymentList } ) => {

  const [value, setValue] = useState(null)
  const [checkedSet, setCheckedSet, allChecked] = useCheckbox( agreeList )
  const [payment, setPayment] = useState(null)

  const radioOnChange = (event) => {
    setPayment(prev => event.target.id)
  }

  return (
    <Section>
      <PageTitleBox title="주문하기"/>
      <AccordionBox title='배송 정보' initialOpen={false}>
        <OrderAddress info={userAddress} value={value} 
          onChange={(e) => setValue(prev=> e.target.value)}/>
      </AccordionBox>

      <AccordionBox title='주문상품 정보' initialOpen={false}>
        <OrderProducts products={query.data.products} />
      </AccordionBox>

      <KakaoBox>
        <RadioGroup itemList={paymentList.slice(0,2)} state={payment} onChange={radioOnChange}/>
      </KakaoBox>

      <AccordionBox 
        title={<span className='text-sm'>기타결제</span>} 
        initialOpen={false} 
      > 
        <RadioGroup itemList={paymentList.slice(2,5)} state={payment} onChange={radioOnChange}/>
      </AccordionBox>

      <AccordionBox 
        title={
          <CheckItem 
            id='all' checked={allChecked} 
            onChange={setCheckedSet} label='전체 동의'
          />
        } 
        initialOpen={true} fixed={true} >

          {agreeList.map(item => (
            <CheckItem 
              id={item.id} checked={checkedSet.has(item.id)} 
              onChange={setCheckedSet} label={item.title}
            />
          ))}
      </AccordionBox>
      
      <SubmitButton disabled={!allChecked || payment === null}>
        {strPrice(query.data.totalPrice)} 결제하기
      </SubmitButton>
    </Section>
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