import React from 'react'
import strPrice from 'utils/price'

const TotalPrice = (props) => {
  return (
    <div className='flex'>
        <div className='flex space-x-1 items-center'>
          <div>총 수량</div>
          <div className='min-w-[0.4rem]'>{props.quantity}</div>
          <div>개</div>
        </div>

        <div className='flex space-x-2 ml-auto items-center'>
          <div>총 주문 금액</div>
          <div className='min-w-[5rem] ml-2
                        text-lg text-right
                        text-orange-600 
                        font-extrabold 
          '>
            {strPrice(props.price)}
          </div>
        </div>

    </div>
  )
}

export default TotalPrice