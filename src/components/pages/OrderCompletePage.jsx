import React from 'react'
import OrderCompleteTemplate from '../templates/OrderCompleteTemplate'
import Loader from '../molecules/Loader'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getOrderFromId } from '../../services/order'

function OrderCompletePage() {
  //완료된 결제 정보를 불러오기
  const { id } = useParams()
  const { data, error, isError, isLoading } = useQuery(`/orders/${id}`, () => getOrderFromId(id))

  // 결제 정보를 불러오는 동안 로딩 화면을 보여주기
  if(isLoading)
    return <Loader/>
  else
    return <OrderCompleteTemplate data={data}/> 
}

export default OrderCompletePage