import React from "react";
import ReactDOM from "react-dom";

//isOpen: 모달의 열림 여부를 제어
//onClose: 모달을 닫는 함수를 전달받는다
//children prop은 모달 내부에 표시될 컨텐츠

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    X
                </button>
                {children}
            </div>
        </div>,
        document.getElementById("modal-root")
    );
};

export default Modal;