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
  const {data: obj, isError, error, isFetching, refetch} = useQuery(
    ["getCarts"],
    getCarts,
    {suspense: true}
  )
  
  const navigate = useNavigate()
  const [cartObj, setCartObj] = useState([]);
  const [buylist, setBuylist] = useState([]);
    
  useEffect(()=> {
    if (obj) {
      setCartObj(prev => obj.data.response.products)
    }
  }, [obj, setCartObj])
  

  const mutation = useMutation(
    updateCart, 
    {
      onMutate: (variables) => { 
        /* 요청 직전 처리, 여기서 반환하는 값은 하단 함수들의 context로 사용됨 */
      },
      onError: (error, variables, context) => {
        /* 오류 발생 시 처리 */
      },
      onSuccess: (data, variables, context) => {
        refetch()
        /* 성공 시 처리 */
      },
      onSettled: (data, error, variables, context) => {
        /* 성공 여부와 관계없이 작업이 끝나면 처리 */
      }
    }
  );

  const changeCart = (id, q) => {
    if (q <= 0) {
      return
    }
    const updateList = []
    for (const item of cartObj) {
      for (const option of item.carts) {
        if (option.id === id) {
          updateList.push({cartId: id, quantity: q})
        }
      }
    }
    mutation.mutate(updateList)
  }

  return (
    <CartContainer>

      {
        cartObj?.map((item, i)=>(
          <CheckGroup
            state={ cartObj }
            setState={ setCartObj }
            index={ i }
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
                    sub={() => {changeCart(optionItem.id, optionItem.quantity - 1)}}
                    add={() => {changeCart(optionItem.id, optionItem.quantity + 1)}}
                    clear={() => {changeCart(optionItem.id, 0)}}
                    change={(event) => changeCart(optionItem.id, parseInt(event.target.value))}
                  />
                </div> ))
              }
            </div>
            
          </CheckGroup>
        ))
      }
      
      <TotalPrice price={strPrice(obj.data.response.totalPrice)}></TotalPrice>
      <SubmitButton> 
        주문하기 
      </SubmitButton>

    </CartContainer>
  )
}

export default Cart
