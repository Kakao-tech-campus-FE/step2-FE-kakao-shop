import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../atoms/SubmitButton';
import CheckGroup from '../molecules/CheckGroup';
import CartContainer from 'components/atoms/cart/CartContainer';
import { useQuery, useMutation } from 'react-query';
import getCarts from 'api/getCarts';
import TotalPrice from 'components/atoms/option/TotalPrice';
import strPrice from 'utils/price';
import OptionSelected from 'components/molecules/OptionSelected';
import updateCart from 'api/updateCart';


const Cart = () => {

  // 장바구니 객체 get
  const query = useQuery(
    ["getCarts"],
    getCarts,
    {suspense: true}
  )
  
  const navigate = useNavigate()
  // const [cartObj, setCartObj] = useState([]);
  
  // 장바구니 객체 get 할때마다 상태에 저장
  // useEffect(()=> {
  //   console.log("query.data.products", query.data.products)
  //   if (query.data) {
  //     setCartObj(prev => query.data.products)
  //   }
  // }, [query.data])
  

  const mutation = useMutation(
    updateCart, 
    {
      onSuccess: (data, variables, context) => {
        query.refetch()
      },
    }
  );
  
  const useChange = (initial, after) => {
    const [state, setState] = useState(initial)
    if (after !== initial) {
      setState(prev => after)
    }
  }
  // onClick, onChange 이벤트 : 장바구니 업데이트
  // 장바구니 객체 돌면서 > cartID를 찾기 > 형식에 맞춰서 > mutation 요청 보내기
  const changeCart = (id, q) => {
    
    if (q === 0) {
      return
    }
    if (q === -1) {
      q = 0
    }

    // 장바구니 get 객체 돌면서 cartID를 찾기
    for (const item of query.data.products) {
      for (const option of item.carts) {
        if (option.id === id) {
          // 형식에 맞춰서 요청 보내기
          mutation.mutate( [ {cartId: id, quantity: q} ] )
          console.log("update data", [ {cartId: id, quantity: q} ])
          break
        }
      }
    }
  }

  return (
    <CartContainer>

      {
        query.data.products?.map((item, i)=>(
          <CheckGroup
            key={ item.productName }
          >
            <div className='flex flex-col w-full'>
            
              <span className='font-bold m-2'> 
                {item.productName} 
              </span>
              
              {item.carts.map((optionItem, j) => (
                <div className="flex flex-col border border-solid border-gray-300 m-2 p-3">
                  <OptionSelected 
                    optionId={optionItem.id}
                    key={optionItem.option.optionName} 
                    optionName={optionItem.option.optionName} 
                    price={strPrice(optionItem.price)}
                    quantity={optionItem.quantity}
                    changeQuantity={changeCart}
                    clear={() => {changeCart(optionItem.id, -1)}}
                  />
                </div> ))
              }
            </div>
            
          </CheckGroup>
        ))
      }
      
      <TotalPrice price={strPrice(query.data.totalPrice)}></TotalPrice>
      <SubmitButton> 
        주문하기 
      </SubmitButton>

    </CartContainer>
  )
}

export default Cart
