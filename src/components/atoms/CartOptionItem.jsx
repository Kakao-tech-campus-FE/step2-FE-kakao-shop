import styles from "./CartOptionItem.module.css";
import { useState, useEffect, useMemo } from "react";
import Counter from "../atoms/Counter";
import { comma } from "../../utils/convert";

const CartOptionItem = ({ optionItem, onChange }) => {
    const [count, setCount] = useState(optionItem.quantity);
    const price = useMemo(() => 
        count * optionItem.option.price
    , [count]);
    
    // console.log('cart option item', optionItem);
    useEffect(() => {
        onChange(count);
    }, [count]);

    const deleteOptionItem = () => {
        setCount(0);
    };

    if(count <= 0) return;
    return (
        <div className={styles.option_info}>
            <div className={styles.option_name}>
                <span>{optionItem.option.optionName}</span>
            </div>
            <div className={styles.option_amount}>
                <button
                    className={styles.delete_btn}
                    onClick={() => {
                        deleteOptionItem();
                    }}
                > 삭제 </button>
                <Counter 
                    value={count}
                    onChange={(value) => {
                        setCount(value);
                    }}
                    />
                <span className={styles.price}>{comma(price)}원</span>
            </div>
        </div>
    )
}

export default CartOptionItem;