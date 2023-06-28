import { useEffect, useState } from "react";

const Toast = ({ text }) => {
    const [toast, setToast] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setToast(false);
        }, 2000);

        return () => {
            clearTimeout(timer);
        }
    }, [setToast]);
    
    return (
        <div>
            <p>{text}</p>
        </div>
    );
};

export default Toast;