import {useState} from 'react'
import { styled } from 'styled-components'



function Toggle() {
  const [click, setClick] = useState(false)
  const onClickToggle = () => {
    setClick(!click)
  }


  return (
    <ToggleWrap onClick = {onClickToggle} style= {{backgroundColor : click ? "green" : "gray"}}>
          <ToggleButoon styleobj = {click}></ToggleButoon>
    </ToggleWrap>
  )
}

export default Toggle


const ToggleWrap = styled.div`
  width: 90px;
  height: 45px;
  border-radius: 120px;
  position: relative;
  margin: 20px;
`

const ToggleButoon = styled.div`
  position: absolute;
  left: 2px;
  top: 5%;
  width: 40px; 
  height: 40px;
  border-radius: 40px;
  background-color: white;
  transition: 0.3s;
  transform: ${(props) => {return props.styleobj === true ? "translateX(0px)" : "translateX(40px)"}}
`

