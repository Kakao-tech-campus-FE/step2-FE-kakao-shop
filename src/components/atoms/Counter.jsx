import { useState, } from 'react'

function Counter({ 
  initialCount,
  onIncrease, // 수량 증가 함수
  onDecrease, //수량 감소 함수
}) {

  const  handleOnIncrease =  () => {
      onIncrease(initialCount + 1)
    }
  

  const handleOnDecrease = () => {
    if(initialCount<1){
      alert("상품을 0개 미만으로 담을 수 없습니다!")
      return;
    }
    onDecrease(initialCount - 1)
  }

  return (
    <div className='border border-solid border-slate-400 rounded'>
      <button className='w-[29px] h-[26px] bg-white border border-solid border-r-solid-300 rounded' onClick={handleOnDecrease}>-</button>
      <div className='inline-block w-[50px] h-[26px] bg-white text-center align-top leading-[26px] 
      '>{initialCount}</div>
      <button className='w-[29px] h-[26px] bg-white border border-solid border-l-solid-300 rounded' onClick={handleOnIncrease}>+</button>
    </div>
    )
  }


export default Counter