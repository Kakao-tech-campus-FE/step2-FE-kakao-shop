import { useEffect } from "react";
import classnames from 'classnames';
import "../styles/toast.css"

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
        <div className={classnames("toast-container", color)}>
            <p className={classnames("toast-message", color)}>{text}</p>
        </div>
    );
};

export default Toast;