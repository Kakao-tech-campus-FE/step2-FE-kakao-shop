import {useEffect, useState} from "react";

const Toast = ({ title, message, time, toggle }) => {
  const [show, setShow] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShow(false);
  //   }, time);
  // }, [time]);

  useEffect(() => {
      toggle? setShow(true):setShow(false);
    }, [toggle]);


  return (
      <div className={"toast "+`${show? "":"toast-hide"}`}>
        <button className="toast-close-button" onClick={() => {setShow(false)}}>&times;</button>
        <div className="toast-title">{title}</div>
        <div className="toast-message">{message}</div>
      </div>
  );
}

export default Toast