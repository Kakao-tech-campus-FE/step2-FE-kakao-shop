import { useState, React } from "react";
import styles from "../../css/Breadcrumb.module.css";



const Breadcrumb = () => {
    const onClick = (e) => {
        setBread(`main / ${e.target.dataset.id}`);
    }

    const [Bread, setBread] = useState("main");
    return (
        <div>
            <h2 className={styles.h2}>2. Breadcrumb 구현</h2>

            <p> 리스트 클릭 시 경로가 표시됩니다..</p>
            <ul className={styles.ulTag}>
                <li>{Bread}</li>
                <li onClick={onClick} data-id="경로1번">경로1번</li>
                <li onClick={onClick} data-id="경로2번">경로2번</li>
                <li onClick={onClick} data-id="경로3번">경로3번</li>
            </ul>
        </div >
    )
}

export default Breadcrumb;