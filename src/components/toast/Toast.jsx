import { useEffect, useRef } from "react";
import "./toast.css"

const Toast = ({content}) => {
    const toastRef = useRef(null);
    useEffect(()=>{
        toastRef.current.style.transition = `transform 0.5s ease-in-out`;
        toastRef.current.style.transform = `translateY(100%)`;
        setTimeout(() => {
            toastRef.current.style.transform = "translateY(-20%)"; // 위로 올라오는 애니메이션 설정
        }, 100);
        setTimeout(() => {
            toastRef.current.style.transform = "translateY(100%)"; // 사라지는 애니메이션 설정
        }, 2500);
    }, []);

    return(
        <div className="Toast" ref={toastRef}>
            <p>{content}</p>
        </div>
    )
}
export default Toast;