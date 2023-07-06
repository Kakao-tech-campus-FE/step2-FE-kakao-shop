import React from "react";
import "./Toast.css";

const Toast = ({ title, children, style, activateState }) => {
    const [activate, setActivate] = activateState;

    const handleClose = () => {
        setActivate((prev) => !prev);
    };

    return (
        <div className={`toast ${activate ? "activate" : ""}`} style={style}>
            <button
                className="material-symbols-outlined toast-close"
                onClick={handleClose}
            >
                close
            </button>
            {title ? <div className="toast_title">{title}</div> : ""}
            <div className="toast_content">{children}</div>
        </div>
    );
};

export default Toast;
