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
import postOrder from 'api/postOrder';


const Cart = () => {
  const navigate = useNavigate()

  /** 장바구니 리스트 get */ 
  const query = useQuery(
    ["getCarts"],
    getCarts,
    {suspense: true}
  )
  
  /** 장바구니 리스트에서 수량 0인거 빼고 구조 쉽게 */ 
  const makeDataEasy = (original) => {
    let q = 0
    const newList = []
    for (const item of original) {
      const optionsList = []
      for (const optionItem of item.carts) {
        if (optionItem.quantity === 0) {continue}

        optionsList.push({
          cartId: optionItem.id, 
          quantity: optionItem.quantity,
          optionPrice: optionItem.price,
          optionName: optionItem.option.optionName, 
        })
        q += optionItem.quantity
      }
      
      if (optionsList.length === 0) {continue}
      newList.push( {productId: item.id, productName: item.productName, options: optionsList} ) 
    }
    return {data:newList, quantity:q}
  }

  /** 구조 쉽게 만들고 수량 0 빼서 실제로 컴포넌트 관리할때 쓸 데이터 */
  const [easyData, setEasyData] = useState(makeDataEasy(query.data.products).data)
  /** 총 주문 수량 */
  const [totalQ, setTotalQ] = useState(makeDataEasy(query.data.products).quantity)

  useEffect(()=> {
    setEasyData(prev => makeDataEasy(query.data.products).data)
    setTotalQ(prev => makeDataEasy(query.data.products).quantity)
  }, [query.data.products])

  /** 수량 변경 요청 mutation, 보내면 장바구니 데이터를 다시 불러옴 */
  const mutation = useMutation(
    updateCart, 
    { onSuccess: () => query.refetch() }
  );
  
  /** 수량 변경시 변경 요청 보내기 */
  const changeCart = (cartId, q, clear=false) => {
    if (q === 0 && !clear) return;
    mutation.mutate( [ {cartId: cartId, quantity: q} ] )
    console.log("update data", [ {cartId: cartId, quantity: q} ])
  }

  /** 주문하기 */
  const submitHandler = () => {
    postOrder()
    .then((res) => {
      console.log(res)
      navigate("/orders")
    })
  }

  return (
    <CartContainer>

      {
        easyData?.map((item)=> (
          <CheckGroup key={ item.productName } id={ item.id }>
            <div className='flex flex-col w-full'>
            
              <span className='font-bold m-2'> 
                {item.productName} 
              </span>
              
              {item.options.map((optionItem) => (
                <div className="flex flex-col border border-solid border-gray-300 m-2 p-3">
                  <OptionSelected 
                    optionId={optionItem.cartId}
                    key={optionItem.optionName} 
                    optionName={optionItem.optionName} 
                    price={strPrice(optionItem.optionPrice)}
                    quantity={optionItem.quantity}
                    changeQuantity={changeCart}
                    clear={() => {changeCart(optionItem.cartId, 0, true)}}
                  />
                </div>
              ))}
            </div>
            
          </CheckGroup> 
        ))
      }
      
      <TotalPrice 
        price={strPrice(query.data.totalPrice)} 
        quantity={totalQ}
      />

      <SubmitButton onClick={submitHandler}> 
        주문하기 
      </SubmitButton>

    </CartContainer>
  )
}

export default Cart
