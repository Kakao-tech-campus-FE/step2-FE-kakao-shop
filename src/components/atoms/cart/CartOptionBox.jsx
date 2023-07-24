import React from 'react'

const CartOptionBox = (props) => {
  return (
    <div className="flex flex-col border border-solid border-gray-300 m-2 p-3">
        {props.children}
    </div>
  )
}

export default CartOptionBox