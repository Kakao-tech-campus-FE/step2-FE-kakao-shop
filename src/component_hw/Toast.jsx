import { useRef, useState } from "react"
import styled, {keyframes} from "styled-components"

function Toast({ children }) {

  const [view, setView] = useState(false)
  const viewRef = useRef(false)

  const handleClickToast = () => {
    if(view === false){
      setView(true)
      viewRef.current = !viewRef.current
    }

    if(viewRef.current === true){
      viewRef.current = !viewRef.current
      setTimeout(()=>{
        setView(false)
      },3000)
    }
  }


  return (
    <>
    <Button onClick={handleClickToast}>CLICK</Button>
    {view && <ToastAlert>{children}</ToastAlert>}
    </>
  )
}

export default Toast


const Button = styled.button`
  margin: 20px;
  padding: 0.5rem 1rem;

  font-family: "Noto Sans KR", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;

  display: inline-block;
  width: auto;

  border: none;
  border-radius: 4px;

  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: 0.5s;
  background-color: #ccc;
  color: black;
`


const slideOut = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-150%);
  }
`

const ToastAlert = styled.div`
  background-color: #e91e63;
  border: 1px solid rgba(255, 127, 80, 0.1);
  border-radius: 10px;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  height: 1.4rem;
  width: 10rem;
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