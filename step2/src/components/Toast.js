import React, { useEffect, useState } from 'react';
import "./Toast.css";

export const Toast = (props) => {
  const [remainingTime, setRemainingTime] = useState(2500);

  useEffect(() => {
    let timer = setTimeout(() => {
      props.setToastState(false);
    }, remainingTime);

    return () => {
      clearTimeout(timer);
    };
  }, [remainingTime, props]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const progress = (remainingTime / 2500) * 100;

  return (
    <div className="toast-message">
      <div>{props.message}</div>
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};
