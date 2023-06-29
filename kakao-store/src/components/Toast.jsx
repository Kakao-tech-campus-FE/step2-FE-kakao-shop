import { useEffect } from "react";

const Toast = ({ text, color, setToast }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setToast(false);
        }, 2000);

        return () => {
            clearTimeout(timer);
        }
    }, [setToast]);
    
    return (
        <div className="toast-container" {...{color}}>
            <p className="toast-message" {...{color}}>{text}</p>
        </div>
    );
};

export default Toast;