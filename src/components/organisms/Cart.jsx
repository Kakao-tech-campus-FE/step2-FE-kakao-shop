import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../atoms/SubmitButton';
import CartContainer from 'components/atoms/cart/CartContainer';
import { useQuery, useMutation } from 'react-query';
import getCarts from 'api/getCarts';
import TotalPrice from 'components/atoms/option/TotalPrice';
import strPrice from 'utils/price';
import OptionSelected from 'components/molecules/OptionSelected';
import updateCart from 'api/updateCart';
import postOrder from 'api/postOrder';
import CartOptionBox from 'components/atoms/cart/CartOptionBox';
import CartCollectionBox from 'components/atoms/cart/CartCollectionBox';


const Cart = () => {
  const navigate = useNavigate()

  /** 장바구니 객체 get */ 
  const query = useQuery(
    ["getCarts"],
    getCarts,
    {suspense: true}
  )
  
  const mutation = useMutation(
    updateCart, 
    { onSuccess: () => query.refetch() }
  );
  
  /**
   * 장바구니 업데이트
   * @param {number} id - cartId
   * @param {int} q - 바뀐 후 수량 
   * @param {boolean} clear - 삭제버튼 클릭 여부 
   * @returns 
   */
  const changeCart = (id, q, clear=false) => {
    if (q === 0 && !clear) return;
    mutation.mutate( [ {cartId: id, quantity: q} ] )
    console.log("update data", [ {cartId: id, quantity: q} ])
  }

  /** 제출버튼 클릭 시 주문 요청 */
  const submitHandler = () => {
    postOrder()
    .then((res) => {
      console.log(res)
      navigate("/orders")
    })
  }

  /** 모음전 별 총 수량 { 모음전_id : 모음전_총_수량 } */
  const [productsQ, setProductsQ] = useState({})
  /** 장바구니 내부의 총 수량 */
  const [totalQ, setTotalQ] = useState(0)

  useEffect(()=> {
    const newProductsQ = { ...productsQ }
    let total = 0;

    for (const product of query.data.products) {
      let q = 0;
      for (const option of product.carts) {
        q += option.quantity
      }
      newProductsQ[product.id] = q 
      total += q
    }

    setProductsQ(prev => newProductsQ)
    setTotalQ(prev => total)
  }, [query.data.products])
  

  return (
    <CartContainer>

      {
        query.data.products?.map((collection) => {
          if (productsQ[collection.id] === 0) {return null}
          return (
          <CartCollectionBox id={ collection.id }>
              <span className='font-bold m-2'> 
                {collection.productName} 
              </span>
              
              {collection.carts.map((optionItem) => (
                optionItem.quantity === 0 
                ? null 
                : <CartOptionBox>
                    <OptionSelected 
                      optionId={optionItem.id}
                      key={optionItem.option.optionName} 
                      optionName={optionItem.option.optionName} 
                      price={strPrice(optionItem.price)}
                      quantity={optionItem.quantity}
                      changeQuantity={changeCart}
                      clear={() => {changeCart(optionItem.id, 0, true)}}
                    />
                  </CartOptionBox> 
                ))
              }

          </CartCollectionBox> )
        })
      }
      
      <TotalPrice 
          price={!query.isFetching ? strPrice(query.data.totalPrice) : "- 원"} 
          quantity={totalQ}
      />

      <SubmitButton onClick={submitHandler}> 
        주문하기 
      </SubmitButton>

    </CartContainer>
  )
}

export default Cart
