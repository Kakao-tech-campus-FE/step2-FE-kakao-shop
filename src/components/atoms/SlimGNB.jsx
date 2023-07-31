import { Link } from "react-router-dom"
import cookies from "react-cookies";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/userSlice";
// 절대경로 설정 ../../ -> @ root path 를 정할 수 있다.
import styles from "./SlimGNB.module.css";
import logoKakao from "../../assets/logoKakao.png";
import cart from "../../assets/cart.png";

const SlimGNB = () => {
    const token = useSelector((state) => state.user.token);
    const dispatch = useDispatch();

    const handleLogout = () => {
        cookies.remove('token');
        dispatch(logout());
        alert("logout");
        window.location.reload();
    }
    return (
        <>
        <header className={styles.head}>
            <div className={styles.inner}>
                <div className={styles.contents}>
                    <Link className={styles.link_logo} to="/">
                        <img className={styles.img_logo} src={logoKakao} alt="logoKakao.png" />
                    </Link>
                    <nav className={styles.utils}>
                        <div className={styles.cart}>
                            {/* 장바구니 버튼 */}
                            <Link className={styles.link_cart} to="/cart">
                                <img className={styles.img_cart} src={cart} />
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

export default SlimGNB;