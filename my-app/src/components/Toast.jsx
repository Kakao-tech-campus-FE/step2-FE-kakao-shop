import React from "react";

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
