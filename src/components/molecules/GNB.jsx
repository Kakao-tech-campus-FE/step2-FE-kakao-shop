import img from '../../assets/logoKakao.png';
import cart from "../../assets/cart.png";
import * as Head from '../../styles/molecules/GNB';
import ImgLink from "../atoms/ImgLink";
import LinkText from "../atoms/LinkText";
import { useDispatch } from "react-redux";
import { setEmail } from "../../store/slices/userSlice";
import { getLocalStorage, removeLocalStorageItem } from "../../utils/localStorage";

const GNB = () => {
    const dispatch = useDispatch();
    const user = getLocalStorage("user");;

    const handleLogOut = () => {
        if(user) {
            dispatch(setEmail({
                user: null,
            }));
            removeLocalStorageItem("user");
            alert("정상적으로 로그아웃 되었습니다.");
            window.location.reload();
        };
    };

    const handleLogin = () => {
        const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));
            if(!userFromLocalStorage || !userFromLocalStorage.value) {
                return false;
            };
            return true;
    };

    const handleOnCartClick = () => {
        if (!handleLogin()) {
            alert('로그인이 필요합니다.');
        };
    };


    return(
        <Head.Header>
            <Head.Container>
                <ImgLink to="/" src={img} alt="톡 쇼핑하기" className="header-logo"/>
                    <Head.MenuUtil>
                        <ImgLink to={handleLogin() ? "/cart" : "/login"} src={cart} alt="장바구니 버튼" className="header-cart" onClick={handleOnCartClick}/>
                        {user ? (
                            <LinkText text="로그아웃" to='/' className="header-login"  onClick={handleLogOut}/>
                        ) : (
                            <LinkText text="로그인"  to="/login" className="header-login"/>
                        )}
                    </Head.MenuUtil>
            </Head.Container>
        </Head.Header>
    );
};

export default GNB;