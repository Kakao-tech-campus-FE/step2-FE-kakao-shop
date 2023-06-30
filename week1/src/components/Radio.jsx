import { useState, React } from "react";
import styles from "../css/Radio.module.css";






const Radio = () => {

    const checkBoxList = ["빨강", "노랑", "파랑", "검정", "하양"];
    const [list, setList] = useState([]);
    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setList([...list, value]);
        } else {
            setList(list.filter(item => item !== value));
        }
    };
    return (
        <div>
            <h2 className={styles.h2}>4. 라디오버튼 구현</h2>
            {checkBoxList.map((item) => (
                <div>
                    <input type="radio" id={item} onChange={handleCheckboxChange}
                        Checked={list.includes(item)} value={item}></input>
                    <label htmlFor={item}>{item}</label>
                </div>

            )

            )}
            <p>{list.join(", ")} 색 옷을 구매하고 싶어요</p>




        </div >
    )
}

export default Radio;