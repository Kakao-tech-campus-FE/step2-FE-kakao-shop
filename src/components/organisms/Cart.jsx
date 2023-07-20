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
  const query = useQuery(
    ["getCarts"],
    getCarts,
    {suspense: true}
  )
  
  const navigate = useNavigate()
  const [cartObj, setCartObj] = useState([]);
    
  useEffect(()=> {
    console.log(query.data)
    if (query.data) {
      setCartObj(prev => query.data.products)
    }
  }, [query.data, setCartObj])
  

  const mutation = useMutation(
    updateCart, 
    {
      onSuccess: () => {
        query.refetch()
      },
    }
  );

  const changeCart = (id, q) => {
    if (q === 0) {
      return
    }
    if (q === -1) {
      q = 0
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
                    clear={() => {changeCart(optionItem.id, -1)}}
                    change={(event) => changeCart(optionItem.id, parseInt(event.target.value))}
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
