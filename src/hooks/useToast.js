import { useState } from "react";

const defaultToast = {
  message: "This is a toast component",
  toastShow: false,
};
const useToast = (
  initMessage = defaultToast.message,
  initShow = defaultToast.toastShow,
) => {
  const [toastMessage, setToastMessage] = useState(initMessage);
  const [toastShow, setToastShow] = useState(initShow);

  const showToast = (message) => {
    setToastMessage(message);
    setToastShow(true);
  };

  const hideToast = () => {
    setToastShow(false);
  };

  return { toastMessage, toastShow, showToast, hideToast };
};

export default useToast;
