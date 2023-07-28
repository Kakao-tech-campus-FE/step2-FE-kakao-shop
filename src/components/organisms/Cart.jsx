import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import Section from 'components/atoms/Section';
import SubmitButton from 'components/atoms/SubmitButton';
import PageTitleBox from 'components/atoms/PageTitleBox';
import TotalPrice from 'components/molecules/TotalPrice';
import OptionSelected from 'components/molecules/DetailPageOption/OptionSelected';
import { CartOptionBox, CartCollectionBox } from 'components/atoms/cart/';

import { getCarts, updateCart } from 'api/cart';


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
    navigate("/orders")
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
    <Section>

      <PageTitleBox title="장바구니"/>
      {
        query.data.products?.map((collection) => (
          productsQ[collection.id] > 0 &&

          <CartCollectionBox id={ collection.id }>
            <span className='font-bold m-2'> 
              {collection.productName} 
            </span>
            
            {collection.carts.map((optionItem) => (
              optionItem.quantity > 0 &&

                <CartOptionBox>
                  <OptionSelected 
                    optionId={optionItem.id}
                    key={optionItem.option.optionName} 
                    optionName={optionItem.option.optionName} 
                    price={optionItem.price}
                    quantity={optionItem.quantity}
                    changeQuantity={changeCart}
                    clear={() => {changeCart(optionItem.id, 0, true)}}
                  />
                </CartOptionBox> 

            ))}

          </CartCollectionBox> 
      ))}
      
      <TotalPrice 
        price={!query.isFetching ? query.data.totalPrice : "-"} 
        quantity={totalQ}
      />

      <SubmitButton onClick={submitHandler}> 
        주문하기 
      </SubmitButton>

    </Section>
  )
}

export default Cart
