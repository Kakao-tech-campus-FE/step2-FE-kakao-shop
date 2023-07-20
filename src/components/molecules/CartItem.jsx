import React from 'react'
import { comma } from '../../utils/convert'
import Card from '../atoms/Card'
import Counter from '../atoms/Counter'
import Box from '../atoms/Box'

// 각 상품별 장바구니 항목
// 여러 옵션이 저장될 수 있음
function CartItem({ item, onChange }) {
  return (
    <Box>
      <h5>{item.productName}</h5>
      {item.carts.map((cart) => (
        <Card 
          //옵션 아이디
          key={cart.id}> 
          <div>
            <span>{cart.option.optionName}</span>
          </div>
          <div>
            <Counter 
              onIncrease={(count) => {
                // onChange(아이디, 변경된 수량, 해당 옵션 상품의 가격)
                onChange(cart.id, count, cart.option.price)
              }}
              onDecrease={(count) => {
                onChange(cart.id, count, -cart.option.price)
              }}
            />
            <div>
              <span>{comma(cart.option.price * cart.quantity)}원</span>
            </div>
          </div>
        </Card>
      ))}
      <Card>
        <div>
          <h5>주문금액</h5>
          <div>
            {/* item.carts = 옵션들이 저장된 배열 */}
            {comma(
              item.carts.reduce((acc, cur) => {
                return acc + cur.option.price * cur.quantity
              }, 0)
            )}
            원
          </div>
        </div>
      </Card>
    </Box>
  )
}

export default CartItem