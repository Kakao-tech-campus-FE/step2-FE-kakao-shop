import { useState, useEffect } from "react";

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
      <button
        className="ml-3 rounded-md bg-kakao px-10 py-4 text-lg "
        onClick={openToast}
      >
        구매하기
      </button>
      {toast && (
        <div class="fixed bottom-7 left-1/2 z-10 flex h-16 w-[700px] -translate-x-[50%] animate-fadein items-center rounded-md bg-lightgray pl-5 text-white">
          상품 구매가 완료되었습니다.
        </div>
      )}
    </>
  );
}
