import {useDispatch, useSelector} from "react-redux";
import {reducerLogout} from "../../store/slice/userSlice";
import "../../styles/organisms/globalNavBar.css"
import Container from "../atoms/Container";
import {Link, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {BsCart2} from "react-icons/bs";

const GlobalNavBar = () => {
    const user = useSelector(state => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.isLogin) return;
        const today = new Date();
        if (today > new Date(user.expirationTime)) {
            dispatch(reducerLogout());
        }
    });

    return (
        <>
            <nav className={"global-nav-bar"}>
                <Container className={"logo bg-red"}>
                    <Link className={"logo button object-contain"} to={"/"}><img src={"/images/logoKakao.png"} alt={"logo"}/>
                    </Link>
                </Container>
                <Container className={"gnb-buttons"}>
                    {user.isLogin ?
                        <>
                            <div className={"user-info"}>{user.email}</div>
                            <Link to={"/carts"} className={"cart-button px-2 font-bold"}>
                                    <BsCart2 size="20" className={"cart-icon"}/>
                            </Link>
                            <button className={"logout-button px-2"}
                                    onClick={
                                        () => {
                                            dispatch(reducerLogout())
                                            navigate("/")
                                        }
                                    }>로그아웃
                            </button>
                        </>
                        :
                        <>
                            <Link to={"/login"} className={"login-button font-bold px-4 block h-full"}>로그인</Link>
                            <Link to={"/signup"} className={"signup-button font-bold px-4 block h-full"}>회원가입</Link>
                        </>
                    }
                </Container>
            </nav>
            <div className={"global-nav-bar-dummy"}></div>
        </>
    );
}

export default GlobalNavBar;