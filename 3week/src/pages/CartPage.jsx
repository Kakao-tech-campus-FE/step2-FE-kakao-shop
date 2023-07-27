import { useNavigate } from "react-router-dom"
import CartList from "../components/molecules/CartList"
import { Suspense, useEffect, useState } from "react"
import { getCart } from "../apis/cart"
import React from "react"
import { useQuery } from "react-query"
import Loader from "../components/atoms/Loader"

const CartPage = () => {
  const { data } = useQuery("cart", getCart)
  return (
    <Suspense fallback={<Loader />}>
      <CartList data={data} />
    </Suspense>
  )
}

export default CartPage