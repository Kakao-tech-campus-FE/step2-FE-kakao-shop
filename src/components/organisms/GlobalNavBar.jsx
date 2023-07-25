import Button from "../atoms/Button";
import Box from "../atoms/Box";
import {useDispatch, useSelector} from "react-redux";
import {reducerLogout} from "../../store/slice/userSlice";
import "../../styles/organisms/globalNavBar.css"
import Container from "../atoms/Container";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {BsCart2} from "react-icons/bs";

const GlobalNavBar = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

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
                    <Link className={"logo button"} to={"/"}>Home</Link>
                </Container>
                <Container className={"gnb-buttons"}>
                    {user.isLogin ?
                        <>
                            <Box className={"user-info"}>{user.email}</Box>
                            <Link to={"/carts"} className={"button cart-button"}>
                                    <BsCart2 size="20" className={"cart-icon"}/>
                            </Link>
                            <Button className={"button logout-button"}
                                    onClick={
                                        () => {
                                            dispatch(reducerLogout())
                                        }
                                    }>로그아웃
                            </Button>
                        </>
                        :
                        <>
                            <Link to={"/login"} className={"button"}>로그인</Link>
                            <Link to={"/signup"} className={"button"}>회원가입</Link>
                        </>
                    }
                </Container>
            </nav>
            <div className={"global-nav-bar-dummy"}></div>
        </>
    );
}

export default GlobalNavBar;