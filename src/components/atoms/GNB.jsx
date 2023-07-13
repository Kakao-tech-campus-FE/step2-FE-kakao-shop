import { Link } from "react-router-dom"
import cookies from "react-cookies";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../../store/slices/userSlice";
import styles from "./GNB.module.css";

const GNB = () => {
    const token = useSelector((state) => state.user.token);
    const dispatch = useDispatch();

    const handleLogout = () => {
        cookies.remove('token');
        dispatch(removeToken());
        alert("logout");
        window.location.reload();
    }
    return (
        <>
        <header className={styles.head}>
            <div className={styles.inner}>
                <div className={styles.contents}>
                    <Link className={styles.link_logo} to="/">
                        <img className={styles.img_logo} src={`${process.env.PUBLIC_URL}\logoKakao.png`} alt="logoKakao.png" />
                    </Link>
                    <nav className={styles.utils}>
                        <div className={styles.cart}>
                            {/* 장바구니 버튼 */}
                            <Link className={styles.link_cart} to="/cart">
                                <img className={styles.img_cart} src={`${process.env.PUBLIC_URL}\cart.png`} />
                            </Link>
                        </div>
                    </nav>
                    <span className={styles.partition}></span>
                    <div className={styles.user_menu}>
                        { token ? 
                            <Link to="/" onClick={handleLogout}>로그아웃</Link>
                            :
                            <Link className={styles.link_login} to="/login">로그인</Link>
                        }
                    </div>
                </div>
            </div>
        </header>
        <div className={styles.space}></div>
        </>
    )
}

export default GNB;