import React from 'react'
import strPrice from '../../../utils/price'

const InfoPrice = (props) => {
  return (
    <div className='text-xl font-extrabold my-2'>
        {strPrice(props.children)}
    </div>
  )
}

export default InfoPrice