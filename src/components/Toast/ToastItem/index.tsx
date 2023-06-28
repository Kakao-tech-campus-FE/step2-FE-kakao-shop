import React, { useEffect } from "react";

const ToastItem = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);
  return <div>ToastItem</div>;
};

export default ToastItem;
