import {useEffect, useState} from "react";

const Toast = ({ title, message, time }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, time);
  }, [time]);

  return (
      <div className={"toast "+`${show? "":"toast-hide"}`}>
        <button className="toast-close-button" onClick={() => {setShow(false)}}>&times;</button>
        <div className="toast-title">{title}</div>
        <div className="toast-message">{message}</div>
      </div>
  );
}

export default Toast