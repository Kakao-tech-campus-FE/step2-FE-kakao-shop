import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import cookie from "react-cookies";
import {useSelector, useDispatch} from 'react-redux';
import {setId} from "../redux/userSlice";

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
        <div>
            <h1 className="m-2 p-2 text-lg">Main Page</h1>
            {userId
                ? <div></div> : (<>
                    <button className="bg-emerald-400 m-2 p-2 rounded" onClick={() => navigate('/login')}>Go to Login
                        Page
                    </button>
                    <button className="bg-emerald-400 m-2 p-2 rounded" onClick={() => navigate('/signup')}>Go to Sign Up
                        Page
                    </button>
                </>)}
        </div>
    );
}

export default MainPage;