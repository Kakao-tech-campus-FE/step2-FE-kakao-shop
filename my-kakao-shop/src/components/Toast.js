import {useEffect, useState} from "react";

const Toast = ({ message, time }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, time);
    clearTimeout(timer);
  }, [time]);

  return (
    <div className={`toast ${show ? "show" : ""}`}>
      <div className="toast__message">{message}</div>
    </div>
  );
}