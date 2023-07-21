import { useState, useEffect } from "react";
import styles from "./Counter.module.css";

const Counter = ({ value = 1, onChange }) => {
    const [count, setCount] = useState(value);

    useEffect(() => {
        setCount(value);
    }, [value]);
    useEffect(() => {
        onChange(count);
    }, [count]);

    const handleOnIncrease = () => {
        setCount(count + 1);
    }
    const handleOnDecrease = () => {
        setCount(count>1 ? count - 1 : count);
    }
    return (
        <div className={styles.counter}>
            <button className={`${styles.decrease_btn} ${count>1? "" : styles.disabled}`}onClick={handleOnDecrease}>-</button>
            <span className={styles.count}>{count}</span>
            <button className={styles.increase_btn} onClick={handleOnIncrease}>+</button>
        </div>
    )
}

export default Counter;