import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import cookie from "react-cookies";
import {setId} from "../../redux/userSlice";
import {useEffect, useRef} from "react";

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
            navigate('/cart');
        } else {
            modalRef.current.showModal();
        }
    }

    const closeModal = () => {
        modalRef.current.close();
    }


    useEffect(() => {
        checkValidUser();
    }, []);

    return (
        <div className="flex mb-1">
            <div className="self-center">
                <button onClick={goToCart}>
                    <img alt="장바구니" className="h-7 mx-2" src="cart.png"/>
                </button>
            </div>
            <div className="pl-7 border-l-2 ml-4 px-2 mt-0.5">
                {userId
                    ?
                    <div className="flex">
                        <div className="my-2">{`유저 id : ${userId}`}</div>
                        <button onClick={logout}>
                            <img alt="로그아웃" className="h-4 mx-4" src="logout.png"/>
                        </button>
                    </div> :
                    <Link to="/login"
                          className="text-sm ">
                        로그인
                    </Link>}
            </div>
            <dialog ref={modalRef}>
                <div className="w-72">
                    <div className="text-md">로그인이 필요합니다.</div>
                    <div className="text-md pb-4">로그인하시겠습니까?</div>
                    <div className="flex">
                        <button onClick={closeModal} className="flex-grow py-1">취소</button>
                        <div className="bg-gray-600 w-0.5"></div>
                        <Link to="/login" className="flex-grow py-1 text-gray-800 font-bold text-center">
                            로그인
                        </Link>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

export default UserNav;
