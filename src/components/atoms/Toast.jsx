import React from "react";
import "../styles/Toast.css";
const Toast = () => {
  const [setPopedMsg] = React.useState([]);
  const toastRef = React.useRef("toastRef");
  const inputRef = React.useRef("inputRef");
  const clickHandler = () => {
    setPopedMsg(true);
    toastRef.current.style.display = "block";
    toastRef.current.style.bottom = "10px";
    setTimeout(() => {
      toastRef.current.style.bottom = "-100px";
      toastRef.current.style.display = "none";
      setPopedMsg(false);
    }, 2000);
    return (
      <div className="toast" ref={toastRef}>
        {inputRef.current.value}
      </div>
    );
  };
  return (
    <>
      <input type="text" placeholder="Input message here." ref={inputRef} />
      <button onClick={clickHandler}>Toast!</button>
      <div className="toast" ref={toastRef}>
        {inputRef.current.value}
      </div>
    </>
  );
};

export default Toast;