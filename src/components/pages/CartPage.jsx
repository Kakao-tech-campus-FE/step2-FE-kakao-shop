import React, { Suspense } from 'react'
import { useQuery } from 'react-query'
import Loader from '../molecules/Loader'
import { getCart } from '../../services/cart'
import CartList from '../organisms/CartList'

function CartPage() {
  const { data, isLoading, error, isError } = useQuery("cart", getCart)
  //  장바구니에 상품을 추가하고 장바구니 아이콘을 눌러 장바구니 페이지에 들어오면
  //  바로 데이터가 불러 왔으면 좋겠는데, 새로고침을 해야 데이터를 새로 불러와 반영이 됩니다. 
  //  해결해야하는 방법을 알려주세요!

  return (
      isLoading ? <Loader/> : isError ? <>{error?.data?.error?.message}</> : <CartList data={data} />
  )
}

export default CartPage