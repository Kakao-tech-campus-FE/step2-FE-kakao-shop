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
        <div className={classnames("toast-container", {color: true})}>
            <p className={classnames("toast-message", {color: true})}>{text}</p>
        </div>
    );
};

export default Toast;