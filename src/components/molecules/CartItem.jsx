import React from 'react'
import { comma } from '../../utils/convert'
import Card from '../atoms/Card'
import Counter from '../atoms/Counter'
import Box from '../atoms/Box'

// 각 상품별 장바구니 항목
// 여러 옵션이 저장될 수 있음
function CartItem({item, onChange }) {
  return (
    <div className='relative w-[840px] h-auto mx-auto mt-[10px] bg-white'>
      <h5 className='font-bold text-lg text-left pl-[30px] py-[10px] text-left'>{item.productName}</h5>
      {item.carts.map((cart) => {
        return (
        <div className='text-left pl-[30px] border-solid border border-slate-200 py-[15px] ' 
          //옵션 아이디
          key={cart.id}> 
          <div>
            <span className='text-lg'>{cart.option.optionName}</span>
          </div>
          <div className='flex text-base mt-[20px]'>
            <Counter 
              initialCount={cart.quantity}
              onIncrease={(count) => {
                // onChange(아이디, 변경된 수량, 해당 옵션 상품의 가격)
                onChange(cart.id, count, cart.option.price)
              }}
              onDecrease={(count) => {
                onChange(cart.id, count, -cart.option.price)
              }}
            />
            <div className='font-semibold ml-auto mr-[20px]'>{cart.option.price * cart.quantity}원</div>
          </div>
        </div>
      )})}
      <Card>
        <div className='mt-[20px]'>
          <h5 className='text-xl font-semibold'>주문금액 {/* item.carts = 옵션들이 저장된 배열 */}
            {comma(
              item.carts.reduce((acc, cur) => {
                return acc + cur.option.price * cur.quantity
              }, 0)
            )}
            원</h5>      
        </div>
      </Card>
    </div>
  )
}

export default CartItem