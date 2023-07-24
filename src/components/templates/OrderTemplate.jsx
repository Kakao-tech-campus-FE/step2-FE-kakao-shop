import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { getOrders } from 'api/order'

import Section from 'components/atoms/Section'
import SubmitButton from 'components/atoms/SubmitButton'
import MainContainer from 'components/atoms/MainContainer'

import AccordionBox from 'components/molecules/AccordionBox'
import CheckGroup from 'components/molecules/CheckGroup'
import RadioGroup from 'components/molecules/RadioGroup'

import OrderProducts from 'components/organisms/OrderProducts'
import OrderAddress from 'components/organisms/OrderAddress'
import OrderPayment from 'components/organisms/OrderPayment'

import useCheckbox from 'hooks/useCheckbox'
import strPrice from 'utils/price'


const OrderTemplate = () => {
  const query = useQuery(
    'getOrders',
    getOrders,
    { suspense : true }
  )

  const info = {
    username: "라이언",
    contact: "010-0000-0000",
    address1: "제주특별자치도 제주시 첨단로 242",
    address2: "1층 000호",
  }

  const agreeList = [
    {id:'agree1', title: '구매조건 확인 및 결제 진행 동의', detail: null},
    {id:'agree2', title: '개인정보 제3자 제공 동의', detail: '상세내용'}
  ]

  const [value, setValue] = useState(null)
  const [checkedSet, setCheckedSet, allChecked] = useCheckbox( agreeList )
  const [paymethod, setPaymethod] = useState(null)


  return (
    <MainContainer>
      <Section>
        <div className='mx-auto mb-4'>
          <h1 className='text-lg'>주문하기</h1>
        </div>
        <AccordionBox title='배송 정보' initialOpen={false}>
            <OrderAddress info={info} value={value} 
              onChange={(e) => setValue(prev=> e.target.value)}/>
        </AccordionBox>

        <AccordionBox title='주문상품 정보' initialOpen={false}>
            <OrderProducts products={query.data.products} />
        </AccordionBox>


        
        <div className='bg-yellow-300 p-4 text-[1rem] space-y-2'>
          <RadioGroup 
            id='kakaoPay' checked={paymethod === 'kakaoPay'} 
            onChange={()=> setPaymethod(prev => 'kakaoPay')} label='카카오페이 머니'
          />
          <RadioGroup 
            id='kakaoCard' checked={paymethod === 'kakaoCard'} 
            onChange={()=> setPaymethod(prev => 'kakaoCard')} label='카카오페이 카드'
          />
        </div>

        <AccordionBox 
          title={<div className='text-sm'>기타결제</div>} 
          initialOpen={false} 
        > 
          <RadioGroup 
            id='card' checked={paymethod === 'card'} 
            onChange={()=> setPaymethod(prev => 'card')} label='카드결제'
          />
          <RadioGroup 
            id='phone' checked={paymethod === 'phone'} 
            onChange={()=> setPaymethod(prev => 'phone')} label='휴대폰 결제'
          />
          <RadioGroup 
            id='bank' checked={paymethod === 'bank'} 
            onChange={()=> setPaymethod(prev => 'bank')} label='무통장 입금'
          />
        </AccordionBox>
        

        <AccordionBox 
          title={
            <CheckGroup 
              id='all' checked={allChecked} 
              onChange={setCheckedSet} label='전체 동의'
            />
          } 
          initialOpen={true} fixed={true} >

            {agreeList.map(item => (
              <CheckGroup 
                id={item.id} checked={checkedSet.has(item.id)} 
                onChange={setCheckedSet} label={item.title}
              />
            ))}
        </AccordionBox>
        
        <SubmitButton disabled={!allChecked || paymethod === null}>
          {strPrice(query.data.totalPrice)} 결제하기
        </SubmitButton>
      </Section>
    </MainContainer>
  )
}

export default OrderTemplate