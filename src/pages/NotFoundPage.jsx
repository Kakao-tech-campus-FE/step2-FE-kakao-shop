import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
    return (
        <>
            <h1>404 Not Found</h1>
            <p>페이지가 존재하지 않습니다.</p>
            <button
                className={styles.home_btn}
                onClick={() => { window.location.href="/"; }}
            >
                카카오 쇼핑하기 홈으로 이동
            </button>
        </>
    );
}

export default NotFoundPage;