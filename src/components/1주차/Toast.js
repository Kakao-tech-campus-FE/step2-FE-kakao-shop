import React, { useState } from "react";
import ToastMessage from "./ToastMessage";

const Toast = () => {
  const [toast, setToast] = useState(false);

  const handleSave = () => {
    setToast(true);
  };

  return (
    <div className="Toast">
      <h3>Toast</h3>
      <button onClick={handleSave}>저장</button>
      {toast && (
        <ToastMessage
          setToast={setToast}
          text="저장을 완료했어요:) 확인해보세요!"
        />
      )}
    </div>
  );
};

export default Toast;
