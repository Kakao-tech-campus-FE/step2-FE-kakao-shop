import './Toast.css';
import React, { useState, useEffect, useRef } from "react";

function Toast() {
    const [toast, setToast] = useState(false);
    const toastRef = useRef();
    
    useEffect(() => {
        let timer;
        if(toast){
            console.log("toast start");
            toastRef.current.style = "bottom: 0; visibility: visible;"
            timer = setTimeout(() => {
                setToast(false);
            }, 3000);
        }
        else {
            toastRef.current.style = "bottom: -200px;"
            clearTimeout(timer);
            console.log("toast end");
        }
    }, [toast]);

    return (
        <>
            <button className="mainButton" onClick={() => {setToast(true)}}>SHOW</button>
            <div className="toast" ref={toastRef}>
                <p className="toast-message">
                    This is toast message!!!🌊🦀
                </p>
                
            </div>
        </>
    );
}

export default Toast;