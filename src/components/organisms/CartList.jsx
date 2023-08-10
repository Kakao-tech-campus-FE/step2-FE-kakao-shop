import { useState, useEffect, useCallback } from 'react'
import Containor from '../atoms/Containor'
import { Router, useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query' 
import Box from '../atoms/Box'
import Card from '../atoms/Card'
import CartItem from '../molecules/CartItem'
import { updateCart } from '../../services/cart'
import { comma } from '../../utils/convert'
import Button from '../atoms/Button'
import LinkTo from '../atoms/LinkTo'

const staticServerUri = process.env.REACT_APP_PATH || "";

function CartList( {data, } ) {
  const route = useNavigate()
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [updataPayload, setUpdataPayload] = useState([]) // 렌더링에 관여 X


  const { mutate } = useMutation({
    mutationFn: updateCart,
  })

  useEffect(()=>{
    console.log("reloading")
    setCartItems(data?.data?.response?.products)
    setTotalPrice(data?.data?.response?.totalPrice)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  /** 
   * 옵션의 수량 변경과 가격 변경을 관리
   * @param {number} optionId
   * @param {number} quantity
   * @param {number} price
  */
  const handleOnChangeCount = (optionId, quantity, price) => {
    // 이 함수가 실행된 부분만 수량 변경이 생긴 것
    setUpdataPayload((prev) => {
      // 시간 날때, 최초의 옵션 수량 세팅에 따라서 수정api요청을 만드는
      // 경우도 생각해서 구현하자


      // 이전에 존재하는 옵션을 변경하는 경우
      const isExist = prev.find((item) => item.cartId === optionId)
      
      if(isExist){
        return [
          ...prev.filter((item) => item.cartId !== optionId),
          {
            cartId: optionId,
            quantity,
          }
        ]
      }

      return [
        ...prev,
        {
          cartId: optionId,
          quantity,
        }
      ]
    })
    setTotalPrice((prev) => prev + price)
    setCartItems((prev) => {
      return prev.map((item) => {
        return {
          ...item,
          carts: item.carts.map((cart) => {
            if (cart.id === optionId) {
              return { ...cart, quantity }
            }
            return cart
          })
        }
      })
    })
  }

  // 렌더링에 영향을 주는 함수는 useCallback을 사용
  // 의문점 useEffect안에 함수를 실행시키는 거랑 무엇이 다르지??
  const getTotalCartCountIncludeOption = useCallback(()=>{
    let count = 0
    cartItems.forEach((item) => {
      item.carts.forEach((cart) => {
        count += cart.quantity // 개별 옵션에 해당
      })
    })
    return count;
  }, [cartItems])

  function onClickHandler() {
      // update cart api
      // 장바구니 정보를 수정하는 api 호출(개수 변경이 있는 경우에)
      // post method

      //payload를 만드는 방법
      // 1번째 방법
      // 전체 장바구니 목록의 개수를 적절히 파싱해서 보내준다
    
      // 2번째 방법
      // 변경된 개수만 파싱해서 페이로드로 보내주기
      // payload 더 작게할 수 있으니까(좋음)

      mutate(updataPayload, {
        onSuccess: (data) => {

        },
        onError: (error) => {

       },
      })

      // navigate to order page
      // 주문 페이지로 이동


      // 결제 프로세스
      // 1. 장바구니에 있는 모든 항목 그대로 결제
      // 2. 결제 페이지에서는 수량 변경 X 그대로 결제 진행만 가능
    }
  

  return (
  <div className='w-full h-full bg-neutral-100'>
     <div className='w-[840px] h-full mx-auto my-0 text-center border-solid border-2 border border-neutral-100'>
      <div className='mt-[10px]'>
        <h1 className='py-[10px] font-semibold text-lg bg-white'>장바구니</h1>
      </div>
      <div className='overflow-y-auto  '>
        {/* 상품별 장바구니 */}
        {Array.isArray(cartItems) && 
          cartItems.map((item) => {
            return (
              <CartItem
                key={item.id}
                item={item}
                onChange={handleOnChangeCount}
              />
            )
          })
        }
      </div>


      <div className='bg-white '>
        <div className='py-[20px] mt-[15px] flex'>
          <div className='pl-[20px] font-bold text-lg'>주문 예상금액 </div>
          <div className='ml-auto pr-[20px] text-xl text-sky-500 font-bold'>{comma(totalPrice)}원</div>
        </div>
      </div>

      <LinkTo to={staticServerUri + '/order'}>
      <div className='bg-yellow-300 py-[20px]'>
        <Button onClick={onClickHandler}>
          <span className='font-bold text-xl'>총 {getTotalCartCountIncludeOption()}건 주문하기</span>
        </Button>
      </div>
      </LinkTo>
    </div>
  </div>
  
  )
}

export default CartList