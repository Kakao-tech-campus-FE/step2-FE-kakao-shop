import React, { useState } from "react";

import '../../styles/Toast.css';

const Toast = () => {
    const [showToast, setShowToast] = useState(false);

    const handleToastClick = () => {
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    return (
        <>  
            <button onClick={handleToastClick}>토스트 호출 버튼</button>
            <div className={`toast ${showToast ? "show" : ""}`}>
                저는 토스트입니다. 호호!
            </div>
        </>
    )
}

export default Toast