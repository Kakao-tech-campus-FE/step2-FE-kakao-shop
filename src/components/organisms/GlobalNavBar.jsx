import Button from "../atoms/Button";
import Box from "../atoms/Box";
import {useDispatch, useSelector} from "react-redux";
import {reducerLogout} from "../../store/userSlice";

const GlobalNavBar = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    return (
        <div className={"global-nav-bar"}>
            <div>
            </div>
            <div>
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
                        <Button className={"login-button"} onClick={"location.href=`/login`"}>로그인</Button>
                        <Button className={"register-button"} onClick={"location.href='/signup'"}>회원가입</Button>
                    </>
                }
            </div>
        </div>
    );
}

export default GlobalNavBar;