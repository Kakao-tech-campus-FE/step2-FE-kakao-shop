import React from 'react'
import strPrice from 'utils/price'

const TotalPrice = (props) => {
  return (
    <div className='flex flex-row items-center'>
        <span>{` 총 수량 ${props.quantity ? props.quantity : 0} 개`}</span>
        <span className='ml-auto'> 총 주문 금액</span>
        <span className='ml-2
                        text-lg
                        text-orange-600 
                        font-extrabold 
        '>
            {props.price}
        </span>
    
    </div>
  )
}

export default TotalPrice