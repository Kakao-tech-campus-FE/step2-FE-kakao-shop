import { useState, React } from "react";
import styles from "../css/Toast.module.css";

const PopUp = () => {
    return (
        <div className={styles.toast} >pop up!</div>
    )
}

const Toast = () => {
    const onClick = () => {
        setToast(true);
        setTimeout(() => {
            setToast(false);
        }, "1500");
    }
    const [toast, setToast] = useState(false);
    return (
        <div>
            <h2 className={styles.h2}>1.. 토스트 구현</h2>
            <button className={styles.Button} onClick={onClick}>Toast BTN</button>
            {toast === true ? <PopUp /> : null}

        </div >
    )
}

export default Toast;