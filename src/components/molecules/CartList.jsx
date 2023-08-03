import React, { useCallback, useEffect, useState} from 'react'
import Box from "../atoms/Box"
import Card from "../atoms/Card"
import CartItem from '../atoms/CartItem'
import { comma } from '../../utils/convert'
import Button from '../atoms/Button'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { updateCart } from '../../services/cart'
import { getCart } from '../../services/cart'
import { useQuery } from 'react-query'
import EmptyCartPage from '../../pages/EmptyCartPage'

const CartList = () => {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [updatePayload, setUpdatePayload] = useState([])
  const {data, error} = useQuery("carts", 
    getCart,
    {suspense: true}
  )
  
  const {mutate} = useMutation({
    mutationFn: updateCart 
  })
  
  useEffect(() => {
    if (error) {
      navigate('/404')
    }
  }, [error, navigate]);
  
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
    cartItems.forEach((item) => {
      item.carts.forEach((cart) => {
        count += cart.quantity //개별옵션 
      })
    })
    return comma(count) 
  },[cartItems])

  if(data.data.response.products.length===0){
    return <EmptyCartPage/>
  }
  return (
    <div className="bg-gray-100 py-5">
      <div className="max-w-[1024px] w-[100%] mx-auto" >
        <Box className='text-xl font-bold text-center border bg-white py-2'>
          <h1>장바구니</h1>
        </Box>
        <Box className='bg-white my-1 py-1 border'>
          {/* 상품별 장바구니 */}
          {cartItems.map((item)=>{
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
          <div className='bg-white border p-4'>
            <div className='flex justify-between mb-3 font-bold text-xl'>
              <span className='expect-price'>주문 예상금액</span>
              <span className='sum-price text-blue-500'>{comma(totalPrice)}원</span>
            </div>
            <Button
              className="btn-order p-4 w-full font-bold"
              onClick={()=>{
                //update cart : 장바구니 정보 수정 
                mutate(updatePayload, {
                  onSuccess: (data) =>{
                    //navigate to order page 
                    navigate("/orders")
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
        </Card>
      </div>

    </div>
  )
}

export default CartList