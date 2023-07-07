import React from 'react';
import '../styles/Toast.css'

const Toast = () => {
  const [poped, setPoped] = React.useState(false)

  const toastRef = React.useRef("toastRef")
  const inputRef = React.useRef("inputRef")

  const clickHandler = () => {
    setPoped(true)
    toastRef.current.innerHTML = inputRef.current.value
    toastRef.current.style.opacity = "100%"
    toastRef.current.style.bottom = "10px"
    setTimeout(() => {
      toastRef.current.style.bottom = "-100px"
      toastRef.current.style.opacity = "0%"
      setPoped(false)
    }, 2000)
  }

  return (
    <>
      <input type="text" placeholder="Input message here." ref={inputRef} />
      <button onClick={clickHandler} disabled={poped}>Toast!</button>
      <div className="toast" ref={toastRef}></div>
    </>
  );
}

export default Toast;