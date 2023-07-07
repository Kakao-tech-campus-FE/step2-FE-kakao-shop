import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import cookie from "react-cookies";
import {useSelector, useDispatch} from 'react-redux';
import {setId} from "../redux/userSlice";
import Button from "../components/atoms/customButton";

const MainPage = () => {
    const navigate = useNavigate();
    const userId = useSelector((state) => state.user.id);
    const dispatch = useDispatch();
    const checkValidUser = () => {
        const cookieAccessToken = cookie.load('access_token');
        const cookieUserId = cookie.load('user_id');
        if (cookieAccessToken && cookieUserId) {
            dispatch(setId(cookieUserId));
        }
    }
    useEffect(() => {
        checkValidUser();
    }, []);


    return (
        <div className="max-w-md text-center m-auto">
            <h1 className="m-2 p-2 text-lg ">Main Page</h1>
            {userId
                ? <div>{`유저 id : ${userId}`}</div> : (<div>
                    <Button onClick={() => navigate('/login')}>로그인
                        Page
                    </Button>
                    <Button onClick={() => navigate('/signup')}>회원가입
                        Page
                    </Button>
                </div>)}
        </div>
    );
}

export default MainPage;