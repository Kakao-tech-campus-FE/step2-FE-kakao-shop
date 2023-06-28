import React, { useState } from 'react'
import styled from 'styled-components';

const Radiobox = styled.div`
  position: relative;
  top:200px;
  left:40%;
  label{
    border: 1px solid black;
    padding: 10px 15px;
  }
  input{
    margin-top:20px;
  }
  h3{
    color: green;
  }
`
const Desc = styled.h2`
  position:relative;
  top:200px;
  left:0;
  text-align: center;
`

export default function Radio() {
  // 옵션1을 기본값으로 설정해서 옵션1이 미리 선택되어있도록 한다.
  const [selectedValue, setSelectedValue] = useState('Apple')  

  const handleChange = (e) =>{
    // 이벤트가 발생할 때마다 선택된 값을 바꿔준다.
    setSelectedValue(e.target.value);
  }

  return (
    <>
    <Desc><h2> 좋아하는 과일 하나만 선택해봐 </h2></Desc>
    <Radiobox>
      <label>
        <input
          type='radio'
          value='Apple'
          checked={selectedValue === 'Apple'}
          onChange={handleChange}/>
          Apple
      </label>
      <label>
      <input
          type='radio'
          value='Banana'
          checked={selectedValue === 'Banana'}
          onChange={handleChange}/>
          Banana
      </label>
      <label>
      <input
          type='radio'
          value='Cherry'
          checked={selectedValue === 'Cherry'}
          onChange={handleChange}/>
          Cherry
      </label>
      <h3 className='result'>선택하신 과일은 {selectedValue}입니다</h3>
    </Radiobox>

    </>

  )
}
