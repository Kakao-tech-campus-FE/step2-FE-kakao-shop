import { useEffect, useRef } from 'react';
import './toast.css';

const Toast = ({ children, upTime = 100, downTime = 2500 }) => {
    const toastRef = useRef(null);
    useEffect(() => {
        toastRef.current.style.transition = `transform 0.5s ease-in-out`;
        toastRef.current.style.transform = `translateY(100%)`;
        setTimeout(() => {
            toastRef.current.style.transform = 'translateY(-20%)'; // 위로 올라오는 애니메이션 설정
        }, upTime);
        setTimeout(() => {
            toastRef.current.style.transform = 'translateY(100%)'; // 사라지는 애니메이션 설정
        }, downTime);
    }, []);

    return (
        <div className="Toast" ref={toastRef}>
            <p>{children}</p>
        </div>
    );
};
export default Toast;
