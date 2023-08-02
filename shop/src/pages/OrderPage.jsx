import OrderTemplate from '../components/templates/OrderTemplate'
import { Suspense } from 'react'
import Loader from '../components/atoms/Loader'


const OrderPage = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <OrderTemplate/>
    </Suspense>
  )
}


export default OrderPage