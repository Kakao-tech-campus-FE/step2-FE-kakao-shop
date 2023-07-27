import React from 'react'
import OrderTemplate from '../components/templates/OrderTemplate'
import { Suspense } from 'react'
import { useQuery } from 'react-query'
import { getCart } from '../services/cart'
import Loader from '../components/atoms/Loader'
import { useNavigate } from 'react-router-dom'

const OrderPage = () => {
  const navigate = useNavigate()
  const {data} = useQuery("carts", 
    getCart,
    {
      onError: (error) => {
        console.error("Error fetching cart data:", error);
        navigate('/product/404')
      },
      suspense: true
    }
  )

  return (
    <Suspense fallback={<Loader/>}>
      <OrderTemplate data={data}/>
    </Suspense>
  )
}


export default OrderPage