import React from 'react'
import Box from './Box'
import Card from './Card'
import Counter from './Counter'
import { comma } from '../../utils/convert'

// 각 상품별 장바구니 항목, 여러 옵션 저장 가능 
const CartItem = ({item, onChange}) => {
  return (
    <Box className='cart-item-box'>
      <h5 className='text-xl font-semibold px-5 py-4'>{item.productName}</h5>
      {item.carts.map((cart) => {
        return (
          <Card key={cart.id} className="cart">
            <div className='mx-4 border mb-2'>
              <div className='option-name mt-4'>
                <span className='font-semibold px-4'>{cart.option.optionName}</span>
              </div>
              <div className='my-4 px-4 flex justify-between'>
                <Counter
                  onIncrease={(count)=>{
                    // 옵션 아이디, 변경된 수량, 해당 옵션 상품의 가격 
                    onChange(cart.id, count, cart.option.price)
                  }}
                  onDecrease={(count)=>{
                    onChange(cart.id, count, -cart.option.price)
                  }}
                  quantity={cart.quantity}
                  optionId={cart.option.id}
                  className='flex justify-center'
                />
                <div className='price'>
                  <span>{comma(cart.option.price * cart.quantity)}원</span>
                </div>
              </div>
            </div>
          </Card>
        )
      })}
      <Card className="total-price">
        <div className='row border mx-4 flex justify-between mb-6 bg-white'>
          <h5 className='font-semibold my-4 px-4'>주문금액</h5>
          <div className='price my-4 px-4 font-semibold'>
            {/* item carts : 옵션들이 저장된 배열 */}
            {comma(
              item.carts.reduce((acc,cur)=>{
                return acc + cur.option.price * cur.quantity
              }, 0)
            )}원
          </div>
        </div>
      </Card>
    </Box>
  )
}

export default CartItem