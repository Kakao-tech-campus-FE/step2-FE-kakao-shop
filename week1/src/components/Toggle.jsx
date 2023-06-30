import { useState, React } from "react";
import styles from "../css/Toggle.module.css";



const Toggle = () => {

    const [isOn, setisOn] = useState(false);

    const toggleHandler = () => {
        setisOn(!isOn)
    };

    return (
        <>
            <h2 className={styles.h2}>5. 토글버튼 구현</h2>
            <div onClick={toggleHandler}>
                <div className={`${styles.toggleContainer} ${styles.isOn ? "toggleChecked" : null}`} />
                <div className={`${styles.circle} ${styles.isOn ? "circleChecked" : null}`} />
            </div>

            {isOn === false ?
                <div className='OFF'>Switch OFF</div> :
                <div className='ON'>Switch ON</div>}
        </>
    );
}


export default Toggle;