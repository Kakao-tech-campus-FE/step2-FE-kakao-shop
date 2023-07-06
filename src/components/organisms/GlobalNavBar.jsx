import Button from "../atoms/Button";
import Box from "../atoms/Box";
import {useDispatch, useSelector} from "react-redux";
import {reducerLogout} from "../../store/userSlice";
import "../../styles/globalNavBar.css"
import Container from "../atoms/Container";

const GlobalNavBar = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    return (
        <div className={"global-nav-bar"}>
            <Container className={"logo"}>
                <Button className={"logo"}
                        onClick={() => window.location.href = "/"}>Home</Button>
            </Container>
            <Container className={"gnb-buttons"}>
                {user.isLogin ?
                    <>
                        <Box className={"user-info"}>userData.email</Box>
                        <Button className={"logout-button"}
                                onClick={
                                    dispatch(reducerLogout())
                                }>로그아웃
                        </Button>
                    </>
                    :
                    <>
                        <Button className={"login-button"} onClick={() => window.location.href = "/login"}>로그인</Button>
                        <Button className={"register-button"}
                                onClick={() => window.location.href = "/signup"}>회원가입</Button>
                    </>
                }
            </Container>
        </div>
    );
}

export default GlobalNavBar;