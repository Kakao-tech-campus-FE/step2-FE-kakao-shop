import React from 'react'
import Order from 'components/organisms/Order'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { getOrder } from 'api/order'

const path = process.env.REACT_APP_PATH || "";

const OrderPage = () => {

  const navigate = useNavigate()
  /** 장바구니 객체 get */ 
  const query = useQuery(
    ["getorder"],
    getOrder,
    {suspense: true,
    onSuccess: (res) => {
      if (res.totalPrice === 0) {
        alert('선택된 상품이 없습니다')
        navigate(path + '/cart')
      }
    }}
  )
  
  /** 임의 주문 정보 */
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
    <Order
      data={query.data} 
      userAddress={userAddress} 
      agreeList={agreeList}
      paymentList={payMethods} />
  )
}

export default OrderPage