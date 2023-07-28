import React, { Suspense, useEffect} from 'react'
import { useQuery } from 'react-query'
import Loader from "../components/atoms/Loader"
import CartList from '../components/molecules/CartList'
import { getCart } from '../services/cart'
import { useNavigate } from 'react-router-dom'

const CartPage = () => {
  const navigate = useNavigate()
  const {data, error} = useQuery("carts", 
    getCart,
    {
      suspense: true
    }
  )
  
  useEffect(() => {
    if (error) {
      navigate('/404')
    }
  }, [error, navigate]);

  return (
    <Suspense fallback={<Loader/>}>
      <CartList data={data}/>
    </Suspense>
  )
}

export default CartPage