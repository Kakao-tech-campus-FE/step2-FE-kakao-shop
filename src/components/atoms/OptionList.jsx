import { comma } from "../../utils/convert"
import styles from "./OptionList.module.css";

const OptionList = ({ options, onClick }) => {
    console.log('OptionList');
    return (
        <ol className={styles.option_list}>
            {options.map((option, index) => (
                <li key={option.id} className={styles.option} onClick={() => onClick(option)}>
                    <div className={styles.option_name}>{option.optionName}</div>
                    <span className={styles.option_price}>{comma(option.price)}원</span>
                </li>
            ))}
        </ol>
    );
};

export default OptionList;