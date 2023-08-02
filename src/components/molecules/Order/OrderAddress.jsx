import React from 'react'

const OrderAddress = (props) => {
  
  return (
    <>
      <div>
        <div>{props.info.username}</div>
        <div>{props.info.contact}</div>
        <div>{props.info.address1}</div>
        <div>{props.info.address2}</div>
      </div>
      
      <input 
        className='border border-solid border-gray-400 w-[80%] mt-3' 
        type="text" placeholder='요청사항을 입력해주세요' 
        value={props.value || ""} onChange={props.onChange}
      />
    </>
  )
}

export default OrderAddress