import { useState, useEffect } from "react";
import { ToastButton, ToastContainer } from "./style";

export default function Toast() {
  const [toast, setToast] = useState(false);

  const openToast = () => {
    setToast(true);
  };

  useEffect(() => {
    let timeout;
    if (toast) {
      timeout = setTimeout(() => {
        setToast(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [toast]);

  return (
    <>
      <ToastButton onClick={openToast}>구매하기</ToastButton>
      {toast && <ToastContainer>상품 구매가 완료되었습니다.</ToastContainer>}
    </>
  );
}
