import { useEffect, useState } from 'react';
import Toast from '../components/toast/Toast';

const ToastPage = () => {
    const [isShow, setIsShow] = useState(false);
    const handleToast = () => {
        setIsShow(true);
    };

    useEffect(() => {
        console.log(isShow);
        if (isShow) {
            const timer = setTimeout(() => {
                setIsShow(false);
            }, 3000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [isShow]);

    return (
        <>
            <h2>Toast</h2>
            <button onClick={handleToast}>Toast</button>
            {isShow ? <Toast content={'Toast Component'} /> : null}
        </>
    );
};
export default ToastPage;
