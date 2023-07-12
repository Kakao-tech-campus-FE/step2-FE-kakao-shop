import React from "react";
import "./Toast.css";

// 내가 만든 것을 dialog 컴포넌트
function Toast(props) {
  return (
    <div className="toast-container">
      <div className={`${props.className}`}>
        <p id="toastTxt">{props.children}</p>
        <p
          id="toastBtn"
          onClick={props.handleToast}
          style={{ cursor: "pointer" }}
        >
          확인
        </p>
      </div>
    </div>
  );
}

export default Toast;
