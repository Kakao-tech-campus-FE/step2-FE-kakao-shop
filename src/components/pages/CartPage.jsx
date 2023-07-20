import React, { Suspense } from 'react'
import { useQuery } from 'react-query'
import Loader from '../molecules/Loader'
import { getCart } from '../../services/cart'
import CartList from '../organisms/CartList'

function CartPage() {
  const { data, isLoading } = useQuery("cart", getCart)
  // data.data.response = {
  //   products,
  //   totalPrice
  // Suspense 사용을 위해 data를 넘겼다.}

  return (
    /* <Suspense fallback={<Loader/>}>
      <CartList data={data} />
    </Suspense> */

    isLoading ? <Loader/> : <CartList data={data} />
  )
}

export default CartPage