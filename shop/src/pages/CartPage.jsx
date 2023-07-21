import React, { Suspense,useEffect } from 'react'
import { useQuery } from 'react-query'
import Loader from "../components/atoms/Loader"
import CartList from '../components/molecules/CartList'
import { getCart } from '../services/cart'

const CartPage = () => {
  const {data, refetch} = useQuery("carts", 
    getCart,
    {
      onError: (error) => {
        console.error("Error fetching cart data:", error);
      },
    }
  )

  useEffect(()=>{  
    if(data===undefined){
      refetch()
    }
    console.log('data')
    console.log(data)
  },[data])


  return (
    <Suspense fallback={<Loader/>}>
      <CartList data={data}/>
    </Suspense>
  )
}

export default CartPage