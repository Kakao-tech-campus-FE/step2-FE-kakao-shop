import {useState} from 'react'
import { styled } from 'styled-components'

function RadioButton() {
  const [radioOption, setRadioOption] = useState()

  const handleCheckList = (e) => {
    setRadioOption(e.target.value)
  }


  return (
  <RadiotWrap>
    <RadioButtonLabel>
      <input type="radio" value="cash" name="payment" onClick = {handleCheckList} checked={radioOption === "cash" ? true : false}/>
      Cash
    </RadioButtonLabel>
    <RadioButtonLabel>
      <input type="radio" value="card" name="payment" onClick = {handleCheckList} checked={radioOption === "card" ? true : false}/>
      Card
    </RadioButtonLabel>
    <RadioButtonLabel>
      <input type="radio" value="point" name="payment" onClick = {handleCheckList} checked={radioOption === "point" ? true : false}/>
      Point
    </RadioButtonLabel>
  </RadiotWrap>  
  );
}

export default RadioButton


const RadiotWrap = styled.div`
  border: 7px lightblue solid;
  border-radius: 10px;
  width: 150px;
  height: 100px;
  margin: 10px;

`

const RadioButtonLabel = styled.label`
  display: block;
  margin: 7px 20px;
  font-weight: bold;
`
