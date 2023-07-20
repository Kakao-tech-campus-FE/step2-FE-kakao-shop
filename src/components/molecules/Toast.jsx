import { useEffect, useState } from "react"
import styled, {keyframes} from "styled-components"

function Toast({ children }) {

  const [view, setView] = useState(false)


  useEffect(()=>{
    setView(true)
    setTimeout(()=>{
      setView(false)
    },5000)
  },[])


  return (
    <>
    {view && <ToastAlert>{children}</ToastAlert>}
    </>
  )
}

export default Toast


const slideOut = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-150%);
  }
`

const ToastAlert = styled.span`
  background-color: #e91e63;
  border: 1px solid rgba(255, 127, 80, 0.1);
  border-radius: 10px;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  padding: 5px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  font-weight: normal;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  animation-duration: 1s; 
  animation-timing-function: ease-out;
  animation-name: ${slideOut}; 
  animation-fill-mode: forwards; 
`