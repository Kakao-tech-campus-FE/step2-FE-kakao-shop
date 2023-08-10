import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import cookie from "react-cookies";
import {setId} from "../../redux/userSlice";
import {useEffect, useRef} from "react";
import Dialog from "../atoms/Dialog";
import {convertUrl} from "../../const";

const UserNav = () => {

    const userId = useSelector((state) => state.user.id);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const modalRef = useRef();

    const checkValidUser = () => {
        const cookieAccessToken = cookie.load('access_token');
        const cookieUserId = cookie.load('user_id');
        if (cookieAccessToken && cookieUserId) {
            dispatch(setId(cookieUserId));
        }
    }

    const logout = () => {
        cookie.remove('access_token', {path: '/'});
        cookie.remove('user_id', {path: '/'});
        dispatch(setId(null));
    }

    const goToCart = () => {
        if (!!userId) {
            navigate(convertUrl('/cart'));
        } else {
            modalRef.current.showModal();
        }
    }

    const modalTitle = '로그인이 필요합니다.';
    const modalSubTitle = '로그인하시겠습니까?';


    useEffect(() => {
        checkValidUser();
    }, []);

    return (
        <div className="flex mb-1">
            <div className="self-center">
                <button onClick={goToCart}>
                    <img alt="장바구니" className="h-7 mx-2" src={process.env.PUBLIC_URL + "/cart.png"}/>
                </button>
            </div>
            <div className="pl-7 border-l-2 ml-4 px-2 mt-0.5">
                {userId
                    ?
                    <div className="flex">
                        <div id="header-user-id" className="my-2">{`유저 id : ${userId}`}</div>
                        <button id="header-logout-btn" onClick={logout}>
                            <img alt="로그아웃" className="h-4 mx-4" src={process.env.PUBLIC_URL + "/logout.png"}/>
                        </button>
                    </div> :
                    <Link id="header-login-btn" to={convertUrl("/login")}
                          className="text-sm">
                        로그인
                    </Link>}
            </div>
            <Dialog ref={modalRef} title={modalTitle} subTitle={modalSubTitle} continueName="로그인"
                    link="/login"/>
        </div>
    );
}

export default UserNav;
