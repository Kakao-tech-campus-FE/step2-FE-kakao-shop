import Button from "../atoms/Button";
import Box from "../atoms/Box";
import {useDispatch, useSelector} from "react-redux";
import {reducerLogout} from "../../store/slice/userSlice";
import "../../styles/globalNavBar.css"
import Container from "../atoms/Container";
import {Link} from "react-router-dom";

const GlobalNavBar = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    return (
        <div className={"global-nav-bar"}>
            <Container className={"logo"}>
                <Link className={"logo button"} to={"/"}>Home</Link>
            </Container>
            <Container className={"gnb-buttons"}>
                {user.isLogin ?
                    <>
                        <Box className={"user-info"}>{user.email}</Box>
                        <Button className={"logout-button"}
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
        </div>
    );
}

export default GlobalNavBar;