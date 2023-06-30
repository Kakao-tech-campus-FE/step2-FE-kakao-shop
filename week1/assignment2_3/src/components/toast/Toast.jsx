import { useEffect } from "react";

const Toast = ({ setToast, text, interval = 1500 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, interval);
    console.log(setToast);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

export default Toast;
