import { Suspense } from 'react'
import { useQuery } from 'react-query'
import OrderTemplate from '../templates/OrderTemplate'
import { getCart } from '../../services/cart'
import Loader from '../molecules/Loader'

function OrderPage() {
  // 사용자의 장바구니 목록을 조회해서 보여주는 것
  const { data, error, isLoading } = useQuery("cart", getCart)

  return (
    // <Suspense fallback={<Loader />}>
    //   <OrderTemplate data={data} />
    // </Suspense>  
    isLoading ? <Loader /> : <OrderTemplate data={data} />
  )
}

export default OrderPage