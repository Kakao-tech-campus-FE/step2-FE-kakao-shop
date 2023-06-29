import React, { useState } from 'react'
import { styled } from 'styled-components';

const options = ['카카오 페이', '카드 결제', '무통장 입금']

const Box = styled.div`
  border: 1px solid lightgray;
  width: 300px;
  padding: 10px;
  margin: 50px;
  background-color: white;
`;

const OptionBox = styled.div`
    display: flex;
`;


const Radio = () => {
  const [select, setSelect] = useState(options[0]);
  
  const check = (item) => {
    console.log(item, select)
    setSelect(item)
  };

  const RadioBtn = ( {val, onChange} ) => {
    return (
      <input type="radio"
      onChange={onChange}
      checked={select===val}
      style={{margin: '0 10px'}}
      />
    )}

  return (
    <>
      <Box>
        {options.map((item, i) => (
          <>
            <OptionBox>
              <RadioBtn val={item} onChange={() => {check(item)}} /> 
              <label onClick={() => {check(item)}}
                style={{backgroundColor: select === item ? "yellow" : null}}>
                {item}
              </label>
            </OptionBox>
            {i + 1 !==options.length ? <hr style={ {opacity: 0.5} }/> : null}
          </>
        ))}
      </Box>

      <p>{select} 선택됨</p>
    </>
  )
}

export default Radio