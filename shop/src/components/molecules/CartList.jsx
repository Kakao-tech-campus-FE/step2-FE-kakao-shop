import React, { useCallback, useEffect, useState, useRef } from 'react'
import Container from "../atoms/Container"
import Box from "../atoms/Box"
import Card from "../atoms/Card"
import CartItem from '../atoms/CartItem'
import { comma } from '../../utils/convert'
import Button from '../atoms/Button'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { orderCart, updateCart } from '../../services/cart'

const CartList = ({data}) => {
  // console.log('dataddd')
  // console.log(data)
  const route = useNavigate()
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [updatePayload, setUpdatePayload] = useState([])

  const {mutate} = useMutation({
    mutationFn: updateCart 
  })

  useEffect(()=>{
    setCartItems(data?.data?.response?.products)
    setTotalPrice(data?.data?.response?.totalPrice)
  },[data])

/**
 * 옵션의 수량 변경과 가격 변경을 관리 
 * @param {number} optionId :옵션 아이디
 * @param {number} quantity :옵션 수량
 * @param {number} price :옵션 금액  
 */
  const handleOnChangeCount = (optionId, quantity, price) =>{
    setUpdatePayload((prev)=>{
      const isExist = prev.find((item)=> item.cartId === optionId)
      if (isExist){
        return [
          ...prev.filter((item)=> item.cartId !== optionId),
          {
            cartId: optionId,
            quantity
          }
        ]
      }
      return [
        ...prev,
        {
          cartId: optionId,
          quantity
        }
      ]
    })
    setTotalPrice((prev => prev + price))
    setCartItems((prev)=>{
      return prev.map((item)=>{
        return{
          ...item,
          carts: item.carts.map((cart) => {
            if(cart.id === optionId){
              return {...cart, quantity}
            }
            return cart
          })
        }
      })
    })
  }

  // cartItem의 수량이 변경될 때만 실행 
  const getTotalOrder = useCallback(() =>{
    let count = 0
    cartItems.map((item) => {
      item.carts.map((cart) => {
        count += cart.quantity //개별옵션 
      })
    })
    return comma(count) 
  },[cartItems])

  return (
    <Container className="my-20 shadow bg-gray-100 py-2 flex justify-center mx-auto" >
      <div className="w-full">
      <Box className='text-2xl font-semibold text-center bg-white py-2 mx-1'>
        <h1>장바구니</h1>
      </Box>
      <Box className='bg-white mx-1 my-1 py-1'>
        {/* 상품별 장바구니 */}
        {Array.isArray(cartItems)&&
          cartItems.map((item)=>{
            console.log('item')
            console.log(item)
            return (
              <CartItem
                key={item.id}
                item={item}
                onChange={handleOnChangeCount} // 개수 변화 
              />
            )
          })
        }
      </Box>
      <Card>
        <div className='bg-white flex justify-between mx-1 font-bold text-xl px-4 py-4'>
          <span className='expect-price'>주문 예상금액</span>
          <span className='sum-price text-blue-500'>{comma(totalPrice)}원</span>
        </div>
      </Card>
      <Button
        className="btn-order py-4 mr-2 w-full"
        onClick={()=>{
          //update cart : 장바구니 정보 수정 
          mutate(updatePayload, {
            onSuccess: (data) =>{
              //navigate to order page 
              route("/order")
              console.log(data)
            },
            onError: (err)=> {
              console.log(err)
            }
          })
        }}
      >
        <span>{getTotalOrder()}건 주문하기 </span>
      </Button>
      </div>
    </Container>
  )
}

export default CartList