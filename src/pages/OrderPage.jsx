import React from 'react'
import OrderTemplate from 'components/templates/OrderTemplate'
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query'
import { getOrders } from 'api/order'

const OrderPage = () => {
  const location = useLocation();
  const orderId = location.state.orderId ? location.state.orderId : localStorage.getItem("orderId")
  
  const query = useQuery(
    'getOrders',
    () => getOrders(orderId),
    { suspense : true }
  )

  const userAddress = {
    username: "라이언",
    contact: "010-0000-0000",
    address1: "제주특별자치도 제주시 첨단로 242",
    address2: "1층 000호",
  }

  const agreeList = [
    {id:'agree1', title: '구매조건 확인 및 결제 진행 동의', detail: null},
    {id:'agree2', title: '개인정보 제3자 제공 동의', detail: '상세내용'}
  ]
  
  const payMethods = [
    {id: 'kakaoPay', label: '카카오페이 머니'},
    {id: 'kakaoCard', label: '카카오페이 카드'},
    {id: 'card', label: '카드결제'},
    {id: 'phone', label: '휴대폰 결제'},
    {id: 'bank', label: '무통장 입금'},
  ]

  return (
    <OrderTemplate 
      orderId={orderId} 
      query={query} 
      userAddress={userAddress} 
      agreeList={agreeList}
      paymentList={payMethods} />
  )
}

export default OrderPage